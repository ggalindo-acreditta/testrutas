(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-elements-elements-module~main-routes-routes-module"],{

/***/ "./node_modules/@angular/material/esm5/chips.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/chips.es5.js ***!
  \**********************************************************/
/*! exports provided: MatChipsModule, MatChipListChange, MatChipList, MatChipSelectionChange, MatChipAvatar, MatChipTrailingIcon, MatChip, MatChipRemove, MatChipInput, MAT_CHIPS_DEFAULT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule", function() { return MatChipsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipListChange", function() { return MatChipListChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipList", function() { return MatChipList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipSelectionChange", function() { return MatChipSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipAvatar", function() { return MatChipAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipTrailingIcon", function() { return MatChipTrailingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChip", function() { return MatChip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipRemove", function() { return MatChipRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatChipInput", function() { return MatChipInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS", function() { return MAT_CHIPS_DEFAULT_OPTIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event object emitted by MatChip when selected or deselected.
 */
var  /**
 * Event object emitted by MatChip when selected or deselected.
 */
MatChipSelectionChange = /** @class */ (function () {
    function MatChipSelectionChange(source, selected, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.selected = selected;
        this.isUserInput = isUserInput;
    }
    return MatChipSelectionChange;
}());
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatChip.
/**
 * \@docs-private
 */
MatChipBase = /** @class */ (function () {
    function MatChipBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatChipBase;
}());
/** @type {?} */
var _MatChipMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatChipBase)), 'primary');
/**
 * Dummy directive to add CSS class to chip avatar.
 * \@docs-private
 */
var MatChipAvatar = /** @class */ (function () {
    function MatChipAvatar() {
    }
    MatChipAvatar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-chip-avatar, [matChipAvatar]',
                    host: { 'class': 'mat-chip-avatar' }
                },] },
    ];
    return MatChipAvatar;
}());
/**
 * Dummy directive to add CSS class to chip trailing icon.
 * \@docs-private
 */
var MatChipTrailingIcon = /** @class */ (function () {
    function MatChipTrailingIcon() {
    }
    MatChipTrailingIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-chip-trailing-icon, [matChipTrailingIcon]',
                    host: { 'class': 'mat-chip-trailing-icon' }
                },] },
    ];
    return MatChipTrailingIcon;
}());
/**
 * Material design styled Chip component. Used inside the MatChipList component.
 */
var MatChip = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChip, _super);
    function MatChip(_elementRef, _ngZone, platform, globalRippleOptions, 
    // @breaking-change 8.0.0 `animationMode` parameter to become required.
    animationMode, _changeDetectorRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._ngZone = _ngZone;
        _this._changeDetectorRef = _changeDetectorRef;
        /**
         * Whether the chip has focus.
         */
        _this._hasFocus = false;
        /**
         * Whether the chip list is selectable
         */
        _this.chipListSelectable = true;
        /**
         * Whether the chip list is in multi-selection mode.
         */
        _this._chipListMultiple = false;
        _this._selected = false;
        _this._selectable = true;
        _this._removable = true;
        /**
         * Emits when the chip is focused.
         */
        _this._onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emits when the chip is blured.
         */
        _this._onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Emitted when the chip is selected or deselected.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emitted when the chip is destroyed.
         */
        _this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emitted when a chip is to be removed.
         */
        _this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        _this._addHostClassName();
        _this._chipRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["RippleRenderer"](_this, _ngZone, _elementRef, platform);
        _this._chipRipple.setupTriggerEvents(_elementRef);
        _this.rippleConfig = globalRippleOptions || {};
        _this._animationsDisabled = animationMode === 'NoopAnimations';
        return _this;
    }
    Object.defineProperty(MatChip.prototype, "rippleDisabled", {
        /**
         * Whether ripples are disabled on interaction
         * @docs-private
         */
        get: /**
         * Whether ripples are disabled on interaction
         * \@docs-private
         * @return {?}
         */
        function () {
            return this.disabled || this.disableRipple || !!this.rippleConfig.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selected", {
        /** Whether the chip is selected. */
        get: /**
         * Whether the chip is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var coercedValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (coercedValue !== this._selected) {
                this._selected = coercedValue;
                this._dispatchSelectionChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "value", {
        /** The value of the chip. Defaults to the content inside `<mat-chip>` tags. */
        get: /**
         * The value of the chip. Defaults to the content inside `<mat-chip>` tags.
         * @return {?}
         */
        function () {
            return this._value !== undefined
                ? this._value
                : this._elementRef.nativeElement.textContent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._value = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "selectable", {
        /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         */
        get: /**
         * Whether or not the chip is selectable. When a chip is not selectable,
         * changes to its selected state are always ignored. By default a chip is
         * selectable, and it becomes non-selectable if its parent chip list is
         * not selectable.
         * @return {?}
         */
        function () { return this._selectable && this.chipListSelectable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "removable", {
        /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         */
        get: /**
         * Determines whether or not the chip displays the remove styling and emits (removed) events.
         * @return {?}
         */
        function () { return this._removable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._removable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChip.prototype, "ariaSelected", {
        /** The ARIA selected applied to the chip. */
        get: /**
         * The ARIA selected applied to the chip.
         * @return {?}
         */
        function () {
            // Remove the `aria-selected` when the chip is deselected in single-selection mode, because
            // it adds noise to NVDA users where "not selected" will be read out for each chip.
            return this.selectable && (this._chipListMultiple || this.selected) ?
                this.selected.toString() : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChip.prototype._addHostClassName = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var basicChipAttrName = 'mat-basic-chip';
        /** @type {?} */
        var element = (/** @type {?} */ (this._elementRef.nativeElement));
        if (element.hasAttribute(basicChipAttrName) ||
            element.tagName.toLowerCase() === basicChipAttrName) {
            element.classList.add(basicChipAttrName);
            return;
        }
        else {
            element.classList.add('mat-standard-chip');
        }
    };
    /**
     * @return {?}
     */
    MatChip.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed.emit({ chip: this });
        this._chipRipple._removeTriggerEvents();
    };
    /** Selects the chip. */
    /**
     * Selects the chip.
     * @return {?}
     */
    MatChip.prototype.select = /**
     * Selects the chip.
     * @return {?}
     */
    function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    };
    /** Deselects the chip. */
    /**
     * Deselects the chip.
     * @return {?}
     */
    MatChip.prototype.deselect = /**
     * Deselects the chip.
     * @return {?}
     */
    function () {
        if (this._selected) {
            this._selected = false;
            this._dispatchSelectionChange();
            this._markForCheck();
        }
    };
    /** Select this chip and emit selected event */
    /**
     * Select this chip and emit selected event
     * @return {?}
     */
    MatChip.prototype.selectViaInteraction = /**
     * Select this chip and emit selected event
     * @return {?}
     */
    function () {
        if (!this._selected) {
            this._selected = true;
            this._dispatchSelectionChange(true);
            this._markForCheck();
        }
    };
    /** Toggles the current selected state of this chip. */
    /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChip.prototype.toggleSelected = /**
     * Toggles the current selected state of this chip.
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this._selected = !this.selected;
        this._dispatchSelectionChange(isUserInput);
        this._markForCheck();
        return this.selected;
    };
    /** Allows for programmatic focusing of the chip. */
    /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    MatChip.prototype.focus = /**
     * Allows for programmatic focusing of the chip.
     * @return {?}
     */
    function () {
        if (!this._hasFocus) {
            this._elementRef.nativeElement.focus();
            this._onFocus.next({ chip: this });
        }
        this._hasFocus = true;
    };
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     */
    /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    MatChip.prototype.remove = /**
     * Allows for programmatic removal of the chip. Called by the MatChipList when the DELETE or
     * BACKSPACE keys are pressed.
     *
     * Informs any listeners of the removal request. Does not remove the chip from the DOM.
     * @return {?}
     */
    function () {
        if (this.removable) {
            this.removed.emit({ chip: this });
        }
    };
    /** Handles click events on the chip. */
    /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    MatChip.prototype._handleClick = /**
     * Handles click events on the chip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
        else {
            event.stopPropagation();
        }
    };
    /** Handle custom key presses. */
    /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    MatChip.prototype._handleKeydown = /**
     * Handle custom key presses.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DELETE"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"]:
                // If we are removable, remove the focused chip
                this.remove();
                // Always prevent so page navigation does not occur
                event.preventDefault();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["SPACE"]:
                // If we are selectable, toggle the focused chip
                if (this.selectable) {
                    this.toggleSelected(true);
                }
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
        }
    };
    /**
     * @return {?}
     */
    MatChip.prototype._blur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // When animations are enabled, Angular may end up removing the chip from the DOM a little
        // earlier than usual, causing it to be blurred and throwing off the logic in the chip list
        // that moves focus not the next item. To work around the issue, we defer marking the chip
        // as not focused until the next time the zone stabilizes.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this._ngZone.run((/**
             * @return {?}
             */
            function () {
                _this._hasFocus = false;
                _this._onBlur.next({ chip: _this });
            }));
        }));
    };
    /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChip.prototype._dispatchSelectionChange = /**
     * @private
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput,
            selected: this._selected
        });
    };
    /**
     * @private
     * @return {?}
     */
    MatChip.prototype._markForCheck = /**
     * @private
     * @return {?}
     */
    function () {
        // @breaking-change 9.0.0 Remove this method once the _changeDetectorRef is a required param.
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
    };
    MatChip.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]",
                    inputs: ['color', 'disabled', 'disableRipple'],
                    exportAs: 'matChip',
                    host: {
                        'class': 'mat-chip',
                        '[attr.tabindex]': 'disabled ? null : -1',
                        'role': 'option',
                        '[class.mat-chip-selected]': 'selected',
                        '[class.mat-chip-with-avatar]': 'avatar',
                        '[class.mat-chip-with-trailing-icon]': 'trailingIcon || removeIcon',
                        '[class.mat-chip-disabled]': 'disabled',
                        '[class._mat-animation-noopable]': '_animationsDisabled',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-selected]': 'ariaSelected',
                        '(click)': '_handleClick($event)',
                        '(keydown)': '_handleKeydown($event)',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                    },
                },] },
    ];
    /** @nocollapse */
    MatChip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MAT_RIPPLE_GLOBAL_OPTIONS"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    MatChip.propDecorators = {
        avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatChipAvatar, { static: false },] }],
        trailingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatChipTrailingIcon, { static: false },] }],
        removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])((/**
                     * @return {?}
                     */
                    function () { return MatChipRemove; })), { static: false },] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return MatChip;
}(_MatChipMixinBase));
/**
 * Applies proper (click) support and adds styling for use with the Material Design "cancel" icon
 * available at https://material.io/icons/#ic_cancel.
 *
 * Example:
 *
 *     `<mat-chip>
 *       <mat-icon matChipRemove>cancel</mat-icon>
 *     </mat-chip>`
 *
 * You *may* use a custom icon, but you may need to override the `mat-chip-remove` positioning
 * styles to properly center the icon within the chip.
 */
