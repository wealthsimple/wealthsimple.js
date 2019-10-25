const jwt = require('jsonwebtoken');

class CoBrowsing {
  constructor({ context, publicKey, logger = console }) {
    this.logger = logger;
    this.users = this._usersFromContext(context, publicKey);
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

  isCoBrowsing() {
    return !!(this.users && this.users.target && this.users.actor);
  }

  getTargetUser() {
    if (!this.users) return null;

    return this.users.target;
  }

  getActorUser() {
    if (!this.users) return null;

    return this.users.actor;
  }
}

module.exports = CoBrowsing;
