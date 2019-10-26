const jwt = require('jsonwebtoken');

/**
 * Enables convenient placeholder swapping functionality for API requests
 *
 * config:
 *    context:
 *      encoded JWT token with keys `{ aid, tid }` (actor id, target id)
 *
 *    publicKey:
 *      public ECDSA key for decoding context
 *
 *    placeholder:
 *      preferred placeholder string for URL paths. default: :USER_CANONICAL_ID
 *
 *    logger:
 *      preferred logger, with Function properties: [warn, error, debug, info]
 */
class CoBrowsing {
  constructor(config) {
    if (config) {
      const {
        context, publicKey, logger, placeholder,
      } = config;

      this.logger = logger || {
        warn: () => undefined,
        error: () => undefined,
        debug: () => undefined,
      };
      this.placeholder = placeholder || ':USER_CANONICAL_ID';
      this.users = this._usersFromContext(context, publicKey);
    }
  }

  /**
   * If there's a co-browsing session in progress
   * @returns {boolean}
   */
  isCoBrowsing() {
    return !!(this.users && this.users.target && this.users.actor);
  }

  /**
   * User canonical id for the target user
   * @returns {String}
   */
  getTargetUser() {
    if (!this.users) return null;

    return this.users.target;
  }

  /**
   * User canonical id for the actor user
   * @returns {String}
   */
  getActorUser() {
    if (!this.users) return null;

    return this.users.actor;
  }


  _usersFromContext(context, publicKey) {
    if (!context) {
      this.logger.warn('`context` is required');
    }

    if (!publicKey) {
      this.logger.warn('`publicKey` is required');
    }

    if (!context || !publicKey) {
      return null;
    }

    try {
      const { aid, tid } = jwt.verify(context, publicKey, {
        algorithms: ['ES256'],
      });

      return Object.freeze({
        actor: aid,
        target: tid,
      });
    } catch (err) {
      this.logger.error(err);
      return null;
    }
  }
}

module.exports = CoBrowsing;