var MatChipRemove = /** @class */ (function () {
    function MatChipRemove(_parentChip) {
        this._parentChip = _parentChip;
    }
    /** Calls the parent chip's public `remove()` method if applicable. */
    /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    MatChipRemove.prototype._handleClick = /**
     * Calls the parent chip's public `remove()` method if applicable.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var parentChip = this._parentChip;
        if (parentChip.removable && !parentChip.disabled) {
            parentChip.remove();
        }
        // We need to stop event propagation because otherwise the event will bubble up to the
        // form field and cause the `onContainerClick` method to be invoked. This method would then
        // reset the focused chip that has been focused after chip removal. Usually the parent
        // the parent click listener of the `MatChip` would prevent propagation, but it can happen
        // that the chip is being removed before the event bubbles up.
        event.stopPropagation();
    };
    MatChipRemove.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[matChipRemove]',
                    host: {
                        'class': 'mat-chip-remove mat-chip-trailing-icon',
                        '(click)': '_handleClick($event)',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipRemove.ctorParameters = function () { return [
        { type: MatChip }
    ]; };
    return MatChipRemove;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token to be used to override the default options for the chips module.
 * @type {?}
 */
var MAT_CHIPS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-chips-default-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatChipList.
/**
 * \@docs-private
 */
MatChipListBase = /** @class */ (function () {
    function MatChipListBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatChipListBase;
}());
/** @type {?} */
var _MatChipListMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatChipListBase);
// Increasing integer for generating unique ids for chip-list components.
/** @type {?} */
var nextUniqueId = 0;
/**
 * Change event object that is emitted when the chip list value has changed.
 */
var  /**
 * Change event object that is emitted when the chip list value has changed.
 */
MatChipListChange = /** @class */ (function () {
    function MatChipListChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatChipListChange;
}());
/**
 * A material design chips component (named ChipList for its similarity to the List component).
 */
var MatChipList = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatChipList, _super);
    function MatChipList(_elementRef, _changeDetectorRef, _dir, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, ngControl) {
        var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._elementRef = _elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._dir = _dir;
        _this.ngControl = ngControl;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.controlType = 'mat-chip-list';
        /**
         * When a chip is destroyed, we store the index of the destroyed chip until the chips
         * query list notifies about the update. This is necessary because we cannot determine an
         * appropriate chip that should receive focus until the array of chips updated completely.
         */
        _this._lastDestroyedChipIndex = null;
        /**
         * Subject that emits when the component has been destroyed.
         */
        _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Uid of the chip list
         */
        _this._uid = "mat-chip-list-" + nextUniqueId++;
        /**
         * Tab index for the chip list.
         */
        _this._tabIndex = 0;
        /**
         * User defined tab index.
         * When it is not null, use user defined tab index. Otherwise use _tabIndex
         */
        _this._userTabIndex = null;
        /**
         * Function when touched
         */
        _this._onTouched = (/**
         * @return {?}
         */
        function () { });
        /**
         * Function when changed
         */
        _this._onChange = (/**
         * @return {?}
         */
        function () { });
        _this._multiple = false;
        _this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        function (o1, o2) { return o1 === o2; });
        _this._required = false;
        _this._disabled = false;
        /**
         * Orientation of the chip list.
         */
        _this.ariaOrientation = 'horizontal';
        _this._selectable = true;
        /**
         * Event emitted when the selected chip list value has been changed by the user.
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the chip-list changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (_this.ngControl) {
            _this.ngControl.valueAccessor = _this;
        }
        return _this;
    }
    Object.defineProperty(MatChipList.prototype, "selected", {
        /** The array of selected chips inside chip list. */
        get: /**
         * The array of selected chips inside chip list.
         * @return {?}
         */
        function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "role", {
        /** The ARIA role applied to the chip list. */
        get: /**
         * The ARIA role applied to the chip list.
         * @return {?}
         */
        function () { return this.empty ? null : 'listbox'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple chips. */
        get: /**
         * Whether the user should be allowed to select multiple chips.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "compareWith", {
        /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         */
        get: /**
         * A function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.writeValue(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._chipInput ? this._chipInput.id : this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "placeholder", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._chipInput ? this._chipInput.placeholder : this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "focused", {
        /** Whether any chips or the matChipInput inside of this chip-list has focus. */
        get: /**
         * Whether any chips or the matChipInput inside of this chip-list has focus.
         * @return {?}
         */
        function () {
            return (this._chipInput && this._chipInput.focused) || this._hasFocusedChip();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return (!this._chipInput || this._chipInput.empty) && this.chips.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return !this.empty || this.focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this.ngControl ? !!this.ngControl.disabled : this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._syncChipsState();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "selectable", {
        /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         */
        get: /**
         * Whether or not this chip list is selectable. When a chip list is not selectable,
         * the selected states for all the chips inside the chip list are always ignored.
         * @return {?}
         */
        function () { return this._selectable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._selectable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (this.chips) {
                this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                function (chip) { return chip.chipListSelectable = _this._selectable; }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "tabIndex", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._userTabIndex = value;
            this._tabIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipSelectionChanges", {
        /** Combined stream of all of the child chips' selection change events. */
        get: /**
         * Combined stream of all of the child chips' selection change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.selectionChange; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipFocusChanges", {
        /** Combined stream of all of the child chips' focus change events. */
        get: /**
         * Combined stream of all of the child chips' focus change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onFocus; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipBlurChanges", {
        /** Combined stream of all of the child chips' blur change events. */
        get: /**
         * Combined stream of all of the child chips' blur change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip._onBlur; })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipList.prototype, "chipRemoveChanges", {
        /** Combined stream of all of the child chips' remove change events. */
        get: /**
         * Combined stream of all of the child chips' remove change events.
         * @return {?}
         */
        function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"].apply(void 0, this.chips.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.destroyed; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusKeyManager"](this.chips)
            .withWrap()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._dir ? this._dir.value : 'ltr');
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe((/**
             * @param {?} dir
             * @return {?}
             */
            function (dir) { return _this._keyManager.withHorizontalOrientation(dir); }));
        }
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._allowFocusEscape();
        }));
        // When the list changes, re-subscribe
        this.chips.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe((/**
         * @return {?}
         */
        function () {
            if (_this.disabled) {
                // Since this happens after the content has been
                // checked, we need to defer it to the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this._syncChipsState();
                }));
            }
            _this._resetChips();
            // Reset chips selected/deselected status
            _this._initializeSelection();
            // Check to see if we need to update our tab index
            _this._updateTabIndex();
            // Check to see if we have a destroyed chip and need to refocus
            _this._updateFocusForDestroyedChips();
            _this.stateChanges.next();
        }));
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__["SelectionModel"](this.multiple, undefined, false);
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    };
    /**
     * @return {?}
     */
    MatChipList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this.stateChanges.complete();
        this._dropSubscriptions();
    };
    /** Associates an HTML input element with this chip list. */
    /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    MatChipList.prototype.registerInput = /**
     * Associates an HTML input element with this chip list.
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        this._chipInput = inputElement;
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatChipList.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) { this._ariaDescribedby = ids.join(' '); };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatChipList.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.chips) {
            this._setSelectionByValue(value, false);
        }
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatChipList.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatChipList.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatChipList.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this.stateChanges.next();
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._originatesFromChip(event)) {
            this.focus();
        }
    };
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @param {?=} options
     * @return {?}
     */
    MatChipList.prototype.focus = /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (this.disabled) {
            return;
        }
        // TODO: ARIA says this should focus the first `selected` chip if any are selected.
        // Focus on first element if there's no chipInput inside chip-list
        if (this._chipInput && this._chipInput.focused) {
            // do nothing
        }
        else if (this.chips.length > 0) {
            this._keyManager.setFirstItemActive();
            this.stateChanges.next();
        }
        else {
            this._focusInput(options);
            this.stateChanges.next();
        }
    };
    /** Attempt to focus an input if we have one. */
    /**
     * Attempt to focus an input if we have one.
     * @param {?=} options
     * @return {?}
     */
    MatChipList.prototype._focusInput = /**
     * Attempt to focus an input if we have one.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (this._chipInput) {
            this._chipInput.focus(options);
        }
    };
    /**
     * Pass events to the keyboard manager. Available here for tests.
     */
    /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype._keydown = /**
     * Pass events to the keyboard manager. Available here for tests.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = (/** @type {?} */ (event.target));
        // If they are on an empty input and hit backspace, focus the last chip
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["BACKSPACE"] && this._isInputEmpty(target)) {
            this._keyManager.setLastItemActive();
            event.preventDefault();
        }
        else if (target && target.classList.contains('mat-chip')) {
            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["HOME"]) {
                this._keyManager.setFirstItemActive();
                event.preventDefault();
            }
            else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["END"]) {
                this._keyManager.setLastItemActive();
                event.preventDefault();
            }
            else {
                this._keyManager.onKeydown(event);
            }
            this.stateChanges.next();
        }
    };
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     */
    /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    MatChipList.prototype._updateTabIndex = /**
     * Check the tab index as you should not be allowed to focus an empty list.
     * @protected
     * @return {?}
     */
    function () {
        // If we have 0 chips, we should not allow keyboard focus
        this._tabIndex = this._userTabIndex || (this.chips.length === 0 ? -1 : 0);
    };
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     */
    /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    MatChipList.prototype._updateFocusForDestroyedChips = /**
     * If the amount of chips changed, we need to update the
     * key manager state and focus the next closest chip.
     * @protected
     * @return {?}
     */
    function () {
        // Move focus to the closest chip. If no other chips remain, focus the chip-list itself.
        if (this._lastDestroyedChipIndex != null) {
            if (this.chips.length) {
                /** @type {?} */
                var newChipIndex = Math.min(this._lastDestroyedChipIndex, this.chips.length - 1);
                this._keyManager.setActiveItem(newChipIndex);
            }
            else {
                this.focus();
            }
        }
        this._lastDestroyedChipIndex = null;
    };
    /**
     * Utility to ensure all indexes are valid.
     *
     * @param index The index to be checked.
     * @returns True if the index is valid for our list of chips.
     */
    /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    MatChipList.prototype._isValidIndex = /**
     * Utility to ensure all indexes are valid.
     *
     * @private
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of chips.
     */
    function (index) {
        return index >= 0 && index < this.chips.length;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    MatChipList.prototype._isInputEmpty = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element && element.nodeName.toLowerCase() === 'input') {
            /** @type {?} */
            var input = (/** @type {?} */ (element));
            return !input.value;
        }
        return false;
    };
    /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    MatChipList.prototype._setSelectionByValue = /**
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?}
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        this._clearSelection();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip.deselect(); }));
        if (Array.isArray(value)) {
            value.forEach((/**
             * @param {?} currentValue
             * @return {?}
             */
            function (currentValue) { return _this._selectValue(currentValue, isUserInput); }));
            this._sortValues();
        }
        else {
            /** @type {?} */
            var correspondingChip = this._selectValue(value, isUserInput);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what chip the user interacted with last.
            if (correspondingChip) {
                if (isUserInput) {
                    this._keyManager.setActiveItem(correspondingChip);
                }
            }
        }
    };
    /**
     * Finds and selects the chip based on its value.
     * @returns Chip that has the corresponding value.
     */
    /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    MatChipList.prototype._selectValue = /**
     * Finds and selects the chip based on its value.
     * @private
     * @param {?} value
     * @param {?=} isUserInput
     * @return {?} Chip that has the corresponding value.
     */
    function (value, isUserInput) {
        var _this = this;
        if (isUserInput === void 0) { isUserInput = true; }
        /** @type {?} */
        var correspondingChip = this.chips.find((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            return chip.value != null && _this._compareWith(chip.value, value);
        }));
        if (correspondingChip) {
            isUserInput ? correspondingChip.selectViaInteraction() : correspondingChip.select();
            this._selectionModel.select(correspondingChip);
        }
        return correspondingChip;
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._initializeSelection = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            if (_this.ngControl || _this._value) {
                _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value, false);
                _this.stateChanges.next();
            }
        }));
    };
    /**
     * Deselects every chip in the list.
     * @param skip Chip that should not be deselected.
     */
    /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    MatChipList.prototype._clearSelection = /**
     * Deselects every chip in the list.
     * @private
     * @param {?=} skip Chip that should not be deselected.
     * @return {?}
     */
    function (skip) {
        this._selectionModel.clear();
        this.chips.forEach((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) {
            if (chip !== skip) {
                chip.deselect();
            }
        }));
        this.stateChanges.next();
    };
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     */
    /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    MatChipList.prototype._sortValues = /**
     * Sorts the model values, ensuring that they keep the same
     * order that they have in the panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._multiple) {
            this._selectionModel.clear();
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                if (chip.selected) {
                    _this._selectionModel.select(chip);
                }
            }));
            this.stateChanges.next();
        }
    };
    /** Emits change event to set the model value. */
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatChipList.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = null;
        if (Array.isArray(this.selected)) {
            valueToEmit = this.selected.map((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) { return chip.value; }));
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.change.emit(new MatChipListChange(this, valueToEmit));
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this._changeDetectorRef.markForCheck();
    };
    /** When blurred, mark the field as touched when focus moved outside the chip list. */
    /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    MatChipList.prototype._blur = /**
     * When blurred, mark the field as touched when focus moved outside the chip list.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._hasFocusedChip()) {
            this._keyManager.setActiveItem(-1);
        }
        if (!this.disabled) {
            if (this._chipInput) {
                // If there's a chip input, we should check whether the focus moved to chip input.
                // If the focus is not moved to chip input, mark the field as touched. If the focus moved
                // to chip input, do nothing.
                // Timeout is needed to wait for the focus() event trigger on chip input.
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.focused) {
                        _this._markAsTouched();
                    }
                }));
            }
            else {
                // If there's no chip input, then mark the field as touched.
                this._markAsTouched();
            }
        }
    };
    /** Mark the field as touched */
    /**
     * Mark the field as touched
     * @return {?}
     */
    MatChipList.prototype._markAsTouched = /**
     * Mark the field as touched
     * @return {?}
     */
    function () {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     */
    /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    MatChipList.prototype._allowFocusEscape = /**
     * Removes the `tabindex` from the chip list and resets it back afterwards, allowing the
     * user to tab out of it. This prevents the list from capturing focus and redirecting
     * it back to the first chip, creating a focus trap, if it user tries to tab away.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._tabIndex !== -1) {
            this._tabIndex = -1;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._tabIndex = _this._userTabIndex || 0;
                _this._changeDetectorRef.markForCheck();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._resetChips = /**
     * @private
     * @return {?}
     */
    function () {
        this._dropSubscriptions();
        this._listenToChipsFocus();
        this._listenToChipsSelection();
        this._listenToChipsRemoved();
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._dropSubscriptions = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._chipFocusSubscription) {
            this._chipFocusSubscription.unsubscribe();
            this._chipFocusSubscription = null;
        }
        if (this._chipBlurSubscription) {
            this._chipBlurSubscription.unsubscribe();
            this._chipBlurSubscription = null;
        }
        if (this._chipSelectionSubscription) {
            this._chipSelectionSubscription.unsubscribe();
            this._chipSelectionSubscription = null;
        }
        if (this._chipRemoveSubscription) {
            this._chipRemoveSubscription.unsubscribe();
            this._chipRemoveSubscription = null;
        }
    };
    /** Listens to user-generated selection events on each chip. */
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsSelection = /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipSelectionSubscription = this.chipSelectionChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.source.selected
                ? _this._selectionModel.select(event.source)
                : _this._selectionModel.deselect(event.source);
            // For single selection chip list, make sure the deselected value is unselected.
            if (!_this.multiple) {
                _this.chips.forEach((/**
                 * @param {?} chip
                 * @return {?}
                 */
                function (chip) {
                    if (!_this._selectionModel.isSelected(chip) && chip.selected) {
                        chip.deselect();
                    }
                }));
            }
            if (event.isUserInput) {
                _this._propagateChanges();
            }
        }));
    };
    /** Listens to user-generated selection events on each chip. */
    /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsFocus = /**
     * Listens to user-generated selection events on each chip.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipFocusSubscription = this.chipFocusChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chipIndex = _this.chips.toArray().indexOf(event.chip);
            if (_this._isValidIndex(chipIndex)) {
                _this._keyManager.updateActiveItemIndex(chipIndex);
            }
            _this.stateChanges.next();
        }));
        this._chipBlurSubscription = this.chipBlurChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this._blur();
            _this.stateChanges.next();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MatChipList.prototype._listenToChipsRemoved = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._chipRemoveSubscription = this.chipRemoveChanges.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var chip = event.chip;
            /** @type {?} */
            var chipIndex = _this.chips.toArray().indexOf(event.chip);
            // In case the chip that will be removed is currently focused, we temporarily store
            // the index in order to be able to determine an appropriate sibling chip that will
            // receive focus.
            if (_this._isValidIndex(chipIndex) && chip._hasFocus) {
                _this._lastDestroyedChipIndex = chipIndex;
            }
        }));
    };
    /** Checks whether an event comes from inside a chip element. */
    /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatChipList.prototype._originatesFromChip = /**
     * Checks whether an event comes from inside a chip element.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var currentElement = (/** @type {?} */ (event.target));
        while (currentElement && currentElement !== this._elementRef.nativeElement) {
            if (currentElement.classList.contains('mat-chip')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    };
    /** Checks whether any of the chips is focused. */
    /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    MatChipList.prototype._hasFocusedChip = /**
     * Checks whether any of the chips is focused.
     * @private
     * @return {?}
     */
    function () {
        return this.chips.some((/**
         * @param {?} chip
         * @return {?}
         */
        function (chip) { return chip._hasFocus; }));
    };
    /** Syncs the list's state with the individual chips. */
    /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    MatChipList.prototype._syncChipsState = /**
     * Syncs the list's state with the individual chips.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chips) {
            this.chips.forEach((/**
             * @param {?} chip
             * @return {?}
             */
            function (chip) {
                chip.disabled = _this._disabled;
                chip._chipListMultiple = _this.multiple;
            }));
        }
    };
    MatChipList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-chip-list',
                    template: "<div class=\"mat-chip-list-wrapper\"><ng-content></ng-content></div>",
                    exportAs: 'matChipList',
                    host: {
                        '[attr.tabindex]': 'disabled ? null : _tabIndex',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.role]': 'role',
                        '[class.mat-chip-list-disabled]': 'disabled',
                        '[class.mat-chip-list-invalid]': 'errorState',
                        '[class.mat-chip-list-required]': 'required',
                        '[attr.aria-orientation]': 'ariaOrientation',
                        'class': 'mat-chip-list',
                        '(focus)': 'focus()',
                        '(blur)': '_blur()',
                        '(keydown)': '_keydown($event)',
                        '[id]': '_uid',
                    },
                    providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldControl"], useExisting: MatChipList }],
                    styles: [".mat-chip{position:relative;overflow:hidden;box-sizing:border-box;-webkit-tap-highlight-color:transparent;transform:translateZ(0)}.mat-standard-chip{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:inline-flex;padding:7px 12px;border-radius:16px;align-items:center;cursor:default;min-height:32px;height:1px}._mat-animation-noopable.mat-standard-chip{transition:none;animation:none}.mat-standard-chip .mat-chip-remove.mat-icon{width:18px;height:18px}.mat-standard-chip::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;opacity:0;content:'';pointer-events:none;transition:opacity .2s cubic-bezier(.35,0,.25,1)}.mat-standard-chip:hover::after{opacity:.12}.mat-standard-chip:focus{outline:0}.mat-standard-chip:focus::after{opacity:.16}@media (-ms-high-contrast:active){.mat-standard-chip{outline:solid 1px}.mat-standard-chip:focus{outline:dotted 2px}}.mat-standard-chip.mat-chip-disabled::after{opacity:0}.mat-standard-chip.mat-chip-disabled .mat-chip-remove,.mat-standard-chip.mat-chip-disabled .mat-chip-trailing-icon{cursor:default}.mat-standard-chip.mat-chip-with-avatar,.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-top:0;padding-bottom:0}.mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-right:8px;padding-left:0}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon.mat-chip-with-avatar{padding-left:8px;padding-right:0}.mat-standard-chip.mat-chip-with-trailing-icon{padding-top:7px;padding-bottom:7px;padding-right:8px;padding-left:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-trailing-icon{padding-left:8px;padding-right:12px}.mat-standard-chip.mat-chip-with-avatar{padding-left:0;padding-right:12px}[dir=rtl] .mat-standard-chip.mat-chip-with-avatar{padding-right:0;padding-left:12px}.mat-standard-chip .mat-chip-avatar{width:24px;height:24px;margin-right:8px;margin-left:4px}[dir=rtl] .mat-standard-chip .mat-chip-avatar{margin-left:8px;margin-right:4px}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{width:18px;height:18px;cursor:pointer}.mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-standard-chip .mat-chip-remove,[dir=rtl] .mat-standard-chip .mat-chip-trailing-icon{margin-right:8px;margin-left:0}.mat-chip-list-wrapper{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;margin:-4px}.mat-chip-list-wrapper .mat-standard-chip,.mat-chip-list-wrapper input.mat-input-element{margin:4px}.mat-chip-list-stacked .mat-chip-list-wrapper{flex-direction:column;align-items:flex-start}.mat-chip-list-stacked .mat-chip-list-wrapper .mat-standard-chip{width:100%}.mat-chip-avatar{border-radius:50%;justify-content:center;align-items:center;display:flex;overflow:hidden;object-fit:cover}input.mat-chip-input{width:150px;margin:4px;flex:1 0 150px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatChipList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"] }] }
    ]; };
    MatChipList.propDecorators = {
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-orientation',] }],
        selectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        chips: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [MatChip, {
                        // We need to use `descendants: true`, because Ivy will no longer match
                        // indirect descendants if it's left as false.
                        descendants: true
                    },] }]
    };
    return MatChipList;
}(_MatChipListMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Increasing integer for generating unique ids.
/** @type {?} */
var nextUniqueId$1 = 0;
/**
 * Directive that adds chip-specific behaviors to an input element inside `<mat-form-field>`.
 * May be placed inside or outside of an `<mat-chip-list>`.
 */
var MatChipInput = /** @class */ (function () {
    function MatChipInput(_elementRef, _defaultOptions) {
        this._elementRef = _elementRef;
        this._defaultOptions = _defaultOptions;
        /**
         * Whether the control is focused.
         */
        this.focused = false;
        this._addOnBlur = false;
        /**
         * The list of key codes that will trigger a chipEnd event.
         *
         * Defaults to `[ENTER]`.
         */
        this.separatorKeyCodes = this._defaultOptions.separatorKeyCodes;
        /**
         * Emitted when a chip is to be added.
         */
        this.chipEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * The input's placeholder text.
         */
        this.placeholder = '';
        /**
         * Unique id for the input.
         */
        this.id = "mat-chip-list-input-" + nextUniqueId$1++;
        this._disabled = false;
        this._inputElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    Object.defineProperty(MatChipInput.prototype, "chipList", {
        /** Register input for chip list */
        set: /**
         * Register input for chip list
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._chipList = value;
                this._chipList.registerInput(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "addOnBlur", {
        /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         */
        get: /**
         * Whether or not the chipEnd event will be emitted when the input is blurred.
         * @return {?}
         */
        function () { return this._addOnBlur; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._addOnBlur = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "disabled", {
        /** Whether the input is disabled. */
        get: /**
         * Whether the input is disabled.
         * @return {?}
         */
        function () { return this._disabled || (this._chipList && this._chipList.disabled); },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatChipInput.prototype, "empty", {
        /** Whether the input is empty. */
        get: /**
         * Whether the input is empty.
         * @return {?}
         */
        function () { return !this._inputElement.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatChipInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._chipList.stateChanges.next();
    };
    /** Utility method to make host definition/tests more clear. */
    /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._keydown = /**
     * Utility method to make host definition/tests more clear.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        // Allow the user's focus to escape when they're tabbing forward. Note that we don't
        // want to do this when going backwards, because focus should go back to the first chip.
        if (event && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["TAB"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event, 'shiftKey')) {
            this._chipList._allowFocusEscape();
        }
        this._emitChipEnd(event);
    };
    /** Checks to see if the blur should emit the (chipEnd) event. */
    /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    MatChipInput.prototype._blur = /**
     * Checks to see if the blur should emit the (chipEnd) event.
     * @return {?}
     */
    function () {
        if (this.addOnBlur) {
            this._emitChipEnd();
        }
        this.focused = false;
        // Blur the chip list if it is not focused
        if (!this._chipList.focused) {
            this._chipList._blur();
        }
        this._chipList.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._focus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
        this._chipList.stateChanges.next();
    };
    /** Checks to see if the (chipEnd) event needs to be emitted. */
    /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    MatChipInput.prototype._emitChipEnd = /**
     * Checks to see if the (chipEnd) event needs to be emitted.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this._inputElement.value && !!event) {
            this._chipList._keydown(event);
        }
        if (!event || this._isSeparatorKey(event)) {
            this.chipEnd.emit({ input: this._inputElement, value: this._inputElement.value });
            if (event) {
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    MatChipInput.prototype._onInput = /**
     * @return {?}
     */
    function () {
        // Let chip list know whenever the value changes.
        this._chipList.stateChanges.next();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    MatChipInput.prototype.focus = /**
     * Focuses the input.
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this._inputElement.focus(options);
    };
    /** Checks whether a keycode is one of the configured separators. */
    /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatChipInput.prototype._isSeparatorKey = /**
     * Checks whether a keycode is one of the configured separators.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
            return false;
        }
        /** @type {?} */
        var separators = this.separatorKeyCodes;
        /** @type {?} */
        var keyCode = event.keyCode;
        return Array.isArray(separators) ? separators.indexOf(keyCode) > -1 : separators.has(keyCode);
    };
    MatChipInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'input[matChipInputFor]',
                    exportAs: 'matChipInput, matChipInputFor',
                    host: {
                        'class': 'mat-chip-input mat-input-element',
                        '(keydown)': '_keydown($event)',
                        '(blur)': '_blur()',
                        '(focus)': '_focus()',
                        '(input)': '_onInput()',
                        '[id]': 'id',
                        '[attr.disabled]': 'disabled || null',
                        '[attr.placeholder]': 'placeholder || null',
                        '[attr.aria-invalid]': '_chipList && _chipList.ngControl ? _chipList.ngControl.invalid : null',
                    }
                },] },
    ];
    /** @nocollapse */
    MatChipInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_CHIPS_DEFAULT_OPTIONS,] }] }
    ]; };
    MatChipInput.propDecorators = {
        chipList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputFor',] }],
        addOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputAddOnBlur',] }],
        separatorKeyCodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matChipInputSeparatorKeyCodes',] }],
        chipEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['matChipInputTokenEnd',] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return MatChipInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CHIP_DECLARATIONS = [
    MatChipList,
    MatChip,
    MatChipInput,
    MatChipRemove,
    MatChipAvatar,
    MatChipTrailingIcon,
];
var ɵ0 = ({
    separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"]]
});
var MatChipsModule = /** @class */ (function () {
    function MatChipsModule() {
    }
    MatChipsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    exports: CHIP_DECLARATIONS,
                    declarations: CHIP_DECLARATIONS,
                    providers: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"],
                        {
                            provide: MAT_CHIPS_DEFAULT_OPTIONS,
                            useValue: (/** @type {?} */ (ɵ0))
                        }
                    ]
                },] },
    ];
    return MatChipsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=chips.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/datepicker.es5.js":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/datepicker.es5.js ***!
  \***************************************************************/
