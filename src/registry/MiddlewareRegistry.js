import { applyMiddleware } from 'redux';

/**
 * A registry for Redux middleware, allowing features to register their
 * middleware without needing to create additional inter-feature dependencies.
 */
export class MiddlewareRegistry {
    /**
     * Creates a MiddlewareRegistry instance.
     */
    constructor() {
        /**
         * The set of registered middleware.
         *
         * @private
         * @type {Middleware[]}
         */
        this._elements = [];
    }

    /**
     * Applies all registered middleware into a store enhancer.
     * (@link http://redux.js.org/docs/api/applyMiddleware.html).
     *
     * @param {Middleware[]} additional - Any additional middleware that need to
     * be included (such as middleware from third-party modules).
     * @returns {Middleware}
     */
    applyMiddleware(...additional) {
        return applyMiddleware(...this._elements, ...additional);
    }

    /**
     * Adds a middleware to the registry.
     *
     * The method is to be invoked only before {@link #applyMiddleware()}.
     *
     * @param {Middleware} middleware - A Redux middleware.
     * @returns {void}
     */
    register(middleware) {
        this._elements.push(middleware);
    }
}

/**
 * The public singleton instance of the MiddlewareRegistry class.
 */
export default new MiddlewareRegistry();