/*! exports provided: MatMultiYearView, yearsPerPage, yearsPerRow, MatDatepickerModule, MatCalendarHeader, MatCalendar, MatCalendarCell, MatCalendarBody, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MatDatepickerContent, MatDatepicker, matDatepickerAnimations, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerIntl, MatDatepickerToggleIcon, MatDatepickerToggle, MatMonthView, MatYearView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function() { return MatMultiYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return yearsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return yearsPerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return MatDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return MatCalendarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return MatCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return MatCalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return MatCalendarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return MatDatepickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return MatDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return matDatepickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return MAT_DATEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return MAT_DATEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return MatDatepickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return MatDatepickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return MatDatepickerIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return MatDatepickerToggleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return MatDatepickerToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return MatMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return MatYearView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error("MatDatepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " +
        "custom implementation.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Datepicker data that requires internationalization.
 */
var MatDatepickerIntl = /** @class */ (function () {
    function MatDatepickerIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * A label for the calendar popup (used by screen readers).
         */
        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */
        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */
        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */
        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /** Formats a range of years. */
    /**
     * Formats a range of years.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    MatDatepickerIntl.prototype.formatYearRange = /**
     * Formats a range of years.
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        return start + " \u2013 " + end;
    };
    MatDatepickerIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatDatepickerIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
    return MatDatepickerIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
var  /**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
MatCalendarCell = /** @class */ (function () {
    function MatCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
    }
    return MatCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
var MatCalendarBody = /** @class */ (function () {
    function MatCalendarBody(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    MatCalendarBody.prototype._cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatCalendarBody.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var columnChanges = changes['numCols'];
        var _a = this, rows = _a.rows, numCols = _a.numCols;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = 50 * this.cellAspectRatio / numCols + "%";
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = 100 / numCols + "%";
        }
    };
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    MatCalendarBody.prototype._isActiveCell = /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        /** @type {?} */
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatCalendarBody.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var activeCell = _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    activeCell.focus();
                }
            }));
        }));
    };
    MatCalendarBody.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: '[mat-calendar-body]',
                    template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop]=\"_cellPadding\" [style.paddingBottom]=\"_cellPadding\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop]=\"_cellPadding\" [style.paddingBottom]=\"_cellPadding\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [ngClass]=\"item.cssClasses\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" [attr.aria-selected]=\"selectedValue === item.value\" (click)=\"_cellClicked(item)\" [style.width]=\"_cellWidth\" [style.paddingTop]=\"_cellPadding\" role=\"button\" [style.paddingBottom]=\"_cellPadding\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                    styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}@media (-ms-high-contrast:active){.mat-calendar-body-cell-content{border:none}}@media (-ms-high-contrast:active){.mat-calendar-body-selected,.mat-datepicker-popup:not(:empty){outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                    host: {
                        'class': 'mat-calendar-body',
                        'role': 'grid',
                        'aria-readonly': 'true'
                    },
                    exportAs: 'matCalendarBody',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendarBody.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    MatCalendarBody.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatCalendarBody;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 * @template D
 */
var MatMonthView = /** @class */ (function () {
    function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMonthView.prototype, "activeDate", {
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */
        get: /**
         * The date to display in this month view (everything other than the month and year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedDate = this._getDateInCurrentMonth(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMonthView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._dateSelected = /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this._selectedDate != date) {
            /** @type {?} */
            var selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */
            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */
            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit();
    };
    /** Handles keydown events on the calendar body when calendar is in month view. */
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MatMonthView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        /** @type {?} */
        var oldActiveDate = this._activeDate;
        /** @type {?} */
        var isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected(this._dateAdapter.getDate(this._activeDate));
                    this._userSelection.emit();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Initializes this month view. */
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatMonthView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        /** @type {?} */
        var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatMonthView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /** Initializes the weekdays. */
    /**
     * Initializes the weekdays.
     * @private
     * @return {?}
     */
    MatMonthView.prototype._initWeekdays = /**
     * Initializes the weekdays.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        /** @type {?} */
        var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        /** @type {?} */
        var longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        /** @type {?} */
        var weekdays = longWeekdays.map((/**
         * @param {?} long
         * @param {?} i
         * @return {?}
         */
        function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        }));
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    };
    /** Creates MatCalendarCells for the dates in this month. */
    /**
     * Creates MatCalendarCells for the dates in this month.
     * @private
     * @return {?}
     */
    MatMonthView.prototype._createWeekCells = /**
     * Creates MatCalendarCells for the dates in this month.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        /** @type {?} */
        var dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            /** @type {?} */
            var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */
            var enabled = this._shouldEnableDate(date);
            /** @type {?} */
            var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            /** @type {?} */
            var cellClasses = this.dateClass ? this.dateClass(date) : undefined;
            this._weeks[this._weeks.length - 1]
                .push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
        }
    };
    /** Date filter for the month */
    /**
     * Date filter for the month
     * @private
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._shouldEnableDate = /**
     * Date filter for the month
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @private
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._getDateInCurrentMonth = /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    };
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @private
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    MatMonthView.prototype._hasSameMonthAndYear = /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @private
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    function (d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMonthView.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Determines whether the user has the RTL layout direction. */
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    MatMonthView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatMonthView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-month-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matMonthView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatMonthView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatMonthView.propDecorators = {
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
    };
    return MatMonthView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var yearsPerPage = 24;
/** @type {?} */
var yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * \@docs-private
 * @template D
 */
var MatMultiYearView = /** @class */ (function () {
    function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new year is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMultiYearView.prototype, "activeDate", {
        /** The date to display in this multi-year view (everything other than the year is ignored). */
        get: /**
         * The date to display in this multi-year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMultiYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Initializes this multi-year view. */
    /**
     * Initializes this multi-year view.
     * @return {?}
     */
    MatMultiYearView.prototype._init = /**
     * Initializes this multi-year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        /** @type {?} */
        var activeYear = this._dateAdapter.getYear(this._activeDate);
        /** @type {?} */
        var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (var i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map((/**
                 * @param {?} year
                 * @return {?}
                 */
                function (year) { return _this._createCellForYear(year); })));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /** Handles when a new year is selected. */
    /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._yearSelected = /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        /** @type {?} */
        var month = this._dateAdapter.getMonth(this.activeDate);
        /** @type {?} */
        var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    MatMultiYearView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var oldActiveDate = this._activeDate;
        /** @type {?} */
        var isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                this._yearSelected(this._dateAdapter.getYear(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    MatMultiYearView.prototype._getActiveCell = /**
     * @return {?}
     */
    function () {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatMultiYearView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /** Creates an MatCalendarCell for the given year. */
    /**
     * Creates an MatCalendarCell for the given year.
     * @private
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._createCellForYear = /**
     * Creates an MatCalendarCell for the given year.
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
    };
    /** Whether the given year is enabled. */
    /**
     * Whether the given year is enabled.
     * @private
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._shouldEnableYear = /**
     * Whether the given year is enabled.
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        var firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMultiYearView.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Determines whether the user has the RTL layout direction. */
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    MatMultiYearView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatMultiYearView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-multi-year-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body [rows]=\"_years\" [todayValue]=\"_todayYear\" [selectedValue]=\"_selectedYear\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_getActiveCell()\" (selectedValueChange)=\"_yearSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matMultiYearView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatMultiYearView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatMultiYearView.propDecorators = {
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
    };
    return MatMultiYearView;
}());
/**
 * @template D
 * @param {?} dateAdapter
 * @param {?} date1
 * @param {?} date2
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
    /** @type {?} */
    var year1 = dateAdapter.getYear(date1);
    /** @type {?} */
    var year2 = dateAdapter.getYear(date2);
    /** @type {?} */
    var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 * @template D
 * @param {?} dateAdapter
 * @param {?} activeDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
    /** @type {?} */
    var activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 * @template D
 * @param {?} dateAdapter
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
    /** @type {?} */
    var startingYear = 0;
    if (maxDate) {
        /** @type {?} */
        var maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    }
    else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
}
/**
 * Gets remainder that is non-negative, even if first number is negative
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function euclideanModulo(a, b) {
    return (a % b + b) % b;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An internal component used to display a single year in the datepicker.
 * \@docs-private
 * @template D
 */
var MatYearView = /** @class */ (function () {
    function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatYearView.prototype, "activeDate", {
        /** The date to display in this year view (everything other than the year is ignored). */
        get: /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            /** @type {?} */
            var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
            if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._monthSelected = /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        /** @type {?} */
        var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Handles keydown events on the calendar body when calendar is in year view. */
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    MatYearView.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        /** @type {?} */
        var oldActiveDate = this._activeDate;
        /** @type {?} */
        var isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["SPACE"]:
                this._monthSelected(this._dateAdapter.getMonth(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /** Initializes this year view. */
    /**
     * Initializes this year view.
     * @return {?}
     */
    MatYearView.prototype._init = /**
     * Initializes this year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        /** @type {?} */
        var monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map((/**
         * @param {?} row
         * @return {?}
         */
        function (row) { return row.map((/**
         * @param {?} month
         * @return {?}
         */
        function (month) { return _this._createCellForMonth(month, monthNames[month]); })); }));
        this._changeDetectorRef.markForCheck();
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatYearView.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        this._matCalendarBody._focusActiveCell();
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @private
     * @param {?} date
     * @return {?}
     */
    MatYearView.prototype._getMonthInCurrentYear = /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    };
    /** Creates an MatCalendarCell for the given month. */
    /**
     * Creates an MatCalendarCell for the given month.
     * @private
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MatYearView.prototype._createCellForMonth = /**
     * Creates an MatCalendarCell for the given month.
     * @private
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    function (month, monthName) {
        /** @type {?} */
        var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
    };
    /** Whether the given month is enabled. */
    /**
     * Whether the given month is enabled.
     * @private
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._shouldEnableMonth = /**
     * Whether the given month is enabled.
     * @private
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthAfterMaxDate = /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.maxDate) {
            /** @type {?} */
            var maxYear = this._dateAdapter.getYear(this.maxDate);
            /** @type {?} */
            var maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthBeforeMinDate = /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @private
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.minDate) {
            /** @type {?} */
            var minYear = this._dateAdapter.getYear(this.minDate);
            /** @type {?} */
            var minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatYearView.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Determines whether the user has the RTL layout direction. */
    /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    MatYearView.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatYearView.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-year-view',
                    template: "<table class=\"mat-calendar-table\" role=\"presentation\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\" (keydown)=\"_handleCalendarBodyKeydown($event)\"></tbody></table>",
                    exportAs: 'matYearView',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatYearView.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatYearView.propDecorators = {
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendarBody, { static: false },] }]
    };
    return MatYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default header for MatCalendar
 * @template D
 */
var MatCalendarHeader = /** @class */ (function () {
    function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe((/**
         * @return {?}
         */
        function () { return changeDetectorRef.markForCheck(); }));
    }
    Object.defineProperty(MatCalendarHeader.prototype, "periodButtonText", {
        /** The label for the current calendar view. */
        get: /**
         * The label for the current calendar view.
         * @return {?}
         */
        function () {
            if (this.calendar.currentView == 'month') {
                return this._dateAdapter
                    .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            }
            if (this.calendar.currentView == 'year') {
                return this._dateAdapter.getYearName(this.calendar.activeDate);
            }
            // The offset from the active year to the "slot" for the starting year is the
            // *actual* first rendered year in the multi-year view, and the last year is
            // just yearsPerPage - 1 away.
            /** @type {?} */
            var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
            /** @type {?} */
            var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
            /** @type {?} */
            var maxYearOfPage = minYearOfPage + yearsPerPage - 1;
            /** @type {?} */
            var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
            /** @type {?} */
            var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
            return this._intl.formatYearRange(minYearName, maxYearName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "periodButtonLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.calendar.currentView == 'month' ?
                this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "prevButtonLabel", {
        /** The label for the previous button. */
        get: /**
         * The label for the previous button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.prevMonthLabel,
                'year': this._intl.prevYearLabel,
                'multi-year': this._intl.prevMultiYearLabel
            }[this.calendar.currentView];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendarHeader.prototype, "nextButtonLabel", {
        /** The label for the next button. */
        get: /**
         * The label for the next button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.nextMonthLabel,
                'year': this._intl.nextYearLabel,
                'multi-year': this._intl.nextMultiYearLabel
            }[this.calendar.currentView];
        },
        enumerable: true,
        configurable: true
    });
    /** Handles user clicks on the period label. */
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    MatCalendarHeader.prototype.currentPeriodClicked = /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    function () {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    };
    /** Handles user clicks on the previous button. */
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    MatCalendarHeader.prototype.previousClicked = /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    function () {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    };
    /** Handles user clicks on the next button. */
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    MatCalendarHeader.prototype.nextClicked = /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    function () {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    };
    /** Whether the previous period button is enabled. */
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    MatCalendarHeader.prototype.previousEnabled = /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    function () {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    };
    /** Whether the next period button is enabled. */
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    MatCalendarHeader.prototype.nextEnabled = /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    function () {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    };
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @private
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    MatCalendarHeader.prototype._isSameView = /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @private
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    };
    MatCalendarHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-calendar-header',
                    template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button type=\"button\" class=\"mat-calendar-period-button\" (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\" cdkAriaLive=\"polite\">{{periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div></button><div class=\"mat-calendar-spacer\"></div><ng-content></ng-content><button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\" [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\" [attr.aria-label]=\"prevButtonLabel\"></button> <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\" [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\" [attr.aria-label]=\"nextButtonLabel\"></button></div></div>",
                    exportAs: 'matCalendarHeader',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendarHeader.ctorParameters = function () { return [
        { type: MatDatepickerIntl },
        { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        function () { return MatCalendar; })),] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    return MatCalendarHeader;
}());
/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
var MatCalendar = /** @class */ (function () {
    function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        var _this = this;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe((/**
         * @return {?}
         */
        function () {
            _changeDetectorRef.markForCheck();
            _this.stateChanges.next();
        }));
    }
    Object.defineProperty(MatCalendar.prototype, "startAt", {
        /** A date representing the period (month or year) to start the calendar in. */
        get: /**
         * A date representing the period (month or year) to start the calendar in.
         * @return {?}
         */
        function () { return this._startAt; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */
        function () { return this._clampedActiveDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "currentView", {
        /** Whether the calendar is in month view. */
        get: /**
         * Whether the calendar is in month view.
         * @return {?}
         */
        function () { return this._currentView; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._currentView = value;
            this._moveFocusOnNextTick = true;
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatCalendar.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            /** @type {?} */
            var view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.focusActiveCell = /**
     * @return {?}
     */
    function () {
        this._getCurrentViewComponent()._focusActiveCell();
    };
    /** Updates today's date after an update of the active date */
    /**
     * Updates today's date after an update of the active date
     * @return {?}
     */
    MatCalendar.prototype.updateTodaysDate = /**
     * Updates today's date after an update of the active date
     * @return {?}
     */
    function () {
        /** @type {?} */
        var view = this.currentView == 'month' ? this.monthView :
            (this.currentView == 'year' ? this.yearView : this.multiYearView);
        view.ngAfterContentInit();
    };
    /** Handles date selection in the month view. */
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    MatCalendar.prototype._dateSelected = /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    };
    /** Handles year selection in the multiyear view. */
    /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    MatCalendar.prototype._yearSelectedInMultiYearView = /**
     * Handles year selection in the multiyear view.
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Handles month selection in the year view. */
    /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    MatCalendar.prototype._monthSelectedInYearView = /**
     * Handles month selection in the year view.
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype._userSelected = /**
     * @return {?}
     */
    function () {
        this._userSelection.emit();
    };
    /** Handles year/month selection in the multi-year/year views. */
    /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    MatCalendar.prototype._goToDateInView = /**
     * Handles year/month selection in the multi-year/year views.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    function (date, view) {
        this.activeDate = date;
        this.currentView = view;
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatCalendar.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Returns the component instance that corresponds to the current calendar view. */
    /**
     * Returns the component instance that corresponds to the current calendar view.
     * @private
     * @return {?}
     */
    MatCalendar.prototype._getCurrentViewComponent = /**
     * Returns the component instance that corresponds to the current calendar view.
     * @private
     * @return {?}
     */
    function () {
        return this.monthView || this.yearView || this.multiYearView;
    };
    MatCalendar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-calendar',
                    template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template><div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\"><mat-month-view *ngSwitchCase=\"'month'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" [dateClass]=\"dateClass\" (selectedChange)=\"_dateSelected($event)\" (_userSelection)=\"_userSelected()\"></mat-month-view><mat-year-view *ngSwitchCase=\"'year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (monthSelected)=\"_monthSelectedInYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'month')\"></mat-year-view><mat-multi-year-view *ngSwitchCase=\"'multi-year'\" [(activeDate)]=\"activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (yearSelected)=\"_yearSelectedInMultiYearView($event)\" (selectedChange)=\"_goToDateInView($event, 'year')\"></mat-multi-year-view></div>",
                    styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                    host: {
                        'class': 'mat-calendar',
                    },
                    exportAs: 'matCalendar',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendar.ctorParameters = function () { return [
        { type: MatDatepickerIntl },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    MatCalendar.propDecorators = {
        headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMonthView, { static: false },] }],
        yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatYearView, { static: false },] }],
        multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatMultiYearView, { static: false },] }]
    };
    return MatCalendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material datepicker.
 * \@docs-private
 * @type {?}
 */
var matDatepickerAnimations = {
    /**
     * Transforms the height of the datepicker's calendar.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 0,
            transform: 'scale(1, 0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 1,
            transform: 'scale(1, 1)'
        }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })))
    ]),
    /**
     * Fades in the content of the calendar.
     */
    fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('fadeInCalendar', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate a unique ID for each datepicker instance.
 * @type {?}
 */
var datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 * @type {?}
 */
var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-datepicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return (/**
     * @return {?}
     */
    function () { return overlay.scrollStrategies.reposition(); });
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"]],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
var 
// Boilerplate for applying mixins to MatDatepickerContent.
/**
 * \@docs-private
 */
MatDatepickerContentBase = /** @class */ (function () {
    function MatDatepickerContentBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatDatepickerContentBase;
}());
/** @type {?} */
var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
var MatDatepickerContent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__extends"])(MatDatepickerContent, _super);
    function MatDatepickerContent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    /**
     * @return {?}
     */
    MatDatepickerContent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._calendar.focusActiveCell();
    };
    MatDatepickerContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker-content',
                    template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [headerComponent]=\"datepicker.calendarHeaderComponent\" [selected]=\"datepicker._selected\" [dateClass]=\"datepicker.dateClass\" [@fadeInCalendar]=\"'enter'\" (selectedChange)=\"datepicker.select($event)\" (yearSelected)=\"datepicker._selectYear($event)\" (monthSelected)=\"datepicker._selectMonth($event)\" (_userSelection)=\"datepicker.close()\"></mat-calendar>",
                    styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                    host: {
                        'class': 'mat-datepicker-content',
                        '[@transformPanel]': '"enter"',
                        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    },
                    animations: [
                        matDatepickerAnimations.transformPanel,
                        matDatepickerAnimations.fadeInCalendar,
                    ],
                    exportAs: 'matDatepickerContent',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['color'],
                },] },
    ];
    /** @nocollapse */
    MatDatepickerContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    MatDatepickerContent.propDecorators = {
        _calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [MatCalendar, { static: false },] }]
    };
    return MatDatepickerContent;
}(_MatDatepickerContentMixinBase));
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/**
 * Component responsible for managing the datepicker popup/dialog.
 * @template D
 */
var MatDatepicker = /** @class */ (function () {
    function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "mat-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */
        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Emits new selected date when selected date changes.
         */
        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatDatepicker.prototype, "startAt", {
        /** The date to open the calendar to initially. */
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "color", {
        /** Color palette to use on the datepicker's calendar. */
        get: /**
         * Color palette to use on the datepicker's calendar.
         * @return {?}
         */
        function () {
            return this._color ||
                (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "touchUi", {
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () { return this._touchUi; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "opened", {
        /** Whether the calendar is open. */
        get: /**
         * Whether the calendar is open.
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { value ? this.open() : this.close(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._validSelected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupComponentRef = null;
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MatDatepicker.prototype.select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
        }
    };
    /** Emits the selected year in multiyear view */
    /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    MatDatepicker.prototype._selectYear = /**
     * Emits the selected year in multiyear view
     * @param {?} normalizedYear
     * @return {?}
     */
    function (normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    };
    /** Emits selected month in year view */
    /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    MatDatepicker.prototype._selectMonth = /**
     * Emits selected month in year view
     * @param {?} normalizedMonth
     * @return {?}
     */
    function (normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    MatDatepicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return _this._selected = value; }));
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        /** @type {?} */
        var completeClose = (/**
         * @return {?}
         */
        function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this._opened) {
                _this._opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        });
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /** Open the calendar as a dialog. */
    /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    MatDatepicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe((/**
         * @return {?}
         */
        function () { return _this.close(); }));
        this._dialogRef.componentInstance.datepicker = this;
        this._setColor();
    };
    /** Open the calendar as a popup. */
    /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    MatDatepicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._calendarPortal);
            this._popupComponentRef.instance.datepicker = this;
            this._setColor();
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((/**
             * @return {?}
             */
            function () {
                _this._popupRef.updatePosition();
            }));
        }
    };
    /** Create the popup. */
    /**
     * Create the popup.
     * @private
     * @return {?}
     */
    MatDatepicker.prototype._createPopup = /**
     * Create the popup.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"] ||
                (_this._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]);
        })))).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event) {
                event.preventDefault();
            }
            _this.close();
        }));
    };
    /** Create the popup PositionStrategy. */
    /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    MatDatepicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @private
     * @return {?}
     */
    function () {
        return this._overlay.position()
            .flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepicker.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /** Passes the current theme color along to the calendar overlay. */
    /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    MatDatepicker.prototype._setColor = /**
     * Passes the current theme color along to the calendar overlay.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    };
    MatDatepicker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker',
                    template: '',
                    exportAs: 'matDatepicker',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                },] },
    ];
    /** @nocollapse */
    MatDatepicker.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"],] }] }
    ]; };
    MatDatepicker.propDecorators = {
        calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['opened',] }],
        closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['closed',] }],
        opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @type {?}
 */
var MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatDatepickerInput; })),
    multi: true
};
/**
 * \@docs-private
 * @type {?}
 */
var MAT_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return MatDatepickerInput; })),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
var  /**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
MatDatepickerInputEvent = /** @class */ (function () {
    function MatDatepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatepickerInputEvent;
}());
/**
 * Directive used to connect an input to a MatDatepicker.
 * @template D
 */
var MatDatepickerInput = /** @class */ (function () {
    function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this._cvaOnChange = (/**
         * @return {?}
         */
        function () { });
        this._validatorOnChange = (/**
         * @return {?}
         */
        function () { });
        this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = (/**
         * @return {?}
         */
        function () {
            return _this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': _this._elementRef.nativeElement.value } };
        });
        /**
         * The form control validator for the min date.
         */
        this._minValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDate(_this.min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': _this.min, 'actual': controlValue } };
        });
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDate(_this.max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': _this.max, 'actual': controlValue } };
        });
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = (/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            /** @type {?} */
            var controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        });
        /**
         * The combined form control validator for this input.
         */
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe((/**
         * @return {?}
         */
        function () {
            _this.value = _this.value;
        }));
    }
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepicker", {
        /** The datepicker that this input is associated with. */
        set: /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                return;
            }
            this._datepicker = value;
            this._datepicker._registerInput(this);
            this._datepickerSubscription.unsubscribe();
            this._datepickerSubscription = this._datepicker._selectedChanged.subscribe((/**
             * @param {?} selected
             * @return {?}
             */
            function (selected) {
                _this.value = selected;
                _this._cvaOnChange(selected);
                _this._onTouched();
                _this.dateInput.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                _this.dateChange.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepickerFilter", {
        /** Function that can be used to filter out dates within the datepicker. */
        set: /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateFilter = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "value", {
        /** The value of the input. */
        get: /**
         * The value of the input.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._getValidDateOrNull(value);
            /** @type {?} */
            var oldDate = this.value;
            this._value = value;
            this._formatValue(value);
            if (!this._dateAdapter.sameDate(oldDate, value)) {
                this._valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "min", {
        /** The minimum valid date. */
        get: /**
         * The minimum valid date.
         * @return {?}
         */
        function () { return this._min; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "max", {
        /** The maximum valid date. */
        get: /**
         * The maximum valid date.
         * @return {?}
         */
        function () { return this._max; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "disabled", {
        /** Whether the datepicker-input is disabled. */
        get: /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        function () { return !!this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
            /** @type {?} */
            var element = this._elementRef.nativeElement;
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
            // We need to null check the `blur` method, because it's undefined during SSR.
            if (newValue && element.blur) {
                // Normally, native input elements automatically blur if they turn disabled. This behavior
                // is problematic, because it would mean that it triggers another change detection cycle,
                // which then causes a changed after checked error if the input element was focused before.
                element.blur();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnValidatorChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorOnChange = fn;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    MatDatepickerInput.prototype.validate = /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * @deprecated
     * @breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     */
    /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    MatDatepickerInput.prototype.getPopupConnectionElementRef = /**
     * @deprecated
     * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
     * @return {?}
     */
    function () {
        return this.getConnectedOverlayOrigin();
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    MatDatepickerInput.prototype.getConnectedOverlayOrigin = /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    function () {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype.writeValue = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnChange = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnTouched = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatDatepickerInput.prototype.setDisabledState = 
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerInput.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"];
        if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype._onInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        if (!this._dateAdapter.sameDate(date, this._value)) {
            this._value = date;
            this._cvaOnChange(date);
            this._valueChange.emit(date);
            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
            this._validatorOnChange();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype._onChange = /**
     * @return {?}
     */
    function () {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /** Returns the palette used by the input's form field, if any. */
    /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    MatDatepickerInput.prototype._getThemePalette = /**
     * Returns the palette used by the input's form field, if any.
     * @return {?}
     */
    function () {
        return this._formField ? this._formField.color : undefined;
    };
    /** Handles blur events on the input. */
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    MatDatepickerInput.prototype._onBlur = /**
     * Handles blur events on the input.
     * @return {?}
     */
    function () {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    };
    /** Formats a value and sets it on the input element. */
    /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype._formatValue = /**
     * Formats a value and sets it on the input element.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    };
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepickerInput.prototype._getValidDateOrNull = /**
     * @private
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatDatepickerInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'input[matDatepicker]',
                    providers: [
                        MAT_DATEPICKER_VALUE_ACCESSOR,
                        MAT_DATEPICKER_VALIDATORS,
                        { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatepickerInput },
                    ],
                    host: {
                        '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                        '[disabled]': 'disabled',
                        '(input)': '_onInput($event.target.value)',
                        '(change)': '_onChange()',
                        '(blur)': '_onBlur()',
                        '(keydown)': '_onKeydown($event)',
                    },
                    exportAs: 'matDatepickerInput',
                },] },
    ];
    /** @nocollapse */
    MatDatepickerInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],] }] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    MatDatepickerInput.propDecorators = {
        matDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        matDatepickerFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatDatepickerInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Can be used to override the icon of a `matDatepickerToggle`.
 */
var MatDatepickerToggleIcon = /** @class */ (function () {
    function MatDatepickerToggleIcon() {
    }
    MatDatepickerToggleIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[matDatepickerToggleIcon]'
                },] },
    ];
    return MatDatepickerToggleIcon;
}());
/**
 * @template D
 */
var MatDatepickerToggle = /** @class */ (function () {
    function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"].EMPTY;
        /** @type {?} */
        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    Object.defineProperty(MatDatepickerToggle.prototype, "disabled", {
        /** Whether the toggle button is disabled. */
        get: /**
         * Whether the toggle button is disabled.
         * @return {?}
         */
        function () {
            if (this._disabled === undefined && this.datepicker) {
                return this.datepicker.disabled;
            }
            return !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['datepicker']) {
            this._watchStateChanges();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._watchStateChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerToggle.prototype._open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MatDatepickerToggle.prototype._watchStateChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        /** @type {?} */
        var inputDisabled = this.datepicker && this.datepicker._datepickerInput ?
            this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        /** @type {?} */
        var datepickerToggled = this.datepicker ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        this._stateChanges.unsubscribe();
        this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe((/**
         * @return {?}
         */
        function () { return _this._changeDetectorRef.markForCheck(); }));
    };
    MatDatepickerToggle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-datepicker-toggle',
                    template: "<button #button mat-icon-button type=\"button\" [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\" [attr.aria-label]=\"_intl.openCalendarLabel\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [disabled]=\"disabled\" [disableRipple]=\"disableRipple\" (click)=\"_open($event)\"><svg *ngIf=\"!_customIcon\" class=\"mat-datepicker-toggle-default-icon\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" fill=\"currentColor\" focusable=\"false\"><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg><ng-content select=\"[matDatepickerToggleIcon]\"></ng-content></button>",
                    styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}"],
                    host: {
                        'class': 'mat-datepicker-toggle',
                        // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
                        // consumer may have provided, while still being able to receive focus.
                        '[attr.tabindex]': '-1',
                        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                        '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                        '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                        '(focus)': '_button.focus()',
                    },
                    exportAs: 'matDatepickerToggle',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatDatepickerToggle.ctorParameters = function () { return [
        { type: MatDatepickerIntl },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['tabindex',] }] }
    ]; };
    MatDatepickerToggle.propDecorators = {
        datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['for',] }],
        tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatDatepickerToggleIcon, { static: false },] }],
        _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['button', { static: false },] }]
    };
    return MatDatepickerToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatDatepickerModule = /** @class */ (function () {
    function MatDatepickerModule() {
    }
    MatDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__["OverlayModule"],
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["A11yModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"],
                    ],
                    exports: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                        MatCalendarHeader,
                    ],
                    declarations: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                        MatCalendarHeader,
                    ],
                    providers: [
                        MatDatepickerIntl,
                        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER,
                    ],
                    entryComponents: [
                        MatDatepickerContent,
                        MatCalendarHeader,
                    ]
                },] },
    ];
    return MatDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=datepicker.es5.js.map


/***/ })

}]);
//# sourceMappingURL=default~main-elements-elements-module~main-routes-routes-module.js.map