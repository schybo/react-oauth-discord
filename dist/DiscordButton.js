;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.app = {})))
})(this, function (exports) {
  'use strict'

  function _extends() {
    _extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i]
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key]
              }
            }
          }
          return target
        }
    return _extends.apply(this, arguments)
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {}
    var target = {}
    var sourceKeys = Object.keys(source)
    var key, i
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i]
      if (excluded.indexOf(key) >= 0) continue
      target[key] = source[key]
    }
    return target
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {}
    var target = _objectWithoutPropertiesLoose(source, excluded)
    var key, i
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i]
        if (excluded.indexOf(key) >= 0) continue
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue
        target[key] = source[key]
      }
    }
    return target
  }

  var global$o = require('../internals/global')
  var DOMIterables = require('../internals/dom-iterables')
  var DOMTokenListPrototype = require('../internals/dom-token-list-prototype')
  var ArrayIteratorMethods = require('../modules/es.array.iterator')
  var createNonEnumerableProperty$5 = require('../internals/create-non-enumerable-property')
  var wellKnownSymbol$g = require('../internals/well-known-symbol')
  var ITERATOR$4 = wellKnownSymbol$g('iterator')
  var TO_STRING_TAG$3 = wellKnownSymbol$g('toStringTag')
  var ArrayValues = ArrayIteratorMethods.values
  var handlePrototype = function handlePrototype(
    CollectionPrototype,
    COLLECTION_NAME
  ) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$4] !== ArrayValues)
        try {
          createNonEnumerableProperty$5(
            CollectionPrototype,
            ITERATOR$4,
            ArrayValues
          )
        } catch (error) {
          CollectionPrototype[ITERATOR$4] = ArrayValues
        }
      if (!CollectionPrototype[TO_STRING_TAG$3]) {
        createNonEnumerableProperty$5(
          CollectionPrototype,
          TO_STRING_TAG$3,
          COLLECTION_NAME
        )
      }
      if (DOMIterables[COLLECTION_NAME])
        for (var METHOD_NAME in ArrayIteratorMethods) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (
            CollectionPrototype[METHOD_NAME] !==
            ArrayIteratorMethods[METHOD_NAME]
          )
            try {
              createNonEnumerableProperty$5(
                CollectionPrototype,
                METHOD_NAME,
                ArrayIteratorMethods[METHOD_NAME]
              )
            } catch (error) {
              CollectionPrototype[METHOD_NAME] =
                ArrayIteratorMethods[METHOD_NAME]
            }
        }
    }
  }
  for (var COLLECTION_NAME in DOMIterables) {
    handlePrototype(
      global$o[COLLECTION_NAME] && global$o[COLLECTION_NAME].prototype,
      COLLECTION_NAME
    )
  }
  handlePrototype(DOMTokenListPrototype, 'DOMTokenList')

  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x
  }

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n
    var f = n.default
    if (typeof f == 'function') {
      var a = function a() {
        if (this instanceof a) {
          var args = [null]
          args.push.apply(args, arguments)
          var Ctor = Function.bind.apply(f, args)
          return new Ctor()
        }
        return f.apply(this, arguments)
      }
      a.prototype = f.prototype
    } else a = {}
    Object.defineProperty(a, '__esModule', { value: true })
    Object.keys(n).forEach(function (k) {
      var d = Object.getOwnPropertyDescriptor(n, k)
      Object.defineProperty(
        a,
        k,
        d.get
          ? d
          : {
              enumerable: true,
              get: function () {
                return n[k]
              },
            }
      )
    })
    return a
  }

  var $$l = require('../internals/export')
  var exec$4 = require('../internals/regexp-exec')

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$l(
    {
      target: 'RegExp',
      proto: true,
      forced: /./.exec !== exec$4,
    },
    {
      exec: exec$4,
    }
  )

  var apply$3 = require('../internals/function-apply')
  var call$i = require('../internals/function-call')
  var uncurryThis$q = require('../internals/function-uncurry-this')
  var fixRegExpWellKnownSymbolLogic$3 = require('../internals/fix-regexp-well-known-symbol-logic')
  var fails$n = require('../internals/fails')
  var anObject$h = require('../internals/an-object')
  var isCallable$m = require('../internals/is-callable')
  var isNullOrUndefined$a = require('../internals/is-null-or-undefined')
  var toIntegerOrInfinity$4 = require('../internals/to-integer-or-infinity')
  var toLength$6 = require('../internals/to-length')
  var toString$a = require('../internals/to-string')
  var requireObjectCoercible$7 = require('../internals/require-object-coercible')
  var advanceStringIndex$2 = require('../internals/advance-string-index')
  var getMethod$7 = require('../internals/get-method')
  var getSubstitution = require('../internals/get-substitution')
  var regExpExec$2 = require('../internals/regexp-exec-abstract')
  var wellKnownSymbol$f = require('../internals/well-known-symbol')
  var REPLACE = wellKnownSymbol$f('replace')
  var max$2 = Math.max
  var min$3 = Math.min
  var concat$1 = uncurryThis$q([].concat)
  var push$4 = uncurryThis$q([].push)
  var stringIndexOf$2 = uncurryThis$q(''.indexOf)
  var stringSlice$7 = uncurryThis$q(''.slice)
  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it)
  }

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0'
  })()

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === ''
    }
    return false
  })()
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$n(function () {
    var re = /./
    re.exec = function () {
      var result = []
      result.groups = {
        a: '7',
      }
      return result
    }
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7'
  })

  // @@replace logic
  fixRegExpWellKnownSymbolLogic$3(
    'replace',
    function (_, nativeReplace, maybeCallNative) {
      var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
        ? '$'
        : '$0'
      return [
        // `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = requireObjectCoercible$7(this)
          var replacer = isNullOrUndefined$a(searchValue)
            ? undefined
            : getMethod$7(searchValue, REPLACE)
          return replacer
            ? call$i(replacer, searchValue, O, replaceValue)
            : call$i(nativeReplace, toString$a(O), searchValue, replaceValue)
        },
        // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (string, replaceValue) {
          var rx = anObject$h(this)
          var S = toString$a(string)
          if (
            typeof replaceValue == 'string' &&
            stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
            stringIndexOf$2(replaceValue, '$<') === -1
          ) {
            var res = maybeCallNative(nativeReplace, rx, S, replaceValue)
            if (res.done) return res.value
          }
          var functionalReplace = isCallable$m(replaceValue)
          if (!functionalReplace) replaceValue = toString$a(replaceValue)
          var global = rx.global
          if (global) {
            var fullUnicode = rx.unicode
            rx.lastIndex = 0
          }
          var results = []
          while (true) {
            var result = regExpExec$2(rx, S)
            if (result === null) break
            push$4(results, result)
            if (!global) break
            var matchStr = toString$a(result[0])
            if (matchStr === '')
              rx.lastIndex = advanceStringIndex$2(
                S,
                toLength$6(rx.lastIndex),
                fullUnicode
              )
          }
          var accumulatedResult = ''
          var nextSourcePosition = 0
          for (var i = 0; i < results.length; i++) {
            result = results[i]
            var matched = toString$a(result[0])
            var position = max$2(
              min$3(toIntegerOrInfinity$4(result.index), S.length),
              0
            )
            var captures = []
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++)
              push$4(captures, maybeToString(result[j]))
            var namedCaptures = result.groups
            if (functionalReplace) {
              var replacerArgs = concat$1([matched], captures, position, S)
              if (namedCaptures !== undefined)
                push$4(replacerArgs, namedCaptures)
              var replacement = toString$a(
                apply$3(replaceValue, undefined, replacerArgs)
              )
            } else {
              replacement = getSubstitution(
                matched,
                S,
                position,
                captures,
                namedCaptures,
                replaceValue
              )
            }
            if (position >= nextSourcePosition) {
              accumulatedResult +=
                stringSlice$7(S, nextSourcePosition, position) + replacement
              nextSourcePosition = position + matched.length
            }
          }
          return accumulatedResult + stringSlice$7(S, nextSourcePosition)
        },
      ]
    },
    !REPLACE_SUPPORTS_NAMED_GROUPS ||
      !REPLACE_KEEPS_$0 ||
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
  )

  var DESCRIPTORS$b = require('../internals/descriptors')
  var global$n = require('../internals/global')
  var uncurryThis$p = require('../internals/function-uncurry-this')
  var isForced$5 = require('../internals/is-forced')
  var inheritIfRequired$1 = require('../internals/inherit-if-required')
  var createNonEnumerableProperty$4 = require('../internals/create-non-enumerable-property')
  var getOwnPropertyNames$1 =
    require('../internals/object-get-own-property-names').f
  var isPrototypeOf$4 = require('../internals/object-is-prototype-of')
  var isRegExp$2 = require('../internals/is-regexp')
  var toString$9 = require('../internals/to-string')
  var getRegExpFlags$1 = require('../internals/regexp-get-flags')
  var stickyHelpers$1 = require('../internals/regexp-sticky-helpers')
  var proxyAccessor = require('../internals/proxy-accessor')
  var defineBuiltIn$a = require('../internals/define-built-in')
  var fails$m = require('../internals/fails')
  var hasOwn$d = require('../internals/has-own-property')
  var enforceInternalState$2 = require('../internals/internal-state').enforce
  var setSpecies$3 = require('../internals/set-species')
  var wellKnownSymbol$e = require('../internals/well-known-symbol')
  var UNSUPPORTED_DOT_ALL = require('../internals/regexp-unsupported-dot-all')
  var UNSUPPORTED_NCG = require('../internals/regexp-unsupported-ncg')
  var MATCH$2 = wellKnownSymbol$e('match')
  var NativeRegExp = global$n.RegExp
  var RegExpPrototype$1 = NativeRegExp.prototype
  var SyntaxError = global$n.SyntaxError
  var exec$3 = uncurryThis$p(RegExpPrototype$1.exec)
  var charAt$2 = uncurryThis$p(''.charAt)
  var replace$4 = uncurryThis$p(''.replace)
  var stringIndexOf$1 = uncurryThis$p(''.indexOf)
  var stringSlice$6 = uncurryThis$p(''.slice)
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
  var re1 = /a/g
  var re2 = /a/g

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1
  var MISSED_STICKY = stickyHelpers$1.MISSED_STICKY
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y
  var BASE_FORCED =
    DESCRIPTORS$b &&
    (!CORRECT_NEW ||
      MISSED_STICKY ||
      UNSUPPORTED_DOT_ALL ||
      UNSUPPORTED_NCG ||
      fails$m(function () {
        re2[MATCH$2] = false
        // RegExp constructor can alter flags and IsRegExp works correct with @@match
        return (
          NativeRegExp(re1) != re1 ||
          NativeRegExp(re2) == re2 ||
          NativeRegExp(re1, 'i') != '/a/i'
        )
      }))
  var handleDotAll = function handleDotAll(string) {
    var length = string.length
    var index = 0
    var result = ''
    var brackets = false
    var chr
    for (; index <= length; index++) {
      chr = charAt$2(string, index)
      if (chr === '\\') {
        result += chr + charAt$2(string, ++index)
        continue
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]'
      } else {
        if (chr === '[') {
          brackets = true
        } else if (chr === ']') {
          brackets = false
        }
        result += chr
      }
    }
    return result
  }
  var handleNCG = function handleNCG(string) {
    var length = string.length
    var index = 0
    var result = ''
    var named = []
    var names = {}
    var brackets = false
    var ncg = false
    var groupid = 0
    var groupname = ''
    var chr
    for (; index <= length; index++) {
      chr = charAt$2(string, index)
      if (chr === '\\') {
        chr = chr + charAt$2(string, ++index)
      } else if (chr === ']') {
        brackets = false
      } else if (!brackets)
        switch (true) {
          case chr === '[':
            brackets = true
            break
          case chr === '(':
            if (exec$3(IS_NCG, stringSlice$6(string, index + 1))) {
              index += 2
              ncg = true
            }
            result += chr
            groupid++
            continue
          case chr === '>' && ncg:
            if (groupname === '' || hasOwn$d(names, groupname)) {
              throw new SyntaxError('Invalid capture group name')
            }
            names[groupname] = true
            named[named.length] = [groupname, groupid]
            ncg = false
            groupname = ''
            continue
        }
      if (ncg) groupname += chr
      else result += chr
    }
    return [result, named]
  }

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced$5('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf$4(RegExpPrototype$1, this)
      var patternIsRegExp = isRegExp$2(pattern)
      var flagsAreUndefined = flags === undefined
      var groups = []
      var rawPattern = pattern
      var rawFlags, dotAll, sticky, handled, result, state
      if (
        !thisIsRegExp &&
        patternIsRegExp &&
        flagsAreUndefined &&
        pattern.constructor === RegExpWrapper
      ) {
        return pattern
      }
      if (patternIsRegExp || isPrototypeOf$4(RegExpPrototype$1, pattern)) {
        pattern = pattern.source
        if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern)
      }
      pattern = pattern === undefined ? '' : toString$9(pattern)
      flags = flags === undefined ? '' : toString$9(flags)
      rawPattern = pattern
      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$1(flags, 's') > -1
        if (dotAll) flags = replace$4(flags, /s/g, '')
      }
      rawFlags = flags
      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$1(flags, 'y') > -1
        if (sticky && UNSUPPORTED_Y$1) flags = replace$4(flags, /y/g, '')
      }
      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern)
        pattern = handled[0]
        groups = handled[1]
      }
      result = inheritIfRequired$1(
        NativeRegExp(pattern, flags),
        thisIsRegExp ? this : RegExpPrototype$1,
        RegExpWrapper
      )
      if (dotAll || sticky || groups.length) {
        state = enforceInternalState$2(result)
        if (dotAll) {
          state.dotAll = true
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags)
        }
        if (sticky) state.sticky = true
        if (groups.length) state.groups = groups
      }
      if (pattern !== rawPattern)
        try {
          // fails in old engines, but we have no alternatives for unsupported regex syntax
          createNonEnumerableProperty$4(
            result,
            'source',
            rawPattern === '' ? '(?:)' : rawPattern
          )
        } catch (error) {
          /* empty */
        }
      return result
    }
    for (
      var keys$2 = getOwnPropertyNames$1(NativeRegExp), index = 0;
      keys$2.length > index;

    ) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys$2[index++])
    }
    RegExpPrototype$1.constructor = RegExpWrapper
    RegExpWrapper.prototype = RegExpPrototype$1
    defineBuiltIn$a(global$n, 'RegExp', RegExpWrapper, {
      constructor: true,
    })
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies$3('RegExp')

  var PROPER_FUNCTION_NAME$1 = require('../internals/function-name').PROPER
  var defineBuiltIn$9 = require('../internals/define-built-in')
  var anObject$g = require('../internals/an-object')
  var $toString$2 = require('../internals/to-string')
  var fails$l = require('../internals/fails')
  var getRegExpFlags = require('../internals/regexp-get-flags')
  var TO_STRING = 'toString'
  var RegExpPrototype = RegExp.prototype
  var nativeToString = RegExpPrototype[TO_STRING]
  var NOT_GENERIC = fails$l(function () {
    return (
      nativeToString.call({
        source: 'a',
        flags: 'b',
      }) != '/a/b'
    )
  })
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME =
    PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn$9(
      RegExp.prototype,
      TO_STRING,
      function toString() {
        var R = anObject$g(this)
        var pattern = $toString$2(R.source)
        var flags = $toString$2(getRegExpFlags(R))
        return '/' + pattern + '/' + flags
      },
      {
        unsafe: true,
      }
    )
  }

  var apply$2 = require('../internals/function-apply')
  var call$h = require('../internals/function-call')
  var uncurryThis$o = require('../internals/function-uncurry-this')
  var fixRegExpWellKnownSymbolLogic$2 = require('../internals/fix-regexp-well-known-symbol-logic')
  var anObject$f = require('../internals/an-object')
  var isNullOrUndefined$9 = require('../internals/is-null-or-undefined')
  var isRegExp$1 = require('../internals/is-regexp')
  var requireObjectCoercible$6 = require('../internals/require-object-coercible')
  var speciesConstructor$4 = require('../internals/species-constructor')
  var advanceStringIndex$1 = require('../internals/advance-string-index')
  var toLength$5 = require('../internals/to-length')
  var toString$8 = require('../internals/to-string')
  var getMethod$6 = require('../internals/get-method')
  var arraySlice$5 = require('../internals/array-slice-simple')
  var callRegExpExec = require('../internals/regexp-exec-abstract')
  var regexpExec = require('../internals/regexp-exec')
  var stickyHelpers = require('../internals/regexp-sticky-helpers')
  var fails$k = require('../internals/fails')
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y
  var MAX_UINT32 = 0xffffffff
  var min$2 = Math.min
  var $push = [].push
  var exec$2 = uncurryThis$o(/./.exec)
  var push$3 = uncurryThis$o($push)
  var stringSlice$5 = uncurryThis$o(''.slice)

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$k(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/
    var originalExec = re.exec
    re.exec = function () {
      return originalExec.apply(this, arguments)
    }
    var result = 'ab'.split(re)
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b'
  })

  // @@split logic
  fixRegExpWellKnownSymbolLogic$2(
    'split',
    function (SPLIT, nativeSplit, maybeCallNative) {
      var internalSplit
      if (
        'abbc'.split(/(b)*/)[1] == 'c' ||
        // eslint-disable-next-line regexp/no-empty-group -- required for testing
        'test'.split(/(?:)/, -1).length != 4 ||
        'ab'.split(/(?:ab)*/).length != 2 ||
        '.'.split(/(.?)(.?)/).length != 4 ||
        // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
        '.'.split(/()()/).length > 1 ||
        ''.split(/.?/).length
      ) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function internalSplit(separator, limit) {
          var string = toString$8(requireObjectCoercible$6(this))
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0
          if (lim === 0) return []
          if (separator === undefined) return [string]
          // If `separator` is not a regex, use native split
          if (!isRegExp$1(separator)) {
            return call$h(nativeSplit, string, separator, lim)
          }
          var output = []
          var flags =
            (separator.ignoreCase ? 'i' : '') +
            (separator.multiline ? 'm' : '') +
            (separator.unicode ? 'u' : '') +
            (separator.sticky ? 'y' : '')
          var lastLastIndex = 0
          // Make `global` and avoid `lastIndex` issues by working with a copy
          var separatorCopy = new RegExp(separator.source, flags + 'g')
          var match, lastIndex, lastLength
          while ((match = call$h(regexpExec, separatorCopy, string))) {
            lastIndex = separatorCopy.lastIndex
            if (lastIndex > lastLastIndex) {
              push$3(output, stringSlice$5(string, lastLastIndex, match.index))
              if (match.length > 1 && match.index < string.length)
                apply$2($push, output, arraySlice$5(match, 1))
              lastLength = match[0].length
              lastLastIndex = lastIndex
              if (output.length >= lim) break
            }
            if (separatorCopy.lastIndex === match.index)
              separatorCopy.lastIndex++ // Avoid an infinite loop
          }

          if (lastLastIndex === string.length) {
            if (lastLength || !exec$2(separatorCopy, '')) push$3(output, '')
          } else push$3(output, stringSlice$5(string, lastLastIndex))
          return output.length > lim ? arraySlice$5(output, 0, lim) : output
        }
        // Chakra, V8
      } else if ('0'.split(undefined, 0).length) {
        internalSplit = function internalSplit(separator, limit) {
          return separator === undefined && limit === 0
            ? []
            : call$h(nativeSplit, this, separator, limit)
        }
      } else internalSplit = nativeSplit
      return [
        // `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible$6(this)
          var splitter = isNullOrUndefined$9(separator)
            ? undefined
            : getMethod$6(separator, SPLIT)
          return splitter
            ? call$h(splitter, separator, O, limit)
            : call$h(internalSplit, toString$8(O), separator, limit)
        },
        // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (string, limit) {
          var rx = anObject$f(this)
          var S = toString$8(string)
          var res = maybeCallNative(
            internalSplit,
            rx,
            S,
            limit,
            internalSplit !== nativeSplit
          )
          if (res.done) return res.value
          var C = speciesConstructor$4(rx, RegExp)
          var unicodeMatching = rx.unicode
          var flags =
            (rx.ignoreCase ? 'i' : '') +
            (rx.multiline ? 'm' : '') +
            (rx.unicode ? 'u' : '') +
            (UNSUPPORTED_Y ? 'g' : 'y')

          // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.
          var splitter = new C(
            UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx,
            flags
          )
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0
          if (lim === 0) return []
          if (S.length === 0)
            return callRegExpExec(splitter, S) === null ? [S] : []
          var p = 0
          var q = 0
          var A = []
          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q
            var z = callRegExpExec(
              splitter,
              UNSUPPORTED_Y ? stringSlice$5(S, q) : S
            )
            var e
            if (
              z === null ||
              (e = min$2(
                toLength$5(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)),
                S.length
              )) === p
            ) {
              q = advanceStringIndex$1(S, q, unicodeMatching)
            } else {
              push$3(A, stringSlice$5(S, p, q))
              if (A.length === lim) return A
              for (var i = 1; i <= z.length - 1; i++) {
                push$3(A, z[i])
                if (A.length === lim) return A
              }
              q = p = e
            }
          }
          push$3(A, stringSlice$5(S, p))
          return A
        },
      ]
    },
    !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC,
    UNSUPPORTED_Y
  )

  require('../modules/es.array.iterator')
  var $$k = require('../internals/export')
  var global$m = require('../internals/global')
  var call$g = require('../internals/function-call')
  var uncurryThis$n = require('../internals/function-uncurry-this')
  var DESCRIPTORS$a = require('../internals/descriptors')
  var USE_NATIVE_URL$1 = require('../internals/url-constructor-detection')
  var defineBuiltIn$8 = require('../internals/define-built-in')
  var defineBuiltIns$4 = require('../internals/define-built-ins')
  var setToStringTag$5 = require('../internals/set-to-string-tag')
  var createIteratorConstructor = require('../internals/iterator-create-constructor')
  var InternalStateModule$5 = require('../internals/internal-state')
  var anInstance$6 = require('../internals/an-instance')
  var isCallable$l = require('../internals/is-callable')
  var hasOwn$c = require('../internals/has-own-property')
  var bind$6 = require('../internals/function-bind-context')
  var classof$9 = require('../internals/classof')
  var anObject$e = require('../internals/an-object')
  var isObject$e = require('../internals/is-object')
  var $toString$1 = require('../internals/to-string')
  var create = require('../internals/object-create')
  var createPropertyDescriptor$4 = require('../internals/create-property-descriptor')
  var getIterator$2 = require('../internals/get-iterator')
  var getIteratorMethod$3 = require('../internals/get-iterator-method')
  var validateArgumentsLength$3 = require('../internals/validate-arguments-length')
  var wellKnownSymbol$d = require('../internals/well-known-symbol')
  var arraySort = require('../internals/array-sort')
  var ITERATOR$3 = wellKnownSymbol$d('iterator')
  var URL_SEARCH_PARAMS = 'URLSearchParams'
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator'
  var setInternalState$4 = InternalStateModule$5.set
  var getInternalParamsState =
    InternalStateModule$5.getterFor(URL_SEARCH_PARAMS)
  var getInternalIteratorState = InternalStateModule$5.getterFor(
    URL_SEARCH_PARAMS_ITERATOR
  )
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor

  // Avoid NodeJS experimental warning
  var safeGetBuiltIn = function safeGetBuiltIn(name) {
    if (!DESCRIPTORS$a) return global$m[name]
    var descriptor = getOwnPropertyDescriptor$3(global$m, name)
    return descriptor && descriptor.value
  }
  var nativeFetch = safeGetBuiltIn('fetch')
  var NativeRequest = safeGetBuiltIn('Request')
  var Headers = safeGetBuiltIn('Headers')
  var RequestPrototype = NativeRequest && NativeRequest.prototype
  var HeadersPrototype = Headers && Headers.prototype
  var RegExp$1 = global$m.RegExp
  var TypeError$4 = global$m.TypeError
  var decodeURIComponent = global$m.decodeURIComponent
  var encodeURIComponent$1 = global$m.encodeURIComponent
  var charAt$1 = uncurryThis$n(''.charAt)
  var join$2 = uncurryThis$n([].join)
  var push$2 = uncurryThis$n([].push)
  var replace$3 = uncurryThis$n(''.replace)
  var shift$1 = uncurryThis$n([].shift)
  var splice$1 = uncurryThis$n([].splice)
  var split$2 = uncurryThis$n(''.split)
  var stringSlice$4 = uncurryThis$n(''.slice)
  var plus = /\+/g
  var sequences = Array(4)
  var percentSequence = function percentSequence(bytes) {
    return (
      sequences[bytes - 1] ||
      (sequences[bytes - 1] = RegExp$1(
        '((?:%[\\da-f]{2}){' + bytes + '})',
        'gi'
      ))
    )
  }
  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent(sequence)
    } catch (error) {
      return sequence
    }
  }
  var deserialize = function deserialize(it) {
    var result = replace$3(it, plus, ' ')
    var bytes = 4
    try {
      return decodeURIComponent(result)
    } catch (error) {
      while (bytes) {
        result = replace$3(result, percentSequence(bytes--), percentDecode)
      }
      return result
    }
  }
  var find$1 = /[!'()~]|%20/g
  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
  }
  var replacer = function replacer(match) {
    return replacements[match]
  }
  var _serialize = function serialize(it) {
    return replace$3(encodeURIComponent$1(it), find$1, replacer)
  }
  var URLSearchParamsIterator = createIteratorConstructor(
    function Iterator(params, kind) {
      setInternalState$4(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        iterator: getIterator$2(getInternalParamsState(params).entries),
        kind: kind,
      })
    },
    'Iterator',
    function next() {
      var state = getInternalIteratorState(this)
      var kind = state.kind
      var step = state.iterator.next()
      var entry = step.value
      if (!step.done) {
        step.value =
          kind === 'keys'
            ? entry.key
            : kind === 'values'
            ? entry.value
            : [entry.key, entry.value]
      }
      return step
    },
    true
  )
  var URLSearchParamsState = function URLSearchParamsState(init) {
    this.entries = []
    this.url = null
    if (init !== undefined) {
      if (isObject$e(init)) this.parseObject(init)
      else
        this.parseQuery(
          typeof init == 'string'
            ? charAt$1(init, 0) === '?'
              ? stringSlice$4(init, 1)
              : init
            : $toString$1(init)
        )
    }
  }
  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function bindURL(url) {
      this.url = url
      this.update()
    },
    parseObject: function parseObject(object) {
      var iteratorMethod = getIteratorMethod$3(object)
      var iterator, next, step, entryIterator, entryNext, first, second
      if (iteratorMethod) {
        iterator = getIterator$2(object, iteratorMethod)
        next = iterator.next
        while (!(step = call$g(next, iterator)).done) {
          entryIterator = getIterator$2(anObject$e(step.value))
          entryNext = entryIterator.next
          if (
            (first = call$g(entryNext, entryIterator)).done ||
            (second = call$g(entryNext, entryIterator)).done ||
            !call$g(entryNext, entryIterator).done
          )
            throw TypeError$4('Expected sequence with length 2')
          push$2(this.entries, {
            key: $toString$1(first.value),
            value: $toString$1(second.value),
          })
        }
      } else
        for (var key in object)
          if (hasOwn$c(object, key)) {
            push$2(this.entries, {
              key: key,
              value: $toString$1(object[key]),
            })
          }
    },
    parseQuery: function parseQuery(query) {
      if (query) {
        var attributes = split$2(query, '&')
        var index = 0
        var attribute, entry
        while (index < attributes.length) {
          attribute = attributes[index++]
          if (attribute.length) {
            entry = split$2(attribute, '=')
            push$2(this.entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$2(entry, '=')),
            })
          }
        }
      }
    },
    serialize: function serialize() {
      var entries = this.entries
      var result = []
      var index = 0
      var entry
      while (index < entries.length) {
        entry = entries[index++]
        push$2(result, _serialize(entry.key) + '=' + _serialize(entry.value))
      }
      return join$2(result, '&')
    },
    update: function update() {
      this.entries.length = 0
      this.parseQuery(this.url.query)
    },
    updateURL: function updateURL() {
      if (this.url) this.url.update()
    },
  }

  // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams
  var URLSearchParamsConstructor = function URLSearchParams /* init */() {
    anInstance$6(this, URLSearchParamsPrototype)
    var init = arguments.length > 0 ? arguments[0] : undefined
    setInternalState$4(this, new URLSearchParamsState(init))
  }
  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype
  defineBuiltIns$4(
    URLSearchParamsPrototype,
    {
      // `URLSearchParams.prototype.append` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-append
      append: function append(name, value) {
        validateArgumentsLength$3(arguments.length, 2)
        var state = getInternalParamsState(this)
        push$2(state.entries, {
          key: $toString$1(name),
          value: $toString$1(value),
        })
        state.updateURL()
      },
      // `URLSearchParams.prototype.delete` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
      delete: function _delete(name) {
        validateArgumentsLength$3(arguments.length, 1)
        var state = getInternalParamsState(this)
        var entries = state.entries
        var key = $toString$1(name)
        var index = 0
        while (index < entries.length) {
          if (entries[index].key === key) splice$1(entries, index, 1)
          else index++
        }
        state.updateURL()
      },
      // `URLSearchParams.prototype.get` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-get
      get: function get(name) {
        validateArgumentsLength$3(arguments.length, 1)
        var entries = getInternalParamsState(this).entries
        var key = $toString$1(name)
        var index = 0
        for (; index < entries.length; index++) {
          if (entries[index].key === key) return entries[index].value
        }
        return null
      },
      // `URLSearchParams.prototype.getAll` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
      getAll: function getAll(name) {
        validateArgumentsLength$3(arguments.length, 1)
        var entries = getInternalParamsState(this).entries
        var key = $toString$1(name)
        var result = []
        var index = 0
        for (; index < entries.length; index++) {
          if (entries[index].key === key) push$2(result, entries[index].value)
        }
        return result
      },
      // `URLSearchParams.prototype.has` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-has
      has: function has(name) {
        validateArgumentsLength$3(arguments.length, 1)
        var entries = getInternalParamsState(this).entries
        var key = $toString$1(name)
        var index = 0
        while (index < entries.length) {
          if (entries[index++].key === key) return true
        }
        return false
      },
      // `URLSearchParams.prototype.set` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-set
      set: function set(name, value) {
        validateArgumentsLength$3(arguments.length, 1)
        var state = getInternalParamsState(this)
        var entries = state.entries
        var found = false
        var key = $toString$1(name)
        var val = $toString$1(value)
        var index = 0
        var entry
        for (; index < entries.length; index++) {
          entry = entries[index]
          if (entry.key === key) {
            if (found) splice$1(entries, index--, 1)
            else {
              found = true
              entry.value = val
            }
          }
        }
        if (!found)
          push$2(entries, {
            key: key,
            value: val,
          })
        state.updateURL()
      },
      // `URLSearchParams.prototype.sort` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
      sort: function sort() {
        var state = getInternalParamsState(this)
        arraySort(state.entries, function (a, b) {
          return a.key > b.key ? 1 : -1
        })
        state.updateURL()
      },
      // `URLSearchParams.prototype.forEach` method
      forEach: function forEach(callback /* , thisArg */) {
        var entries = getInternalParamsState(this).entries
        var boundFunction = bind$6(
          callback,
          arguments.length > 1 ? arguments[1] : undefined
        )
        var index = 0
        var entry
        while (index < entries.length) {
          entry = entries[index++]
          boundFunction(entry.value, entry.key, this)
        }
      },
      // `URLSearchParams.prototype.keys` method
      keys: function keys() {
        return new URLSearchParamsIterator(this, 'keys')
      },
      // `URLSearchParams.prototype.values` method
      values: function values() {
        return new URLSearchParamsIterator(this, 'values')
      },
      // `URLSearchParams.prototype.entries` method
      entries: function entries() {
        return new URLSearchParamsIterator(this, 'entries')
      },
    },
    {
      enumerable: true,
    }
  )

  // `URLSearchParams.prototype[@@iterator]` method
  defineBuiltIn$8(
    URLSearchParamsPrototype,
    ITERATOR$3,
    URLSearchParamsPrototype.entries,
    {
      name: 'entries',
    }
  )

  // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
  defineBuiltIn$8(
    URLSearchParamsPrototype,
    'toString',
    function toString() {
      return getInternalParamsState(this).serialize()
    },
    {
      enumerable: true,
    }
  )
  setToStringTag$5(URLSearchParamsConstructor, URL_SEARCH_PARAMS)
  $$k(
    {
      global: true,
      constructor: true,
      forced: !USE_NATIVE_URL$1,
    },
    {
      URLSearchParams: URLSearchParamsConstructor,
    }
  )

  // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
  if (!USE_NATIVE_URL$1 && isCallable$l(Headers)) {
    var headersHas = uncurryThis$n(HeadersPrototype.has)
    var headersSet = uncurryThis$n(HeadersPrototype.set)
    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject$e(init)) {
        var body = init.body
        var headers
        if (classof$9(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers()
          if (!headersHas(headers, 'content-type')) {
            headersSet(
              headers,
              'content-type',
              'application/x-www-form-urlencoded;charset=UTF-8'
            )
          }
          return create(init, {
            body: createPropertyDescriptor$4(0, $toString$1(body)),
            headers: createPropertyDescriptor$4(0, headers),
          })
        }
      }
      return init
    }
    if (isCallable$l(nativeFetch)) {
      $$k(
        {
          global: true,
          enumerable: true,
          dontCallGetSet: true,
          forced: true,
        },
        {
          fetch: function fetch(input /* , init */) {
            return nativeFetch(
              input,
              arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {}
            )
          },
        }
      )
    }
    if (isCallable$l(NativeRequest)) {
      var RequestConstructor = function Request(input /* , init */) {
        anInstance$6(this, RequestPrototype)
        return new NativeRequest(
          input,
          arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {}
        )
      }
      RequestPrototype.constructor = RequestConstructor
      RequestConstructor.prototype = RequestPrototype
      $$k(
        {
          global: true,
          constructor: true,
          dontCallGetSet: true,
          forced: true,
        },
        {
          Request: RequestConstructor,
        }
      )
    }
  }
  module.exports = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState,
  }

  var call$f = require('../internals/function-call')
  var fixRegExpWellKnownSymbolLogic$1 = require('../internals/fix-regexp-well-known-symbol-logic')
  var anObject$d = require('../internals/an-object')
  var isNullOrUndefined$8 = require('../internals/is-null-or-undefined')
  var requireObjectCoercible$5 = require('../internals/require-object-coercible')
  var sameValue = require('../internals/same-value')
  var toString$7 = require('../internals/to-string')
  var getMethod$5 = require('../internals/get-method')
  var regExpExec$1 = require('../internals/regexp-exec-abstract')

  // @@search logic
  fixRegExpWellKnownSymbolLogic$1(
    'search',
    function (SEARCH, nativeSearch, maybeCallNative) {
      return [
        // `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = requireObjectCoercible$5(this)
          var searcher = isNullOrUndefined$8(regexp)
            ? undefined
            : getMethod$5(regexp, SEARCH)
          return searcher
            ? call$f(searcher, regexp, O)
            : new RegExp(regexp)[SEARCH](toString$7(O))
        },
        // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function (string) {
          var rx = anObject$d(this)
          var S = toString$7(string)
          var res = maybeCallNative(nativeSearch, rx, S)
          if (res.done) return res.value
          var previousLastIndex = rx.lastIndex
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0
          var result = regExpExec$1(rx, S)
          if (!sameValue(rx.lastIndex, previousLastIndex))
            rx.lastIndex = previousLastIndex
          return result === null ? -1 : result.index
        },
      ]
    }
  )

  require('../modules/es.string.iterator')
  var $$j = require('../internals/export')
  var DESCRIPTORS$9 = require('../internals/descriptors')
  var USE_NATIVE_URL = require('../internals/url-constructor-detection')
  var global$l = require('../internals/global')
  var bind$5 = require('../internals/function-bind-context')
  var uncurryThis$m = require('../internals/function-uncurry-this')
  var defineBuiltIn$7 = require('../internals/define-built-in')
  var defineBuiltInAccessor$4 = require('../internals/define-built-in-accessor')
  var anInstance$5 = require('../internals/an-instance')
  var hasOwn$b = require('../internals/has-own-property')
  var assign$1 = require('../internals/object-assign')
  var arrayFrom = require('../internals/array-from')
  var arraySlice$4 = require('../internals/array-slice-simple')
  var codeAt = require('../internals/string-multibyte').codeAt
  var toASCII = require('../internals/string-punycode-to-ascii')
  var $toString = require('../internals/to-string')
  var setToStringTag$4 = require('../internals/set-to-string-tag')
  var validateArgumentsLength$2 = require('../internals/validate-arguments-length')
  var URLSearchParamsModule = require('../modules/web.url-search-params.constructor')
  var InternalStateModule$4 = require('../internals/internal-state')
  var setInternalState$3 = InternalStateModule$4.set
  var getInternalURLState = InternalStateModule$4.getterFor('URL')
  var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams
  var getInternalSearchParamsState = URLSearchParamsModule.getState
  var NativeURL = global$l.URL
  var TypeError$3 = global$l.TypeError
  var parseInt = global$l.parseInt
  var floor$1 = Math.floor
  var pow = Math.pow
  var charAt = uncurryThis$m(''.charAt)
  var exec$1 = uncurryThis$m(/./.exec)
  var join$1 = uncurryThis$m([].join)
  var numberToString = uncurryThis$m((1.0).toString)
  var pop = uncurryThis$m([].pop)
  var push$1 = uncurryThis$m([].push)
  var replace$2 = uncurryThis$m(''.replace)
  var shift = uncurryThis$m([].shift)
  var split$1 = uncurryThis$m(''.split)
  var stringSlice$3 = uncurryThis$m(''.slice)
  var toLowerCase = uncurryThis$m(''.toLowerCase)
  var unshift = uncurryThis$m([].unshift)
  var INVALID_AUTHORITY = 'Invalid authority'
  var INVALID_SCHEME = 'Invalid scheme'
  var INVALID_HOST = 'Invalid host'
  var INVALID_PORT = 'Invalid port'
  var ALPHA = /[a-z]/i
  // eslint-disable-next-line regexp/no-obscure-range -- safe
  var ALPHANUMERIC = /[\d+-.a-z]/i
  var DIGIT = /\d/
  var HEX_START = /^0x/i
  var OCT = /^[0-7]+$/
  var DEC = /^\d+$/
  var HEX = /^[\da-f]+$/i
  /* eslint-disable regexp/no-control-character -- safe */
  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/
  var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/
  var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/
  var TAB_AND_NEW_LINE = /[\t\n\r]/g
  /* eslint-enable regexp/no-control-character -- safe */
  var EOF

  // https://url.spec.whatwg.org/#ipv4-number-parser
  var parseIPv4 = function parseIPv4(input) {
    var parts = split$1(input, '.')
    var partsLength, numbers, index, part, radix, number, ipv4
    if (parts.length && parts[parts.length - 1] == '') {
      parts.length--
    }
    partsLength = parts.length
    if (partsLength > 4) return input
    numbers = []
    for (index = 0; index < partsLength; index++) {
      part = parts[index]
      if (part == '') return input
      radix = 10
      if (part.length > 1 && charAt(part, 0) == '0') {
        radix = exec$1(HEX_START, part) ? 16 : 8
        part = stringSlice$3(part, radix == 8 ? 1 : 2)
      }
      if (part === '') {
        number = 0
      } else {
        if (!exec$1(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part))
          return input
        number = parseInt(part, radix)
      }
      push$1(numbers, number)
    }
    for (index = 0; index < partsLength; index++) {
      number = numbers[index]
      if (index == partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null
      } else if (number > 255) return null
    }
    ipv4 = pop(numbers)
    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index)
    }
    return ipv4
  }

  // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO
  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0]
    var pieceIndex = 0
    var compress = null
    var pointer = 0
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap
    var chr = function chr() {
      return charAt(input, pointer)
    }
    if (chr() == ':') {
      if (charAt(input, 1) != ':') return
      pointer += 2
      pieceIndex++
      compress = pieceIndex
    }
    while (chr()) {
      if (pieceIndex == 8) return
      if (chr() == ':') {
        if (compress !== null) return
        pointer++
        pieceIndex++
        compress = pieceIndex
        continue
      }
      value = length = 0
      while (length < 4 && exec$1(HEX, chr())) {
        value = value * 16 + parseInt(chr(), 16)
        pointer++
        length++
      }
      if (chr() == '.') {
        if (length == 0) return
        pointer -= length
        if (pieceIndex > 6) return
        numbersSeen = 0
        while (chr()) {
          ipv4Piece = null
          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++
            else return
          }
          if (!exec$1(DIGIT, chr())) return
          while (exec$1(DIGIT, chr())) {
            number = parseInt(chr(), 10)
            if (ipv4Piece === null) ipv4Piece = number
            else if (ipv4Piece == 0) return
            else ipv4Piece = ipv4Piece * 10 + number
            if (ipv4Piece > 255) return
            pointer++
          }
          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece
          numbersSeen++
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++
        }
        if (numbersSeen != 4) return
        break
      } else if (chr() == ':') {
        pointer++
        if (!chr()) return
      } else if (chr()) return
      address[pieceIndex++] = value
    }
    if (compress !== null) {
      swaps = pieceIndex - compress
      pieceIndex = 7
      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex]
        address[pieceIndex--] = address[compress + swaps - 1]
        address[compress + --swaps] = swap
      }
    } else if (pieceIndex != 8) return
    return address
  }
  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null
    var maxLength = 1
    var currStart = null
    var currLength = 0
    var index = 0
    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart
          maxLength = currLength
        }
        currStart = null
        currLength = 0
      } else {
        if (currStart === null) currStart = index
        ++currLength
      }
    }
    if (currLength > maxLength) {
      maxIndex = currStart
      maxLength = currLength
    }
    return maxIndex
  }

  // https://url.spec.whatwg.org/#host-serializing
  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0
    // ipv4
    if (typeof host == 'number') {
      result = []
      for (index = 0; index < 4; index++) {
        unshift(result, host % 256)
        host = floor$1(host / 256)
      }
      return join$1(result, '.')
      // ipv6
    } else if (typeof host == 'object') {
      result = ''
      compress = findLongestZeroSequence(host)
      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue
        if (ignore0) ignore0 = false
        if (compress === index) {
          result += index ? ':' : '::'
          ignore0 = true
        } else {
          result += numberToString(host[index], 16)
          if (index < 7) result += ':'
        }
      }
      return '[' + result + ']'
    }
    return host
  }
  var C0ControlPercentEncodeSet = {}
  var fragmentPercentEncodeSet = assign$1({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1,
  })
  var pathPercentEncodeSet = assign$1({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1,
  })
  var userinfoPercentEncodeSet = assign$1({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1,
  })
  var percentEncode = function percentEncode(chr, set) {
    var code = codeAt(chr, 0)
    return code > 0x20 && code < 0x7f && !hasOwn$b(set, chr)
      ? chr
      : encodeURIComponent(chr)
  }

  // https://url.spec.whatwg.org/#special-scheme
  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443,
  }

  // https://url.spec.whatwg.org/#windows-drive-letter
  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second
    return (
      string.length == 2 &&
      exec$1(ALPHA, charAt(string, 0)) &&
      ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'))
    )
  }

  // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(
    string
  ) {
    var third
    return (
      string.length > 1 &&
      isWindowsDriveLetter(stringSlice$3(string, 0, 2)) &&
      (string.length == 2 ||
        (third = charAt(string, 2)) === '/' ||
        third === '\\' ||
        third === '?' ||
        third === '#')
    )
  }

  // https://url.spec.whatwg.org/#single-dot-path-segment
  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e'
  }

  // https://url.spec.whatwg.org/#double-dot-path-segment
  var isDoubleDot = function isDoubleDot(segment) {
    segment = toLowerCase(segment)
    return (
      segment === '..' ||
      segment === '%2e.' ||
      segment === '.%2e' ||
      segment === '%2e%2e'
    )
  }

  // States:
  var SCHEME_START = {}
  var SCHEME = {}
  var NO_SCHEME = {}
  var SPECIAL_RELATIVE_OR_AUTHORITY = {}
  var PATH_OR_AUTHORITY = {}
  var RELATIVE = {}
  var RELATIVE_SLASH = {}
  var SPECIAL_AUTHORITY_SLASHES = {}
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {}
  var AUTHORITY = {}
  var HOST = {}
  var HOSTNAME = {}
  var PORT = {}
  var FILE = {}
  var FILE_SLASH = {}
  var FILE_HOST = {}
  var PATH_START = {}
  var PATH = {}
  var CANNOT_BE_A_BASE_URL_PATH = {}
  var QUERY = {}
  var FRAGMENT = {}
  var URLState = function URLState(url, isBase, base) {
    var urlString = $toString(url)
    var baseState, failure, searchParams
    if (isBase) {
      failure = this.parse(urlString)
      if (failure) throw TypeError$3(failure)
      this.searchParams = null
    } else {
      if (base !== undefined) baseState = new URLState(base, true)
      failure = this.parse(urlString, null, baseState)
      if (failure) throw TypeError$3(failure)
      searchParams = getInternalSearchParamsState(new URLSearchParams$1())
      searchParams.bindURL(this)
      this.searchParams = searchParams
    }
  }
  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function parse(input, stateOverride, base) {
      var url = this
      var state = stateOverride || SCHEME_START
      var pointer = 0
      var buffer = ''
      var seenAt = false
      var seenBracket = false
      var seenPasswordToken = false
      var codePoints, chr, bufferCodePoints, failure
      input = $toString(input)
      if (!stateOverride) {
        url.scheme = ''
        url.username = ''
        url.password = ''
        url.host = null
        url.port = null
        url.path = []
        url.query = null
        url.fragment = null
        url.cannotBeABaseURL = false
        input = replace$2(input, LEADING_C0_CONTROL_OR_SPACE, '')
        input = replace$2(input, TRAILING_C0_CONTROL_OR_SPACE, '$1')
      }
      input = replace$2(input, TAB_AND_NEW_LINE, '')
      codePoints = arrayFrom(input)
      while (pointer <= codePoints.length) {
        chr = codePoints[pointer]
        switch (state) {
          case SCHEME_START:
            if (chr && exec$1(ALPHA, chr)) {
              buffer += toLowerCase(chr)
              state = SCHEME
            } else if (!stateOverride) {
              state = NO_SCHEME
              continue
            } else return INVALID_SCHEME
            break
          case SCHEME:
            if (
              chr &&
              (exec$1(ALPHANUMERIC, chr) ||
                chr == '+' ||
                chr == '-' ||
                chr == '.')
            ) {
              buffer += toLowerCase(chr)
            } else if (chr == ':') {
              if (
                stateOverride &&
                (url.isSpecial() != hasOwn$b(specialSchemes, buffer) ||
                  (buffer == 'file' &&
                    (url.includesCredentials() || url.port !== null)) ||
                  (url.scheme == 'file' && !url.host))
              )
                return
              url.scheme = buffer
              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] == url.port)
                  url.port = null
                return
              }
              buffer = ''
              if (url.scheme == 'file') {
                state = FILE
              } else if (url.isSpecial() && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY
                pointer++
              } else {
                url.cannotBeABaseURL = true
                push$1(url.path, '')
                state = CANNOT_BE_A_BASE_URL_PATH
              }
            } else if (!stateOverride) {
              buffer = ''
              state = NO_SCHEME
              pointer = 0
              continue
            } else return INVALID_SCHEME
            break
          case NO_SCHEME:
            if (!base || (base.cannotBeABaseURL && chr != '#'))
              return INVALID_SCHEME
            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme
              url.path = arraySlice$4(base.path)
              url.query = base.query
              url.fragment = ''
              url.cannotBeABaseURL = true
              state = FRAGMENT
              break
            }
            state = base.scheme == 'file' ? FILE : RELATIVE
            continue
          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES
              pointer++
            } else {
              state = RELATIVE
              continue
            }
            break
          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY
              break
            } else {
              state = PATH
              continue
            }
          case RELATIVE:
            url.scheme = base.scheme
            if (chr == EOF) {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = arraySlice$4(base.path)
              url.query = base.query
            } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
              state = RELATIVE_SLASH
            } else if (chr == '?') {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = arraySlice$4(base.path)
              url.query = ''
              state = QUERY
            } else if (chr == '#') {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = arraySlice$4(base.path)
              url.query = base.query
              url.fragment = ''
              state = FRAGMENT
            } else {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              url.path = arraySlice$4(base.path)
              url.path.length--
              state = PATH
              continue
            }
            break
          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES
            } else if (chr == '/') {
              state = AUTHORITY
            } else {
              url.username = base.username
              url.password = base.password
              url.host = base.host
              url.port = base.port
              state = PATH
              continue
            }
            break
          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES
            if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue
            pointer++
            break
          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY
              continue
            }
            break
          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer
              seenAt = true
              bufferCodePoints = arrayFrom(buffer)
              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i]
                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true
                  continue
                }
                var encodedCodePoints = percentEncode(
                  codePoint,
                  userinfoPercentEncodeSet
                )
                if (seenPasswordToken) url.password += encodedCodePoints
                else url.username += encodedCodePoints
              }
              buffer = ''
            } else if (
              chr == EOF ||
              chr == '/' ||
              chr == '?' ||
              chr == '#' ||
              (chr == '\\' && url.isSpecial())
            ) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY
              pointer -= arrayFrom(buffer).length + 1
              buffer = ''
              state = HOST
            } else buffer += chr
            break
          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST
              continue
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST
              failure = url.parseHost(buffer)
              if (failure) return failure
              buffer = ''
              state = PORT
              if (stateOverride == HOSTNAME) return
            } else if (
              chr == EOF ||
              chr == '/' ||
              chr == '?' ||
              chr == '#' ||
              (chr == '\\' && url.isSpecial())
            ) {
              if (url.isSpecial() && buffer == '') return INVALID_HOST
              if (
                stateOverride &&
                buffer == '' &&
                (url.includesCredentials() || url.port !== null)
              )
                return
              failure = url.parseHost(buffer)
              if (failure) return failure
              buffer = ''
              state = PATH_START
              if (stateOverride) return
              continue
            } else {
              if (chr == '[') seenBracket = true
              else if (chr == ']') seenBracket = false
              buffer += chr
            }
            break
          case PORT:
            if (exec$1(DIGIT, chr)) {
              buffer += chr
            } else if (
              chr == EOF ||
              chr == '/' ||
              chr == '?' ||
              chr == '#' ||
              (chr == '\\' && url.isSpecial()) ||
              stateOverride
            ) {
              if (buffer != '') {
                var port = parseInt(buffer, 10)
                if (port > 0xffff) return INVALID_PORT
                url.port =
                  url.isSpecial() && port === specialSchemes[url.scheme]
                    ? null
                    : port
                buffer = ''
              }
              if (stateOverride) return
              state = PATH_START
              continue
            } else return INVALID_PORT
            break
          case FILE:
            url.scheme = 'file'
            if (chr == '/' || chr == '\\') state = FILE_SLASH
            else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host
                url.path = arraySlice$4(base.path)
                url.query = base.query
              } else if (chr == '?') {
                url.host = base.host
                url.path = arraySlice$4(base.path)
                url.query = ''
                state = QUERY
              } else if (chr == '#') {
                url.host = base.host
                url.path = arraySlice$4(base.path)
                url.query = base.query
                url.fragment = ''
                state = FRAGMENT
              } else {
                if (
                  !startsWithWindowsDriveLetter(
                    join$1(arraySlice$4(codePoints, pointer), '')
                  )
                ) {
                  url.host = base.host
                  url.path = arraySlice$4(base.path)
                  url.shortenPath()
                }
                state = PATH
                continue
              }
            } else {
              state = PATH
              continue
            }
            break
          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST
              break
            }
            if (
              base &&
              base.scheme == 'file' &&
              !startsWithWindowsDriveLetter(
                join$1(arraySlice$4(codePoints, pointer), '')
              )
            ) {
              if (isWindowsDriveLetter(base.path[0], true))
                push$1(url.path, base.path[0])
              else url.host = base.host
            }
            state = PATH
            continue
          case FILE_HOST:
            if (
              chr == EOF ||
              chr == '/' ||
              chr == '\\' ||
              chr == '?' ||
              chr == '#'
            ) {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH
              } else if (buffer == '') {
                url.host = ''
                if (stateOverride) return
                state = PATH_START
              } else {
                failure = url.parseHost(buffer)
                if (failure) return failure
                if (url.host == 'localhost') url.host = ''
                if (stateOverride) return
                buffer = ''
                state = PATH_START
              }
              continue
            } else buffer += chr
            break
          case PATH_START:
            if (url.isSpecial()) {
              state = PATH
              if (chr != '/' && chr != '\\') continue
            } else if (!stateOverride && chr == '?') {
              url.query = ''
              state = QUERY
            } else if (!stateOverride && chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              state = PATH
              if (chr != '/') continue
            }
            break
          case PATH:
            if (
              chr == EOF ||
              chr == '/' ||
              (chr == '\\' && url.isSpecial()) ||
              (!stateOverride && (chr == '?' || chr == '#'))
            ) {
              if (isDoubleDot(buffer)) {
                url.shortenPath()
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push$1(url.path, '')
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push$1(url.path, '')
                }
              } else {
                if (
                  url.scheme == 'file' &&
                  !url.path.length &&
                  isWindowsDriveLetter(buffer)
                ) {
                  if (url.host) url.host = ''
                  buffer = charAt(buffer, 0) + ':' // normalize windows drive letter
                }

                push$1(url.path, buffer)
              }
              buffer = ''
              if (
                url.scheme == 'file' &&
                (chr == EOF || chr == '?' || chr == '#')
              ) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path)
                }
              }
              if (chr == '?') {
                url.query = ''
                state = QUERY
              } else if (chr == '#') {
                url.fragment = ''
                state = FRAGMENT
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet)
            }
            break
          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = ''
              state = QUERY
            } else if (chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet)
            }
            break
          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = ''
              state = FRAGMENT
            } else if (chr != EOF) {
              if (chr == "'" && url.isSpecial()) url.query += '%27'
              else if (chr == '#') url.query += '%23'
              else url.query += percentEncode(chr, C0ControlPercentEncodeSet)
            }
            break
          case FRAGMENT:
            if (chr != EOF)
              url.fragment += percentEncode(chr, fragmentPercentEncodeSet)
            break
        }
        pointer++
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function parseHost(input) {
      var result, codePoints, index
      if (charAt(input, 0) == '[') {
        if (charAt(input, input.length - 1) != ']') return INVALID_HOST
        result = parseIPv6(stringSlice$3(input, 1, -1))
        if (!result) return INVALID_HOST
        this.host = result
        // opaque host
      } else if (!this.isSpecial()) {
        if (exec$1(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input))
          return INVALID_HOST
        result = ''
        codePoints = arrayFrom(input)
        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet)
        }
        this.host = result
      } else {
        input = toASCII(input)
        if (exec$1(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST
        result = parseIPv4(input)
        if (result === null) return INVALID_HOST
        this.host = result
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
      return !this.host || this.cannotBeABaseURL || this.scheme == 'file'
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function includesCredentials() {
      return this.username != '' || this.password != ''
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function isSpecial() {
      return hasOwn$b(specialSchemes, this.scheme)
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function shortenPath() {
      var path = this.path
      var pathSize = path.length
      if (
        pathSize &&
        (this.scheme != 'file' ||
          pathSize != 1 ||
          !isWindowsDriveLetter(path[0], true))
      ) {
        path.length--
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function serialize() {
      var url = this
      var scheme = url.scheme
      var username = url.username
      var password = url.password
      var host = url.host
      var port = url.port
      var path = url.path
      var query = url.query
      var fragment = url.fragment
      var output = scheme + ':'
      if (host !== null) {
        output += '//'
        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@'
        }
        output += serializeHost(host)
        if (port !== null) output += ':' + port
      } else if (scheme == 'file') output += '//'
      output += url.cannotBeABaseURL
        ? path[0]
        : path.length
        ? '/' + join$1(path, '/')
        : ''
      if (query !== null) output += '?' + query
      if (fragment !== null) output += '#' + fragment
      return output
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function setHref(href) {
      var failure = this.parse(href)
      if (failure) throw TypeError$3(failure)
      this.searchParams.update()
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function getOrigin() {
      var scheme = this.scheme
      var port = this.port
      if (scheme == 'blob')
        try {
          return new URLConstructor(scheme.path[0]).origin
        } catch (error) {
          return 'null'
        }
      if (scheme == 'file' || !this.isSpecial()) return 'null'
      return (
        scheme +
        '://' +
        serializeHost(this.host) +
        (port !== null ? ':' + port : '')
      )
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function getProtocol() {
      return this.scheme + ':'
    },
    setProtocol: function setProtocol(protocol) {
      this.parse($toString(protocol) + ':', SCHEME_START)
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function getUsername() {
      return this.username
    },
    setUsername: function setUsername(username) {
      var codePoints = arrayFrom($toString(username))
      if (this.cannotHaveUsernamePasswordPort()) return
      this.username = ''
      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet)
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function getPassword() {
      return this.password
    },
    setPassword: function setPassword(password) {
      var codePoints = arrayFrom($toString(password))
      if (this.cannotHaveUsernamePasswordPort()) return
      this.password = ''
      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet)
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function getHost() {
      var host = this.host
      var port = this.port
      return host === null
        ? ''
        : port === null
        ? serializeHost(host)
        : serializeHost(host) + ':' + port
    },
    setHost: function setHost(host) {
      if (this.cannotBeABaseURL) return
      this.parse(host, HOST)
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function getHostname() {
      var host = this.host
      return host === null ? '' : serializeHost(host)
    },
    setHostname: function setHostname(hostname) {
      if (this.cannotBeABaseURL) return
      this.parse(hostname, HOSTNAME)
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function getPort() {
      var port = this.port
      return port === null ? '' : $toString(port)
    },
    setPort: function setPort(port) {
      if (this.cannotHaveUsernamePasswordPort()) return
      port = $toString(port)
      if (port == '') this.port = null
      else this.parse(port, PORT)
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function getPathname() {
      var path = this.path
      return this.cannotBeABaseURL
        ? path[0]
        : path.length
        ? '/' + join$1(path, '/')
        : ''
    },
    setPathname: function setPathname(pathname) {
      if (this.cannotBeABaseURL) return
      this.path = []
      this.parse(pathname, PATH_START)
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function getSearch() {
      var query = this.query
      return query ? '?' + query : ''
    },
    setSearch: function setSearch(search) {
      search = $toString(search)
      if (search == '') {
        this.query = null
      } else {
        if ('?' == charAt(search, 0)) search = stringSlice$3(search, 1)
        this.query = ''
        this.parse(search, QUERY)
      }
      this.searchParams.update()
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function getSearchParams() {
      return this.searchParams.facade
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function getHash() {
      var fragment = this.fragment
      return fragment ? '#' + fragment : ''
    },
    setHash: function setHash(hash) {
      hash = $toString(hash)
      if (hash == '') {
        this.fragment = null
        return
      }
      if ('#' == charAt(hash, 0)) hash = stringSlice$3(hash, 1)
      this.fragment = ''
      this.parse(hash, FRAGMENT)
    },
    update: function update() {
      this.query = this.searchParams.serialize() || null
    },
  }

  // `URL` constructor
  // https://url.spec.whatwg.org/#url-class
  var URLConstructor = function URL(url /* , base */) {
    var that = anInstance$5(this, URLPrototype)
    var base =
      validateArgumentsLength$2(arguments.length, 1) > 1
        ? arguments[1]
        : undefined
    var state = setInternalState$3(that, new URLState(url, false, base))
    if (!DESCRIPTORS$9) {
      that.href = state.serialize()
      that.origin = state.getOrigin()
      that.protocol = state.getProtocol()
      that.username = state.getUsername()
      that.password = state.getPassword()
      that.host = state.getHost()
      that.hostname = state.getHostname()
      that.port = state.getPort()
      that.pathname = state.getPathname()
      that.search = state.getSearch()
      that.searchParams = state.getSearchParams()
      that.hash = state.getHash()
    }
  }
  var URLPrototype = URLConstructor.prototype
  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: function get() {
        return getInternalURLState(this)[getter]()
      },
      set:
        setter &&
        function (value) {
          return getInternalURLState(this)[setter](value)
        },
      configurable: true,
      enumerable: true,
    }
  }
  if (DESCRIPTORS$9) {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    defineBuiltInAccessor$4(
      URLPrototype,
      'href',
      accessorDescriptor('serialize', 'setHref')
    )
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    defineBuiltInAccessor$4(
      URLPrototype,
      'origin',
      accessorDescriptor('getOrigin')
    )
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    defineBuiltInAccessor$4(
      URLPrototype,
      'protocol',
      accessorDescriptor('getProtocol', 'setProtocol')
    )
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    defineBuiltInAccessor$4(
      URLPrototype,
      'username',
      accessorDescriptor('getUsername', 'setUsername')
    )
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    defineBuiltInAccessor$4(
      URLPrototype,
      'password',
      accessorDescriptor('getPassword', 'setPassword')
    )
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    defineBuiltInAccessor$4(
      URLPrototype,
      'host',
      accessorDescriptor('getHost', 'setHost')
    )
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    defineBuiltInAccessor$4(
      URLPrototype,
      'hostname',
      accessorDescriptor('getHostname', 'setHostname')
    )
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    defineBuiltInAccessor$4(
      URLPrototype,
      'port',
      accessorDescriptor('getPort', 'setPort')
    )
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    defineBuiltInAccessor$4(
      URLPrototype,
      'pathname',
      accessorDescriptor('getPathname', 'setPathname')
    )
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    defineBuiltInAccessor$4(
      URLPrototype,
      'search',
      accessorDescriptor('getSearch', 'setSearch')
    )
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    defineBuiltInAccessor$4(
      URLPrototype,
      'searchParams',
      accessorDescriptor('getSearchParams')
    )
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    defineBuiltInAccessor$4(
      URLPrototype,
      'hash',
      accessorDescriptor('getHash', 'setHash')
    )
  }

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  defineBuiltIn$7(
    URLPrototype,
    'toJSON',
    function toJSON() {
      return getInternalURLState(this).serialize()
    },
    {
      enumerable: true,
    }
  )

  // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior
  defineBuiltIn$7(
    URLPrototype,
    'toString',
    function toString() {
      return getInternalURLState(this).serialize()
    },
    {
      enumerable: true,
    }
  )
  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL
    // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
    if (nativeCreateObjectURL)
      defineBuiltIn$7(
        URLConstructor,
        'createObjectURL',
        bind$5(nativeCreateObjectURL, NativeURL)
      )
    // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
    if (nativeRevokeObjectURL)
      defineBuiltIn$7(
        URLConstructor,
        'revokeObjectURL',
        bind$5(nativeRevokeObjectURL, NativeURL)
      )
  }
  setToStringTag$4(URLConstructor, 'URL')
  $$j(
    {
      global: true,
      constructor: true,
      forced: !USE_NATIVE_URL,
      sham: !DESCRIPTORS$9,
    },
    {
      URL: URLConstructor,
    }
  )

  var reactExports = {}
  var react = {
    get exports() {
      return reactExports
    },
    set exports(v) {
      reactExports = v
    },
  }

  // `Symbol.prototype.description` getter
  var $$i = require('../internals/export')
  var DESCRIPTORS$8 = require('../internals/descriptors')
  var global$k = require('../internals/global')
  var uncurryThis$l = require('../internals/function-uncurry-this')
  var hasOwn$a = require('../internals/has-own-property')
  var isCallable$k = require('../internals/is-callable')
  var isPrototypeOf$3 = require('../internals/object-is-prototype-of')
  var toString$6 = require('../internals/to-string')
  var defineBuiltInAccessor$3 = require('../internals/define-built-in-accessor')
  var copyConstructorProperties$2 = require('../internals/copy-constructor-properties')
  var NativeSymbol = global$k.Symbol
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype
  if (
    DESCRIPTORS$8 &&
    isCallable$k(NativeSymbol) &&
    (!('description' in SymbolPrototype) ||
      // Safari 12 bug
      NativeSymbol().description !== undefined)
  ) {
    var EmptyStringDescriptionStore = {}
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description =
        arguments.length < 1 || arguments[0] === undefined
          ? undefined
          : toString$6(arguments[0])
      var result = isPrototypeOf$3(SymbolPrototype, this)
        ? new NativeSymbol(description)
        : // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        description === undefined
        ? NativeSymbol()
        : NativeSymbol(description)
      if (description === '') EmptyStringDescriptionStore[result] = true
      return result
    }
    copyConstructorProperties$2(SymbolWrapper, NativeSymbol)
    SymbolWrapper.prototype = SymbolPrototype
    SymbolPrototype.constructor = SymbolWrapper
    var NATIVE_SYMBOL$2 = String(NativeSymbol('test')) == 'Symbol(test)'
    var thisSymbolValue = uncurryThis$l(SymbolPrototype.valueOf)
    var symbolDescriptiveString = uncurryThis$l(SymbolPrototype.toString)
    var regexp = /^Symbol\((.*)\)[^)]+$/
    var replace$1 = uncurryThis$l(''.replace)
    var stringSlice$2 = uncurryThis$l(''.slice)
    defineBuiltInAccessor$3(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = thisSymbolValue(this)
        if (hasOwn$a(EmptyStringDescriptionStore, symbol)) return ''
        var string = symbolDescriptiveString(symbol)
        var desc = NATIVE_SYMBOL$2
          ? stringSlice$2(string, 7, -1)
          : replace$1(string, regexp, '$1')
        return desc === '' ? undefined : desc
      },
    })
    $$i(
      {
        global: true,
        constructor: true,
        forced: true,
      },
      {
        Symbol: SymbolWrapper,
      }
    )
  }

  var $$h = require('../internals/export')
  var assign = require('../internals/object-assign')

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$h(
    {
      target: 'Object',
      stat: true,
      arity: 2,
      forced: Object.assign !== assign,
    },
    {
      assign: assign,
    }
  )

  var call$e = require('../internals/function-call')
  var fixRegExpWellKnownSymbolLogic = require('../internals/fix-regexp-well-known-symbol-logic')
  var anObject$c = require('../internals/an-object')
  var isNullOrUndefined$7 = require('../internals/is-null-or-undefined')
  var toLength$4 = require('../internals/to-length')
  var toString$5 = require('../internals/to-string')
  var requireObjectCoercible$4 = require('../internals/require-object-coercible')
  var getMethod$4 = require('../internals/get-method')
  var advanceStringIndex = require('../internals/advance-string-index')
  var regExpExec = require('../internals/regexp-exec-abstract')

  // @@match logic
  fixRegExpWellKnownSymbolLogic(
    'match',
    function (MATCH, nativeMatch, maybeCallNative) {
      return [
        // `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = requireObjectCoercible$4(this)
          var matcher = isNullOrUndefined$7(regexp)
            ? undefined
            : getMethod$4(regexp, MATCH)
          return matcher
            ? call$e(matcher, regexp, O)
            : new RegExp(regexp)[MATCH](toString$5(O))
        },
        // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (string) {
          var rx = anObject$c(this)
          var S = toString$5(string)
          var res = maybeCallNative(nativeMatch, rx, S)
          if (res.done) return res.value
          if (!rx.global) return regExpExec(rx, S)
          var fullUnicode = rx.unicode
          rx.lastIndex = 0
          var A = []
          var n = 0
          var result
          while ((result = regExpExec(rx, S)) !== null) {
            var matchStr = toString$5(result[0])
            A[n] = matchStr
            if (matchStr === '')
              rx.lastIndex = advanceStringIndex(
                S,
                toLength$4(rx.lastIndex),
                fullUnicode
              )
            n++
          }
          return n === 0 ? null : A
        },
      ]
    }
  )

  var $$g = require('../internals/export')
  var $trim = require('../internals/string-trim').trim
  var forcedStringTrimMethod = require('../internals/string-trim-forced')

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$g(
    {
      target: 'String',
      proto: true,
      forced: forcedStringTrimMethod('trim'),
    },
    {
      trim: function trim() {
        return $trim(this)
      },
    }
  )

  var fails$j = function (exec) {
    try {
      return !!exec()
    } catch (error) {
      return true
    }
  }

  var fails$i = fails$j
  var freezing = !fails$i(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}))
  })

  var objectGetOwnPropertyDescriptor = {}

  var fails$h = fails$j

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$h(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return (
      Object.defineProperty({}, 1, {
        get: function get() {
          return 7
        },
      })[1] != 7
    )
  })

  var fails$g = fails$j
  var functionBindNative = !fails$g(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {
      /* empty */
    }.bind()
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype')
  })

  var NATIVE_BIND$3 = functionBindNative
  var call$d = Function.prototype.call
  var functionCall = NATIVE_BIND$3
    ? call$d.bind(call$d)
    : function () {
        return call$d.apply(call$d, arguments)
      }

  var objectPropertyIsEnumerable = {}

  var $propertyIsEnumerable = {}.propertyIsEnumerable
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG =
    getOwnPropertyDescriptor$2 &&
    !$propertyIsEnumerable.call(
      {
        1: 2,
      },
      1
    )

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG
    ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor$2(this, V)
        return !!descriptor && descriptor.enumerable
      }
    : $propertyIsEnumerable

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value,
    }
  }

  var uncurryThis$k = require('../internals/function-uncurry-this')
  var fails$f = require('../internals/fails')
  var classof$8 = require('../internals/classof-raw')
  var $Object$4 = Object
  var split = uncurryThis$k(''.split)

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  module.exports = fails$f(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$4('z').propertyIsEnumerable(0)
  })
    ? function (it) {
        return classof$8(it) == 'String' ? split(it, '') : $Object$4(it)
      }
    : $Object$4

  var indexedObject = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$0$3 = /*@__PURE__*/ getAugmentedNamespace(indexedObject)

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined
  }

  var isNullOrUndefined$5 = isNullOrUndefined$6
  var $TypeError$d = TypeError

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$3 = function (it) {
    if (isNullOrUndefined$5(it))
      throw $TypeError$d("Can't call method on " + it)
    return it
  }

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = require$$0$3
  var requireObjectCoercible$2 = requireObjectCoercible$3
  var toIndexedObject$4 = function (it) {
    return IndexedObject(requireObjectCoercible$2(it))
  }

  var documentAll$2 = typeof document == 'object' && document.all

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA =
    typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined
  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA,
  }

  var $documentAll$1 = documentAll_1
  var documentAll$1 = $documentAll$1.all

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$j = $documentAll$1.IS_HTMLDDA
    ? function (argument) {
        return typeof argument == 'function' || argument === documentAll$1
      }
    : function (argument) {
        return typeof argument == 'function'
      }

  var isCallable$i = isCallable$j
  var $documentAll = documentAll_1
  var documentAll = $documentAll.all
  var isObject$d = $documentAll.IS_HTMLDDA
    ? function (it) {
        return typeof it == 'object'
          ? it !== null
          : isCallable$i(it) || it === documentAll
      }
    : function (it) {
        return typeof it == 'object' ? it !== null : isCallable$i(it)
      }

  var global$j = require$$3$2
  var isCallable$h = isCallable$j
  var aFunction = function aFunction(argument) {
    return isCallable$h(argument) ? argument : undefined
  }
  var getBuiltIn$8 = function (namespace, method) {
    return arguments.length < 2
      ? aFunction(global$j[namespace])
      : global$j[namespace] && global$j[namespace][method]
  }

  var NATIVE_BIND$2 = functionBindNative
  var FunctionPrototype$1 = Function.prototype
  var call$c = FunctionPrototype$1.call
  var uncurryThisWithBind =
    NATIVE_BIND$2 && FunctionPrototype$1.bind.bind(call$c, call$c)
  var functionUncurryThis = NATIVE_BIND$2
    ? uncurryThisWithBind
    : function (fn) {
        return function () {
          return call$c.apply(fn, arguments)
        }
      }

  var uncurryThis$j = functionUncurryThis
  var objectIsPrototypeOf = uncurryThis$j({}.isPrototypeOf)

  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$1 = require('../internals/symbol-constructor-detection')
  module.exports =
    NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol'

  var useSymbolAsUid = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$5$2 = /*@__PURE__*/ getAugmentedNamespace(useSymbolAsUid)

  var getBuiltIn$7 = getBuiltIn$8
  var isCallable$g = isCallable$j
  var isPrototypeOf$2 = objectIsPrototypeOf
  var USE_SYMBOL_AS_UID$1 = require$$5$2
  var $Object$3 = Object
  var isSymbol$2 = USE_SYMBOL_AS_UID$1
    ? function (it) {
        return typeof it == 'symbol'
      }
    : function (it) {
        var $Symbol = getBuiltIn$7('Symbol')
        return (
          isCallable$g($Symbol) &&
          isPrototypeOf$2($Symbol.prototype, $Object$3(it))
        )
      }

  var $String$4 = String
  var tryToString$4 = function (argument) {
    try {
      return $String$4(argument)
    } catch (error) {
      return 'Object'
    }
  }

  var isCallable$f = isCallable$j
  var tryToString$3 = tryToString$4
  var $TypeError$c = TypeError

  // `Assert: IsCallable(argument) is true`
  var aCallable$8 = function (argument) {
    if (isCallable$f(argument)) return argument
    throw $TypeError$c(tryToString$3(argument) + ' is not a function')
  }

  var aCallable$7 = aCallable$8
  var isNullOrUndefined$4 = isNullOrUndefined$6

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$3 = function (V, P) {
    var func = V[P]
    return isNullOrUndefined$4(func) ? undefined : aCallable$7(func)
  }

  var call$b = require('../internals/function-call')
  var isCallable$e = require('../internals/is-callable')
  var isObject$c = require('../internals/is-object')
  var $TypeError$b = TypeError

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  module.exports = function (input, pref) {
    var fn, val
    if (
      pref === 'string' &&
      isCallable$e((fn = input.toString)) &&
      !isObject$c((val = call$b(fn, input)))
    )
      return val
    if (
      isCallable$e((fn = input.valueOf)) &&
      !isObject$c((val = call$b(fn, input)))
    )
      return val
    if (
      pref !== 'string' &&
      isCallable$e((fn = input.toString)) &&
      !isObject$c((val = call$b(fn, input)))
    )
      return val
    throw $TypeError$b("Can't convert object to primitive value")
  }

  var ordinaryToPrimitive$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$4$2 = /*@__PURE__*/ getAugmentedNamespace(ordinaryToPrimitive$1)

  var sharedExports = {}
  var shared$3 = {
    get exports() {
      return sharedExports
    },
    set exports(v) {
      sharedExports = v
    },
  }

  var global$i = require$$3$2

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty
  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$4(global$i, key, {
        value: value,
        configurable: true,
        writable: true,
      })
    } catch (error) {
      global$i[key] = value
    }
    return value
  }

  var global$h = require$$3$2
  var defineGlobalProperty$2 = defineGlobalProperty$3
  var SHARED = '__core-js_shared__'
  var store$2 = global$h[SHARED] || defineGlobalProperty$2(SHARED, {})
  var sharedStore = store$2

  var store$1 = sharedStore
  ;(shared$3.exports = function (key, value) {
    return store$1[key] || (store$1[key] = value !== undefined ? value : {})
  })('versions', []).push({
    version: '3.28.0',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE',
    source: 'https://github.com/zloirock/core-js',
  })

  var requireObjectCoercible$1 = requireObjectCoercible$3
  var $Object$2 = Object

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return $Object$2(requireObjectCoercible$1(argument))
  }

  var uncurryThis$i = functionUncurryThis
  var toObject = toObject$1
  var hasOwnProperty = uncurryThis$i({}.hasOwnProperty)

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 =
    Object.hasOwn ||
    function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key)
    }

  var uncurryThis$h = functionUncurryThis
  var id$2 = 0
  var postfix = Math.random()
  var toString$4 = uncurryThis$h((1.0).toString)
  var uid$3 = function (key) {
    return (
      'Symbol(' +
      (key === undefined ? '' : key) +
      ')_' +
      toString$4(++id$2 + postfix, 36)
    )
  }

  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$1 = require('../internals/engine-v8-version')
  var fails$e = require('../internals/fails')

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  module.exports =
    !!Object.getOwnPropertySymbols &&
    !fails$e(function () {
      var symbol = Symbol()
      // Chrome 38 Symbol has incorrect toString conversion
      // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
      return (
        !String(symbol) ||
        !(Object(symbol) instanceof Symbol) ||
        // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        (!Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41)
      )
    })

  var symbolConstructorDetection = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$4$1 = /*@__PURE__*/ getAugmentedNamespace(
    symbolConstructorDetection
  )

  var global$g = require$$3$2
  var shared$2 = sharedExports
  var hasOwn$9 = hasOwnProperty_1
  var uid$2 = uid$3
  var NATIVE_SYMBOL = require$$4$1
  var USE_SYMBOL_AS_UID = require$$5$2
  var Symbol$1 = global$g.Symbol
  var WellKnownSymbolsStore = shared$2('wks')
  var createWellKnownSymbol = USE_SYMBOL_AS_UID
    ? Symbol$1['for'] || Symbol$1
    : (Symbol$1 && Symbol$1.withoutSetter) || uid$2
  var wellKnownSymbol$c = function (name) {
    if (!hasOwn$9(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] =
        NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)
          ? Symbol$1[name]
          : createWellKnownSymbol('Symbol.' + name)
    }
    return WellKnownSymbolsStore[name]
  }

  var call$a = functionCall
  var isObject$b = isObject$d
  var isSymbol$1 = isSymbol$2
  var getMethod$2 = getMethod$3
  var ordinaryToPrimitive = require$$4$2
  var wellKnownSymbol$b = wellKnownSymbol$c
  var $TypeError$a = TypeError
  var TO_PRIMITIVE = wellKnownSymbol$b('toPrimitive')

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$b(input) || isSymbol$1(input)) return input
    var exoticToPrim = getMethod$2(input, TO_PRIMITIVE)
    var result
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default'
      result = call$a(exoticToPrim, input, pref)
      if (!isObject$b(result) || isSymbol$1(result)) return result
      throw $TypeError$a("Can't convert object to primitive value")
    }
    if (pref === undefined) pref = 'number'
    return ordinaryToPrimitive(input, pref)
  }

  var toPrimitive = toPrimitive$1
  var isSymbol = isSymbol$2

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string')
    return isSymbol(key) ? key : key + ''
  }

  var global$f = require$$3$2
  var isObject$a = isObject$d
  var document$3 = global$f.document
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$a(document$3) && isObject$a(document$3.createElement)
  var documentCreateElement = function (it) {
    return EXISTS ? document$3.createElement(it) : {}
  }

  var DESCRIPTORS$7 = descriptors
  var fails$d = fails$j
  var createElement$1 = documentCreateElement

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine =
    !DESCRIPTORS$7 &&
    !fails$d(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return (
        Object.defineProperty(createElement$1('div'), 'a', {
          get: function get() {
            return 7
          },
        }).a != 7
      )
    })

  var DESCRIPTORS$6 = descriptors
  var call$9 = functionCall
  var propertyIsEnumerableModule = objectPropertyIsEnumerable
  var createPropertyDescriptor$2 = createPropertyDescriptor$3
  var toIndexedObject$3 = toIndexedObject$4
  var toPropertyKey$2 = toPropertyKey$3
  var hasOwn$8 = hasOwnProperty_1
  var IE8_DOM_DEFINE$1 = ie8DomDefine

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6
    ? $getOwnPropertyDescriptor$1
    : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject$3(O)
        P = toPropertyKey$2(P)
        if (IE8_DOM_DEFINE$1)
          try {
            return $getOwnPropertyDescriptor$1(O, P)
          } catch (error) {
            /* empty */
          }
        if (hasOwn$8(O, P))
          return createPropertyDescriptor$2(
            !call$9(propertyIsEnumerableModule.f, O, P),
            O[P]
          )
      }

  var objectDefineProperty = {}

  var DESCRIPTORS$5 = descriptors
  var fails$c = fails$j

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug =
    DESCRIPTORS$5 &&
    fails$c(function () {
      // eslint-disable-next-line es/no-object-defineproperty -- required for testing
      return (
        Object.defineProperty(
          function () {
            /* empty */
          },
          'prototype',
          {
            value: 42,
            writable: false,
          }
        ).prototype != 42
      )
    })

  var isObject$9 = isObject$d
  var $String$3 = String
  var $TypeError$9 = TypeError

  // `Assert: Type(argument) is Object`
  var anObject$b = function (argument) {
    if (isObject$9(argument)) return argument
    throw $TypeError$9($String$3(argument) + ' is not an object')
  }

  var DESCRIPTORS$4 = descriptors
  var IE8_DOM_DEFINE = ie8DomDefine
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug
  var anObject$a = anObject$b
  var toPropertyKey$1 = toPropertyKey$3
  var $TypeError$8 = TypeError
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  var ENUMERABLE = 'enumerable'
  var CONFIGURABLE = 'configurable'
  var WRITABLE = 'writable'

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$4
    ? V8_PROTOTYPE_DEFINE_BUG
      ? function defineProperty(O, P, Attributes) {
          anObject$a(O)
          P = toPropertyKey$1(P)
          anObject$a(Attributes)
          if (
            typeof O === 'function' &&
            P === 'prototype' &&
            'value' in Attributes &&
            WRITABLE in Attributes &&
            !Attributes[WRITABLE]
          ) {
            var current = $getOwnPropertyDescriptor(O, P)
            if (current && current[WRITABLE]) {
              O[P] = Attributes.value
              Attributes = {
                configurable:
                  CONFIGURABLE in Attributes
                    ? Attributes[CONFIGURABLE]
                    : current[CONFIGURABLE],
                enumerable:
                  ENUMERABLE in Attributes
                    ? Attributes[ENUMERABLE]
                    : current[ENUMERABLE],
                writable: false,
              }
            }
          }
          return $defineProperty(O, P, Attributes)
        }
      : $defineProperty
    : function defineProperty(O, P, Attributes) {
        anObject$a(O)
        P = toPropertyKey$1(P)
        anObject$a(Attributes)
        if (IE8_DOM_DEFINE)
          try {
            return $defineProperty(O, P, Attributes)
          } catch (error) {
            /* empty */
          }
        if ('get' in Attributes || 'set' in Attributes)
          throw $TypeError$8('Accessors not supported')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }

  var DESCRIPTORS$3 = descriptors
  var definePropertyModule$3 = objectDefineProperty
  var createPropertyDescriptor$1 = createPropertyDescriptor$3
  var createNonEnumerableProperty$3 = DESCRIPTORS$3
    ? function (object, key, value) {
        return definePropertyModule$3.f(
          object,
          key,
          createPropertyDescriptor$1(1, value)
        )
      }
    : function (object, key, value) {
        object[key] = value
        return object
      }

  var uncurryThis$g = require('../internals/function-uncurry-this')
  var fails$b = require('../internals/fails')
  var isCallable$d = require('../internals/is-callable')
  var hasOwn$7 = require('../internals/has-own-property')
  var DESCRIPTORS$2 = require('../internals/descriptors')
  var CONFIGURABLE_FUNCTION_NAME$1 =
    require('../internals/function-name').CONFIGURABLE
  var inspectSource$2 = require('../internals/inspect-source')
  var InternalStateModule$3 = require('../internals/internal-state')
  var enforceInternalState$1 = InternalStateModule$3.enforce
  var getInternalState = InternalStateModule$3.get
  var $String$2 = String
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$3 = Object.defineProperty
  var stringSlice$1 = uncurryThis$g(''.slice)
  var replace = uncurryThis$g(''.replace)
  var join = uncurryThis$g([].join)
  var CONFIGURABLE_LENGTH =
    DESCRIPTORS$2 &&
    !fails$b(function () {
      return (
        defineProperty$3(
          function () {
            /* empty */
          },
          'length',
          {
            value: 8,
          }
        ).length !== 8
      )
    })
  var TEMPLATE = String(String).split('String')
  var makeBuiltIn$2 = (module.exports = function (value, name, options) {
    if (stringSlice$1($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']'
    }
    if (options && options.getter) name = 'get ' + name
    if (options && options.setter) name = 'set ' + name
    if (
      !hasOwn$7(value, 'name') ||
      (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)
    ) {
      if (DESCRIPTORS$2)
        defineProperty$3(value, 'name', {
          value: name,
          configurable: true,
        })
      else value.name = name
    }
    if (
      CONFIGURABLE_LENGTH &&
      options &&
      hasOwn$7(options, 'arity') &&
      value.length !== options.arity
    ) {
      defineProperty$3(value, 'length', {
        value: options.arity,
      })
    }
    try {
      if (options && hasOwn$7(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$2)
          defineProperty$3(value, 'prototype', {
            writable: false,
          })
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined
    } catch (error) {
      /* empty */
    }
    var state = enforceInternalState$1(value)
    if (!hasOwn$7(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '')
    }
    return value
  })

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return (
      (isCallable$d(this) && getInternalState(this).source) ||
      inspectSource$2(this)
    )
  }, 'toString')

  var makeBuiltIn$3 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$0$2 = /*@__PURE__*/ getAugmentedNamespace(makeBuiltIn$3)

  var isCallable$c = isCallable$j
  var definePropertyModule$2 = objectDefineProperty
  var makeBuiltIn$1 = require$$0$2
  var defineGlobalProperty$1 = defineGlobalProperty$3
  var defineBuiltIn$6 = function (O, key, value, options) {
    if (!options) options = {}
    var simple = options.enumerable
    var name = options.name !== undefined ? options.name : key
    if (isCallable$c(value)) makeBuiltIn$1(value, name, options)
    if (options.global) {
      if (simple) O[key] = value
      else defineGlobalProperty$1(key, value)
    } else {
      try {
        if (!options.unsafe) delete O[key]
        else if (O[key]) simple = true
      } catch (error) {
        /* empty */
      }
      if (simple) O[key] = value
      else
        definePropertyModule$2.f(O, key, {
          value: value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable,
        })
    }
    return O
  }

  var objectGetOwnPropertyNames = {}

  var ceil = Math.ceil
  var floor = Math.floor

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc =
    Math.trunc ||
    function trunc(x) {
      var n = +x
      return (n > 0 ? floor : ceil)(n)
    }

  var trunc = mathTrunc

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$3 = function (argument) {
    var number = +argument
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number)
  }

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$3
  var max$1 = Math.max
  var min$1 = Math.min

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$2(index)
    return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length)
  }

  var toIntegerOrInfinity$1 = toIntegerOrInfinity$3
  var min = Math.min

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$3 = function (argument) {
    return argument > 0
      ? min(toIntegerOrInfinity$1(argument), 0x1fffffffffffff)
      : 0 // 2 ** 53 - 1 == 9007199254740991
  }

  var toLength$2 = toLength$3

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$3 = function (obj) {
    return toLength$2(obj.length)
  }

  var toIndexedObject$2 = toIndexedObject$4
  var toAbsoluteIndex$2 = toAbsoluteIndex$3
  var lengthOfArrayLike$2 = lengthOfArrayLike$3

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$2($this)
      var length = lengthOfArrayLike$2(O)
      var index = toAbsoluteIndex$2(fromIndex, length)
      var value
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++]
          // eslint-disable-next-line no-self-compare -- NaN check
          if (value != value) return true
          // Array#indexOf ignores holes, Array#includes - not
        }
      else
        for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el)
            return IS_INCLUDES || index || 0
        }
      return !IS_INCLUDES && -1
    }
  }
  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false),
  }

  var hiddenKeys$4 = {}

  var uncurryThis$f = functionUncurryThis
  var hasOwn$6 = hasOwnProperty_1
  var toIndexedObject$1 = toIndexedObject$4
  var indexOf = arrayIncludes.indexOf
  var hiddenKeys$3 = hiddenKeys$4
  var push = uncurryThis$f([].push)
  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$1(object)
    var i = 0
    var result = []
    var key
    for (key in O)
      !hasOwn$6(hiddenKeys$3, key) && hasOwn$6(O, key) && push(result, key)
    // Don't enum bug & hidden keys
    while (names.length > i)
      if (hasOwn$6(O, (key = names[i++]))) {
        ~indexOf(result, key) || push(result, key)
      }
    return result
  }

  // IE8- don't enum bug keys
  var enumBugKeys$1 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ]

  var internalObjectKeys = objectKeysInternal
  var enumBugKeys = enumBugKeys$1
  var hiddenKeys$2 = enumBugKeys.concat('length', 'prototype')

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f =
    Object.getOwnPropertyNames ||
    function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys$2)
    }

  var objectGetOwnPropertySymbols = {}

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols

  var getBuiltIn$6 = getBuiltIn$8
  var uncurryThis$e = functionUncurryThis
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols
  var anObject$9 = anObject$b
  var concat = uncurryThis$e([].concat)

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 =
    getBuiltIn$6('Reflect', 'ownKeys') ||
    function ownKeys(it) {
      var keys = getOwnPropertyNamesModule$1.f(anObject$9(it))
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f
      return getOwnPropertySymbols
        ? concat(keys, getOwnPropertySymbols(it))
        : keys
    }

  var hasOwn$5 = hasOwnProperty_1
  var ownKeys = ownKeys$1
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor
  var definePropertyModule$1 = objectDefineProperty
  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source)
    var defineProperty = definePropertyModule$1.f
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      if (
        !hasOwn$5(target, key) &&
        !(exceptions && hasOwn$5(exceptions, key))
      ) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key))
      }
    }
  }

  var fails$a = require('../internals/fails')
  var isCallable$b = require('../internals/is-callable')
  var replacement = /#|\.prototype\./
  var isForced$3 = function isForced(feature, detection) {
    var value = data[normalize(feature)]
    return value == POLYFILL
      ? true
      : value == NATIVE
      ? false
      : isCallable$b(detection)
      ? fails$a(detection)
      : !!detection
  }
  var normalize = (isForced$3.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase()
  })
  var data = (isForced$3.data = {})
  var NATIVE = (isForced$3.NATIVE = 'N')
  var POLYFILL = (isForced$3.POLYFILL = 'P')
  module.exports = isForced$3

  var isForced$4 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$6$2 = /*@__PURE__*/ getAugmentedNamespace(isForced$4)

  var global$e = require$$3$2
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$3
  var defineBuiltIn$5 = defineBuiltIn$6
  var defineGlobalProperty = defineGlobalProperty$3
  var copyConstructorProperties = copyConstructorProperties$1
  var isForced$2 = require$$6$2

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target
    var GLOBAL = options.global
    var STATIC = options.stat
    var FORCED, target, key, targetProperty, sourceProperty, descriptor
    if (GLOBAL) {
      target = global$e
    } else if (STATIC) {
      target = global$e[TARGET] || defineGlobalProperty(TARGET, {})
    } else {
      target = (global$e[TARGET] || {}).prototype
    }
    if (target)
      for (key in source) {
        sourceProperty = source[key]
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor$1(target, key)
          targetProperty = descriptor && descriptor.value
        } else targetProperty = target[key]
        FORCED = isForced$2(
          GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
          options.forced
        )
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty == typeof targetProperty) continue
          copyConstructorProperties(sourceProperty, targetProperty)
        }
        // add a flag to not completely full polyfills
        if (options.sham || (targetProperty && targetProperty.sham)) {
          createNonEnumerableProperty$2(sourceProperty, 'sham', true)
        }
        defineBuiltIn$5(target, key, sourceProperty, options)
      }
  }

  var $$f = _export
  var global$d = require$$3$2

  // `globalThis` object
  // https://tc39.es/ecma262/#sec-globalthis
  $$f(
    {
      global: true,
      forced: global$d.globalThis !== global$d,
    },
    {
      globalThis: global$d,
    }
  )

  var check = function check(it) {
    return it && it.Math == Math && it
  }

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  module.exports =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof global == 'object' && global) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () {
      return this
    })() ||
    Function('return this')()

  var global$c = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$3$2 = /*@__PURE__*/ getAugmentedNamespace(global$c)

  var defineBuiltIn$4 = defineBuiltIn$6
  var defineBuiltIns$3 = function (target, src, options) {
    for (var key in src) defineBuiltIn$4(target, key, src[key], options)
    return target
  }

  var internalMetadataExports = {}
  var internalMetadata = {
    get exports() {
      return internalMetadataExports
    },
    set exports(v) {
      internalMetadataExports = v
    },
  }

  var objectGetOwnPropertyNamesExternal = {}

  var uncurryThis$d = functionUncurryThis
  var toString$3 = uncurryThis$d({}.toString)
  var stringSlice = uncurryThis$d(''.slice)
  var classofRaw$2 = function (it) {
    return stringSlice(toString$3(it), 8, -1)
  }

  var toPropertyKey = toPropertyKey$3
  var definePropertyModule = objectDefineProperty
  var createPropertyDescriptor = createPropertyDescriptor$3
  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPropertyKey(key)
    if (propertyKey in object)
      definePropertyModule.f(
        object,
        propertyKey,
        createPropertyDescriptor(0, value)
      )
    else object[propertyKey] = value
  }

  var toAbsoluteIndex$1 = toAbsoluteIndex$3
  var lengthOfArrayLike$1 = lengthOfArrayLike$3
  var createProperty = createProperty$1
  var $Array = Array
  var max = Math.max
  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$1(O)
    var k = toAbsoluteIndex$1(start, length)
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length)
    var result = $Array(max(fin - k, 0))
    for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k])
    result.length = n
    return result
  }

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var classof$7 = classofRaw$2
  var toIndexedObject = toIndexedObject$4
  var $getOwnPropertyNames = objectGetOwnPropertyNames.f
  var arraySlice$3 = arraySliceSimple
  var windowNames =
    typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : []
  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames(it)
    } catch (error) {
      return arraySlice$3(windowNames)
    }
  }

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$7(it) == 'Window'
      ? getWindowNames(it)
      : $getOwnPropertyNames(toIndexedObject(it))
  }

  var $$e = require('../internals/export')
  var uncurryThis$c = require('../internals/function-uncurry-this')
  var isArray$1 = require('../internals/is-array')
  var nativeReverse = uncurryThis$c([].reverse)
  var test$1 = [1, 2]

  // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$e(
    {
      target: 'Array',
      proto: true,
      forced: String(test$1) === String(test$1.reverse()),
    },
    {
      reverse: function reverse() {
        // eslint-disable-next-line no-self-assign -- dirty hack
        if (isArray$1(this)) this.length = this.length
        return nativeReverse(this)
      },
    }
  )

  var global$b = require('../internals/global')
  var uncurryThis$b = require('../internals/function-uncurry-this')
  var DESCRIPTORS$1 = require('../internals/descriptors')
  var NATIVE_ARRAY_BUFFER = require('../internals/array-buffer-basic-detection')
  var FunctionName = require('../internals/function-name')
  var createNonEnumerableProperty$1 = require('../internals/create-non-enumerable-property')
  var defineBuiltInAccessor$2 = require('../internals/define-built-in-accessor')
  var defineBuiltIns$2 = require('../internals/define-built-ins')
  var fails$9 = require('../internals/fails')
  var anInstance$4 = require('../internals/an-instance')
  var toIntegerOrInfinity = require('../internals/to-integer-or-infinity')
  var toLength$1 = require('../internals/to-length')
  var toIndex = require('../internals/to-index')
  var IEEE754 = require('../internals/ieee754')
  var getPrototypeOf = require('../internals/object-get-prototype-of')
  var setPrototypeOf$1 = require('../internals/object-set-prototype-of')
  var getOwnPropertyNames =
    require('../internals/object-get-own-property-names').f
  var arrayFill = require('../internals/array-fill')
  var arraySlice$2 = require('../internals/array-slice-simple')
  var setToStringTag$3 = require('../internals/set-to-string-tag')
  var InternalStateModule$2 = require('../internals/internal-state')
  var PROPER_FUNCTION_NAME = FunctionName.PROPER
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE
  var ARRAY_BUFFER$1 = 'ArrayBuffer'
  var DATA_VIEW = 'DataView'
  var PROTOTYPE = 'prototype'
  var WRONG_LENGTH = 'Wrong length'
  var WRONG_INDEX = 'Wrong index'
  var getInternalArrayBufferState =
    InternalStateModule$2.getterFor(ARRAY_BUFFER$1)
  var getInternalDataViewState = InternalStateModule$2.getterFor(DATA_VIEW)
  var setInternalState$2 = InternalStateModule$2.set
  var NativeArrayBuffer$1 = global$b[ARRAY_BUFFER$1]
  var $ArrayBuffer = NativeArrayBuffer$1
  var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE]
  var $DataView = global$b[DATA_VIEW]
  var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE]
  var ObjectPrototype = Object.prototype
  var Array$1 = global$b.Array
  var RangeError = global$b.RangeError
  var fill = uncurryThis$b(arrayFill)
  var reverse = uncurryThis$b([].reverse)
  var packIEEE754 = IEEE754.pack
  var unpackIEEE754 = IEEE754.unpack
  var packInt8 = function packInt8(number) {
    return [number & 0xff]
  }
  var packInt16 = function packInt16(number) {
    return [number & 0xff, (number >> 8) & 0xff]
  }
  var packInt32 = function packInt32(number) {
    return [
      number & 0xff,
      (number >> 8) & 0xff,
      (number >> 16) & 0xff,
      (number >> 24) & 0xff,
    ]
  }
  var unpackInt32 = function unpackInt32(buffer) {
    return (buffer[3] << 24) | (buffer[2] << 16) | (buffer[1] << 8) | buffer[0]
  }
  var packFloat32 = function packFloat32(number) {
    return packIEEE754(number, 23, 4)
  }
  var packFloat64 = function packFloat64(number) {
    return packIEEE754(number, 52, 8)
  }
  var addGetter = function addGetter(Constructor, key, getInternalState) {
    defineBuiltInAccessor$2(Constructor[PROTOTYPE], key, {
      configurable: true,
      get: function get() {
        return getInternalState(this)[key]
      },
    })
  }
  var get$1 = function get(view, count, index, isLittleEndian) {
    var intIndex = toIndex(index)
    var store = getInternalDataViewState(view)
    if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX)
    var bytes = store.bytes
    var start = intIndex + store.byteOffset
    var pack = arraySlice$2(bytes, start, start + count)
    return isLittleEndian ? pack : reverse(pack)
  }
  var set$2 = function set(
    view,
    count,
    index,
    conversion,
    value,
    isLittleEndian
  ) {
    var intIndex = toIndex(index)
    var store = getInternalDataViewState(view)
    if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX)
    var bytes = store.bytes
    var start = intIndex + store.byteOffset
    var pack = conversion(+value)
    for (var i = 0; i < count; i++)
      bytes[start + i] = pack[isLittleEndian ? i : count - i - 1]
  }
  if (!NATIVE_ARRAY_BUFFER) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance$4(this, ArrayBufferPrototype)
      var byteLength = toIndex(length)
      setInternalState$2(this, {
        type: ARRAY_BUFFER$1,
        bytes: fill(Array$1(byteLength), 0),
        byteLength: byteLength,
      })
      if (!DESCRIPTORS$1) {
        this.byteLength = byteLength
        this.detached = false
      }
    }
    ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE]
    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance$4(this, DataViewPrototype$1)
      anInstance$4(buffer, ArrayBufferPrototype)
      var bufferState = getInternalArrayBufferState(buffer)
      var bufferLength = bufferState.byteLength
      var offset = toIntegerOrInfinity(byteOffset)
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset')
      byteLength =
        byteLength === undefined
          ? bufferLength - offset
          : toLength$1(byteLength)
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH)
      setInternalState$2(this, {
        type: DATA_VIEW,
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset,
        bytes: bufferState.bytes,
      })
      if (!DESCRIPTORS$1) {
        this.buffer = buffer
        this.byteLength = byteLength
        this.byteOffset = offset
      }
    }
    DataViewPrototype$1 = $DataView[PROTOTYPE]
    if (DESCRIPTORS$1) {
      addGetter($ArrayBuffer, 'byteLength', getInternalArrayBufferState)
      addGetter($DataView, 'buffer', getInternalDataViewState)
      addGetter($DataView, 'byteLength', getInternalDataViewState)
      addGetter($DataView, 'byteOffset', getInternalDataViewState)
    }
    defineBuiltIns$2(DataViewPrototype$1, {
      getInt8: function getInt8(byteOffset) {
        return (get$1(this, 1, byteOffset)[0] << 24) >> 24
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0]
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get$1(
          this,
          2,
          byteOffset,
          arguments.length > 1 ? arguments[1] : undefined
        )
        return (((bytes[1] << 8) | bytes[0]) << 16) >> 16
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get$1(
          this,
          2,
          byteOffset,
          arguments.length > 1 ? arguments[1] : undefined
        )
        return (bytes[1] << 8) | bytes[0]
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(
          get$1(
            this,
            4,
            byteOffset,
            arguments.length > 1 ? arguments[1] : undefined
          )
        )
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return (
          unpackInt32(
            get$1(
              this,
              4,
              byteOffset,
              arguments.length > 1 ? arguments[1] : undefined
            )
          ) >>> 0
        )
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(
          get$1(
            this,
            4,
            byteOffset,
            arguments.length > 1 ? arguments[1] : undefined
          ),
          23
        )
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(
          get$1(
            this,
            8,
            byteOffset,
            arguments.length > 1 ? arguments[1] : undefined
          ),
          52
        )
      },
      setInt8: function setInt8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value)
      },
      setUint8: function setUint8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value)
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          2,
          byteOffset,
          packInt16,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          2,
          byteOffset,
          packInt16,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          4,
          byteOffset,
          packInt32,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          4,
          byteOffset,
          packInt32,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          4,
          byteOffset,
          packFloat32,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set$2(
          this,
          8,
          byteOffset,
          packFloat64,
          value,
          arguments.length > 2 ? arguments[2] : undefined
        )
      },
    })
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME =
      PROPER_FUNCTION_NAME && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1
    /* eslint-disable no-new -- required for testing */
    if (
      !fails$9(function () {
        NativeArrayBuffer$1(1)
      }) ||
      !fails$9(function () {
        new NativeArrayBuffer$1(-1)
      }) ||
      fails$9(function () {
        new NativeArrayBuffer$1()
        new NativeArrayBuffer$1(1.5)
        new NativeArrayBuffer$1(NaN)
        return (
          NativeArrayBuffer$1.length != 1 ||
          (INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME)
        )
      })
    ) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance$4(this, ArrayBufferPrototype)
        return new NativeArrayBuffer$1(toIndex(length))
      }
      $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype
      for (
        var keys$1 = getOwnPropertyNames(NativeArrayBuffer$1), j = 0, key;
        keys$1.length > j;

      ) {
        if (!((key = keys$1[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty$1(
            $ArrayBuffer,
            key,
            NativeArrayBuffer$1[key]
          )
        }
      }
      ArrayBufferPrototype.constructor = $ArrayBuffer
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1)
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (
      setPrototypeOf$1 &&
      getPrototypeOf(DataViewPrototype$1) !== ObjectPrototype
    ) {
      setPrototypeOf$1(DataViewPrototype$1, ObjectPrototype)
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2))
    var $setInt8 = uncurryThis$b(DataViewPrototype$1.setInt8)
    testView.setInt8(0, 2147483648)
    testView.setInt8(1, 2147483649)
    if (testView.getInt8(0) || !testView.getInt8(1))
      defineBuiltIns$2(
        DataViewPrototype$1,
        {
          setInt8: function setInt8(byteOffset, value) {
            $setInt8(this, byteOffset, (value << 24) >> 24)
          },
          setUint8: function setUint8(byteOffset, value) {
            $setInt8(this, byteOffset, (value << 24) >> 24)
          },
        },
        {
          unsafe: true,
        }
      )
  }
  setToStringTag$3($ArrayBuffer, ARRAY_BUFFER$1)
  setToStringTag$3($DataView, DATA_VIEW)
  module.exports = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView,
  }

  var arrayBuffer = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$3$1 = /*@__PURE__*/ getAugmentedNamespace(arrayBuffer)

  var makeBuiltIn = require$$0$2
  var defineProperty$2 = objectDefineProperty
  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get)
      makeBuiltIn(descriptor.get, name, {
        getter: true,
      })
    if (descriptor.set)
      makeBuiltIn(descriptor.set, name, {
        setter: true,
      })
    return defineProperty$2.f(target, name, descriptor)
  }

  var getBuiltIn$5 = getBuiltIn$8
  var defineBuiltInAccessor = defineBuiltInAccessor$1
  var wellKnownSymbol$a = wellKnownSymbol$c
  var DESCRIPTORS = descriptors
  var SPECIES$2 = wellKnownSymbol$a('species')
  var setSpecies$2 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$5(CONSTRUCTOR_NAME)
    if (DESCRIPTORS && Constructor && !Constructor[SPECIES$2]) {
      defineBuiltInAccessor(Constructor, SPECIES$2, {
        configurable: true,
        get: function get() {
          return this
        },
      })
    }
  }

  var $$d = _export
  var global$a = require$$3$2
  var arrayBufferModule = require$$3$1
  var setSpecies$1 = setSpecies$2
  var ARRAY_BUFFER = 'ArrayBuffer'
  var ArrayBuffer$2 = arrayBufferModule[ARRAY_BUFFER]
  var NativeArrayBuffer = global$a[ARRAY_BUFFER]

  // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor
  $$d(
    {
      global: true,
      constructor: true,
      forced: NativeArrayBuffer !== ArrayBuffer$2,
    },
    {
      ArrayBuffer: ArrayBuffer$2,
    }
  )
  setSpecies$1(ARRAY_BUFFER)

  var classofRaw$1 = classofRaw$2
  var uncurryThis$a = functionUncurryThis
  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThis$a(fn)
  }

  var uncurryThis$9 = require('../internals/function-uncurry-this')
  var fails$8 = require('../internals/fails')
  var isCallable$a = require('../internals/is-callable')
  var classof$6 = require('../internals/classof')
  var getBuiltIn$4 = require('../internals/get-built-in')
  var inspectSource$1 = require('../internals/inspect-source')
  var noop = function noop() {
    /* empty */
  }
  var empty = []
  var construct = getBuiltIn$4('Reflect', 'construct')
  var constructorRegExp = /^\s*(?:class|function)\b/
  var exec = uncurryThis$9(constructorRegExp.exec)
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop)
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$a(argument)) return false
    try {
      construct(noop, empty, argument)
      return true
    } catch (error) {
      return false
    }
  }
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$a(argument)) return false
    switch (classof$6(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return (
        INCORRECT_TO_STRING ||
        !!exec(constructorRegExp, inspectSource$1(argument))
      )
    } catch (error) {
      return true
    }
  }
  isConstructorLegacy.sham = true

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  module.exports =
    !construct ||
    fails$8(function () {
      var called
      return (
        isConstructorModern(isConstructorModern.call) ||
        !isConstructorModern(Object) ||
        !isConstructorModern(function () {
          called = true
        }) ||
        called
      )
    })
      ? isConstructorLegacy
      : isConstructorModern

  var isConstructor$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$0$1 = /*@__PURE__*/ getAugmentedNamespace(isConstructor$1)

  var isConstructor = require$$0$1
  var tryToString$2 = tryToString$4
  var $TypeError$7 = TypeError

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument
    throw $TypeError$7(tryToString$2(argument) + ' is not a constructor')
  }

  var anObject$8 = anObject$b
  var aConstructor = aConstructor$1
  var isNullOrUndefined$3 = isNullOrUndefined$6
  var wellKnownSymbol$9 = wellKnownSymbol$c
  var SPECIES$1 = wellKnownSymbol$9('species')

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$3 = function (O, defaultConstructor) {
    var C = anObject$8(O).constructor
    var S
    return C === undefined ||
      isNullOrUndefined$3((S = anObject$8(C)[SPECIES$1]))
      ? defaultConstructor
      : aConstructor(S)
  }

  var $$c = _export
  var uncurryThis$8 = functionUncurryThisClause
  var fails$7 = fails$j
  var ArrayBufferModule = require$$3$1
  var anObject$7 = anObject$b
  var toAbsoluteIndex = toAbsoluteIndex$3
  var toLength = toLength$3
  var speciesConstructor$2 = speciesConstructor$3
  var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer
  var DataView = ArrayBufferModule.DataView
  var DataViewPrototype = DataView.prototype
  var nativeArrayBufferSlice = uncurryThis$8(ArrayBuffer$1.prototype.slice)
  var getUint8 = uncurryThis$8(DataViewPrototype.getUint8)
  var setUint8 = uncurryThis$8(DataViewPrototype.setUint8)
  var INCORRECT_SLICE = fails$7(function () {
    return !new ArrayBuffer$1(2).slice(1, undefined).byteLength
  })

  // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
  $$c(
    {
      target: 'ArrayBuffer',
      proto: true,
      unsafe: true,
      forced: INCORRECT_SLICE,
    },
    {
      slice: function slice(start, end) {
        if (nativeArrayBufferSlice && end === undefined) {
          return nativeArrayBufferSlice(anObject$7(this), start) // FF fix
        }

        var length = anObject$7(this).byteLength
        var first = toAbsoluteIndex(start, length)
        var fin = toAbsoluteIndex(end === undefined ? length : end, length)
        var result = new (speciesConstructor$2(this, ArrayBuffer$1))(
          toLength(fin - first)
        )
        var viewSource = new DataView(this)
        var viewTarget = new DataView(result)
        var index = 0
        while (first < fin) {
          setUint8(viewTarget, index++, getUint8(viewSource, first++))
        }
        return result
      },
    }
  )

  // FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
  var fails$6 = require('../internals/fails')
  module.exports = fails$6(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8)
      // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
      if (Object.isExtensible(buffer))
        Object.defineProperty(buffer, 'a', {
          value: 8,
        })
    }
  })

  var arrayBufferNonExtensible = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$3 = /*@__PURE__*/ getAugmentedNamespace(arrayBufferNonExtensible)

  var fails$5 = fails$j
  var isObject$8 = isObject$d
  var classof$5 = classofRaw$2
  var ARRAY_BUFFER_NON_EXTENSIBLE = require$$3

  // eslint-disable-next-line es/no-object-isextensible -- safe
  var $isExtensible = Object.isExtensible
  var FAILS_ON_PRIMITIVES = fails$5(function () {
    $isExtensible(1)
  })

  // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible
  var objectIsExtensible =
    FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE
      ? function isExtensible(it) {
          if (!isObject$8(it)) return false
          if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$5(it) == 'ArrayBuffer')
            return false
          return $isExtensible ? $isExtensible(it) : true
        }
      : $isExtensible

  var $$b = _export
  var uncurryThis$7 = functionUncurryThis
  var hiddenKeys$1 = hiddenKeys$4
  var isObject$7 = isObject$d
  var hasOwn$4 = hasOwnProperty_1
  var defineProperty$1 = objectDefineProperty.f
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal
  var isExtensible$1 = objectIsExtensible
  var uid$1 = uid$3
  var FREEZING$1 = freezing
  var REQUIRED = false
  var METADATA = uid$1('meta')
  var id$1 = 0
  var setMetadata = function setMetadata(it) {
    defineProperty$1(it, METADATA, {
      value: {
        objectID: 'O' + id$1++,
        // object ID
        weakData: {}, // weak collections IDs
      },
    })
  }

  var fastKey = function fastKey(it, create) {
    // return a primitive with prefix
    if (!isObject$7(it))
      return typeof it == 'symbol'
        ? it
        : (typeof it == 'string' ? 'S' : 'P') + it
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F'
      // not necessary to add metadata
      if (!create) return 'E'
      // add missing metadata
      setMetadata(it)
      // return object ID
    }
    return it[METADATA].objectID
  }
  var getWeakData$1 = function getWeakData(it, create) {
    if (!hasOwn$4(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true
      // not necessary to add metadata
      if (!create) return false
      // add missing metadata
      setMetadata(it)
      // return the store of weak collections IDs
    }
    return it[METADATA].weakData
  }

  // add metadata on freeze-family methods calling
  var onFreeze = function onFreeze(it) {
    if (FREEZING$1 && REQUIRED && isExtensible$1(it) && !hasOwn$4(it, METADATA))
      setMetadata(it)
    return it
  }
  var enable = function enable() {
    meta.enable = function () {
      /* empty */
    }
    REQUIRED = true
    var getOwnPropertyNames = getOwnPropertyNamesModule.f
    var splice = uncurryThis$7([].splice)
    var test = {}
    test[METADATA] = 1

    // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule.f = function (it) {
        var result = getOwnPropertyNames(it)
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1)
            break
          }
        }
        return result
      }
      $$b(
        {
          target: 'Object',
          stat: true,
          forced: true,
        },
        {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f,
        }
      )
    }
  }
  var meta = (internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze,
  })
  hiddenKeys$1[METADATA] = true

  var $$a = require('../internals/export')
  var global$9 = require('../internals/global')
  var uncurryThis$6 = require('../internals/function-uncurry-this')
  var isForced$1 = require('../internals/is-forced')
  var defineBuiltIn$3 = require('../internals/define-built-in')
  var InternalMetadataModule$1 = require('../internals/internal-metadata')
  var iterate$4 = require('../internals/iterate')
  var anInstance$3 = require('../internals/an-instance')
  var isCallable$9 = require('../internals/is-callable')
  var isNullOrUndefined$2 = require('../internals/is-null-or-undefined')
  var isObject$6 = require('../internals/is-object')
  var fails$4 = require('../internals/fails')
  var checkCorrectnessOfIteration$2 = require('../internals/check-correctness-of-iteration')
  var setToStringTag$2 = require('../internals/set-to-string-tag')
  var inheritIfRequired = require('../internals/inherit-if-required')
  module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
    var ADDER = IS_MAP ? 'set' : 'add'
    var NativeConstructor = global$9[CONSTRUCTOR_NAME]
    var NativePrototype = NativeConstructor && NativeConstructor.prototype
    var Constructor = NativeConstructor
    var exported = {}
    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = uncurryThis$6(NativePrototype[KEY])
      defineBuiltIn$3(
        NativePrototype,
        KEY,
        KEY == 'add'
          ? function add(value) {
              uncurriedNativeMethod(this, value === 0 ? 0 : value)
              return this
            }
          : KEY == 'delete'
          ? function (key) {
              return IS_WEAK && !isObject$6(key)
                ? false
                : uncurriedNativeMethod(this, key === 0 ? 0 : key)
            }
          : KEY == 'get'
          ? function get(key) {
              return IS_WEAK && !isObject$6(key)
                ? undefined
                : uncurriedNativeMethod(this, key === 0 ? 0 : key)
            }
          : KEY == 'has'
          ? function has(key) {
              return IS_WEAK && !isObject$6(key)
                ? false
                : uncurriedNativeMethod(this, key === 0 ? 0 : key)
            }
          : function set(key, value) {
              uncurriedNativeMethod(this, key === 0 ? 0 : key, value)
              return this
            }
      )
    }
    var REPLACE = isForced$1(
      CONSTRUCTOR_NAME,
      !isCallable$9(NativeConstructor) ||
        !(
          IS_WEAK ||
          (NativePrototype.forEach &&
            !fails$4(function () {
              new NativeConstructor().entries().next()
            }))
        )
    )
    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(
        wrapper,
        CONSTRUCTOR_NAME,
        IS_MAP,
        ADDER
      )
      InternalMetadataModule$1.enable()
    } else if (isForced$1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor()
      // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$4(function () {
        instance.has(1)
      })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$2(function (iterable) {
        new NativeConstructor(iterable)
      })
      // for early implementations -0 and +0 not the same
      var BUGGY_ZERO =
        !IS_WEAK &&
        fails$4(function () {
          // V8 ~ Chromium 42- fails only with 5+ elements
          var $instance = new NativeConstructor()
          var index = 5
          while (index--) $instance[ADDER](index, index)
          return !$instance.has(-0)
        })
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$3(dummy, NativePrototype)
          var that = inheritIfRequired(
            new NativeConstructor(),
            dummy,
            Constructor
          )
          if (!isNullOrUndefined$2(iterable))
            iterate$4(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP,
            })
          return that
        })
        Constructor.prototype = NativePrototype
        NativePrototype.constructor = Constructor
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete')
        fixMethod('has')
        IS_MAP && fixMethod('get')
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER)

      // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear
    }
    exported[CONSTRUCTOR_NAME] = Constructor
    $$a(
      {
        global: true,
        constructor: true,
        forced: Constructor != NativeConstructor,
      },
      exported
    )
    setToStringTag$2(Constructor, CONSTRUCTOR_NAME)
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP)
    return Constructor
  }

  var collection$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$5$1 = /*@__PURE__*/ getAugmentedNamespace(collection$1)

  var uncurryThis$5 = require('../internals/function-uncurry-this')
  var defineBuiltIns$1 = require('../internals/define-built-ins')
  var getWeakData = require('../internals/internal-metadata').getWeakData
  var anInstance$2 = require('../internals/an-instance')
  var anObject$6 = require('../internals/an-object')
  var isNullOrUndefined$1 = require('../internals/is-null-or-undefined')
  var isObject$5 = require('../internals/is-object')
  var iterate$3 = require('../internals/iterate')
  var ArrayIterationModule = require('../internals/array-iteration')
  var hasOwn$3 = require('../internals/has-own-property')
  var InternalStateModule$1 = require('../internals/internal-state')
  var setInternalState$1 = InternalStateModule$1.set
  var internalStateGetterFor = InternalStateModule$1.getterFor
  var find = ArrayIterationModule.find
  var findIndex = ArrayIterationModule.findIndex
  var splice = uncurryThis$5([].splice)
  var id = 0

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function uncaughtFrozenStore(state) {
    return state.frozen || (state.frozen = new UncaughtFrozenStore())
  }
  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = []
  }
  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find(store.entries, function (it) {
      return it[0] === key
    })
  }
  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key)
      if (entry) return entry[1]
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key)
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key)
      if (entry) entry[1] = value
      else this.entries.push([key, value])
    },
    delete: function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key
      })
      if (~index) splice(this.entries, index, 1)
      return !!~index
    },
  }
  module.exports = {
    getConstructor: function getConstructor(
      wrapper,
      CONSTRUCTOR_NAME,
      IS_MAP,
      ADDER
    ) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$2(that, Prototype)
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined,
        })
        if (!isNullOrUndefined$1(iterable))
          iterate$3(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP,
          })
      })
      var Prototype = Constructor.prototype
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)
      var define = function define(that, key, value) {
        var state = getInternalState(that)
        var data = getWeakData(anObject$6(key), true)
        if (data === true) uncaughtFrozenStore(state).set(key, value)
        else data[state.id] = value
        return that
      }
      defineBuiltIns$1(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        delete: function _delete(key) {
          var state = getInternalState(this)
          if (!isObject$5(key)) return false
          var data = getWeakData(key)
          if (data === true) return uncaughtFrozenStore(state)['delete'](key)
          return data && hasOwn$3(data, state.id) && delete data[state.id]
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this)
          if (!isObject$5(key)) return false
          var data = getWeakData(key)
          if (data === true) return uncaughtFrozenStore(state).has(key)
          return data && hasOwn$3(data, state.id)
        },
      })
      defineBuiltIns$1(
        Prototype,
        IS_MAP
          ? {
              // `WeakMap.prototype.get(key)` method
              // https://tc39.es/ecma262/#sec-weakmap.prototype.get
              get: function get(key) {
                var state = getInternalState(this)
                if (isObject$5(key)) {
                  var data = getWeakData(key)
                  if (data === true) return uncaughtFrozenStore(state).get(key)
                  return data ? data[state.id] : undefined
                }
              },
              // `WeakMap.prototype.set(key, value)` method
              // https://tc39.es/ecma262/#sec-weakmap.prototype.set
              set: function set(key, value) {
                return define(this, key, value)
              },
            }
          : {
              // `WeakSet.prototype.add(value)` method
              // https://tc39.es/ecma262/#sec-weakset.prototype.add
              add: function add(value) {
                return define(this, value, true)
              },
            }
      )
      return Constructor
    },
  }

  var collectionWeak$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$6$1 = /*@__PURE__*/ getAugmentedNamespace(collectionWeak$1)

  require('../modules/es.regexp.exec')
  var $$9 = require('../internals/export')
  var call$8 = require('../internals/function-call')
  var isCallable$8 = require('../internals/is-callable')
  var anObject$5 = require('../internals/an-object')
  var toString$2 = require('../internals/to-string')
  var DELEGATES_TO_EXEC = (function () {
    var execCalled = false
    var re = /[ac]/
    re.exec = function () {
      execCalled = true
      return /./.exec.apply(this, arguments)
    }
    return re.test('abc') === true && execCalled
  })()
  var nativeTest = /./.test

  // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test
  $$9(
    {
      target: 'RegExp',
      proto: true,
      forced: !DELEGATES_TO_EXEC,
    },
    {
      test: function test(S) {
        var R = anObject$5(this)
        var string = toString$2(S)
        var exec = R.exec
        if (!isCallable$8(exec)) return call$8(nativeTest, R, string)
        var result = call$8(exec, R, string)
        if (result === null) return false
        anObject$5(result)
        return true
      },
    }
  )

  var global$8 = require('../internals/global')
  var isCallable$7 = require('../internals/is-callable')
  var WeakMap$2 = global$8.WeakMap
  module.exports =
    isCallable$7(WeakMap$2) && /native code/.test(String(WeakMap$2))

  var weakMapBasicDetection = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$10 = /*@__PURE__*/ getAugmentedNamespace(weakMapBasicDetection)

  var shared$1 = sharedExports
  var uid = uid$3
  var keys = shared$1('keys')
  var sharedKey$1 = function (key) {
    return keys[key] || (keys[key] = uid(key))
  }

  var NATIVE_WEAK_MAP$1 = require$$10
  var global$7 = require$$3$2
  var isObject$4 = isObject$d
  var createNonEnumerableProperty = createNonEnumerableProperty$3
  var hasOwn$2 = hasOwnProperty_1
  var shared = sharedStore
  var sharedKey = sharedKey$1
  var hiddenKeys = hiddenKeys$4
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized'
  var TypeError$2 = global$7.TypeError
  var WeakMap$1 = global$7.WeakMap
  var set$1, get, has
  var enforce = function enforce(it) {
    return has(it) ? get(it) : set$1(it, {})
  }
  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$2('Incompatible receiver, ' + TYPE + ' required')
      }
      return state
    }
  }
  if (NATIVE_WEAK_MAP$1 || shared.state) {
    var store = shared.state || (shared.state = new WeakMap$1())
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get
    store.has = store.has
    store.set = store.set
    /* eslint-enable no-self-assign -- prototype methods protection */
    set$1 = function set(it, metadata) {
      if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED)
      metadata.facade = it
      store.set(it, metadata)
      return metadata
    }
    get = function get(it) {
      return store.get(it) || {}
    }
    has = function has(it) {
      return store.has(it)
    }
  } else {
    var STATE = sharedKey('state')
    hiddenKeys[STATE] = true
    set$1 = function set(it, metadata) {
      if (hasOwn$2(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED)
      metadata.facade = it
      createNonEnumerableProperty(it, STATE, metadata)
      return metadata
    }
    get = function get(it) {
      return hasOwn$2(it, STATE) ? it[STATE] : {}
    }
    has = function has(it) {
      return hasOwn$2(it, STATE)
    }
  }
  var internalState = {
    set: set$1,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor,
  }

  var FREEZING = freezing
  var global$6 = require$$3$2
  var uncurryThis$4 = functionUncurryThis
  var defineBuiltIns = defineBuiltIns$3
  var InternalMetadataModule = internalMetadataExports
  var collection = require$$5$1
  var collectionWeak = require$$6$1
  var isObject$3 = isObject$d
  var enforceInternalState = internalState.enforce
  var fails$3 = fails$j
  var NATIVE_WEAK_MAP = require$$10
  var $Object$1 = Object
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray
  // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible = $Object$1.isExtensible
  // eslint-disable-next-line es/no-object-isfrozen -- safe
  var isFrozen = $Object$1.isFrozen
  // eslint-disable-next-line es/no-object-issealed -- safe
  var isSealed = $Object$1.isSealed
  // eslint-disable-next-line es/no-object-freeze -- safe
  var freeze = $Object$1.freeze
  // eslint-disable-next-line es/no-object-seal -- safe
  var seal = $Object$1.seal
  var FROZEN = {}
  var SEALED = {}
  var IS_IE11 = !global$6.ActiveXObject && 'ActiveXObject' in global$6
  var InternalWeakMap
  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined)
    }
  }

  // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor
  var $WeakMap = collection('WeakMap', wrapper, collectionWeak)
  var WeakMapPrototype = $WeakMap.prototype
  var nativeSet = uncurryThis$4(WeakMapPrototype.set)

  // Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
  var hasMSEdgeFreezingBug = function hasMSEdgeFreezingBug() {
    return (
      FREEZING &&
      fails$3(function () {
        var frozenArray = freeze([])
        nativeSet(new $WeakMap(), frozenArray, 1)
        return !isFrozen(frozenArray)
      })
    )
  }

  // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if (NATIVE_WEAK_MAP)
    if (IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true)
      InternalMetadataModule.enable()
      var nativeDelete = uncurryThis$4(WeakMapPrototype['delete'])
      var nativeHas = uncurryThis$4(WeakMapPrototype.has)
      var nativeGet = uncurryThis$4(WeakMapPrototype.get)
      defineBuiltIns(WeakMapPrototype, {
        delete: function _delete(key) {
          if (isObject$3(key) && !isExtensible(key)) {
            var state = enforceInternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeDelete(this, key) || state.frozen['delete'](key)
          }
          return nativeDelete(this, key)
        },
        has: function has(key) {
          if (isObject$3(key) && !isExtensible(key)) {
            var state = enforceInternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas(this, key) || state.frozen.has(key)
          }
          return nativeHas(this, key)
        },
        get: function get(key) {
          if (isObject$3(key) && !isExtensible(key)) {
            var state = enforceInternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            return nativeHas(this, key)
              ? nativeGet(this, key)
              : state.frozen.get(key)
          }
          return nativeGet(this, key)
        },
        set: function set(key, value) {
          if (isObject$3(key) && !isExtensible(key)) {
            var state = enforceInternalState(this)
            if (!state.frozen) state.frozen = new InternalWeakMap()
            nativeHas(this, key)
              ? nativeSet(this, key, value)
              : state.frozen.set(key, value)
          } else nativeSet(this, key, value)
          return this
        },
      })
      // Chakra Edge frozen keys fix
    } else if (hasMSEdgeFreezingBug()) {
      defineBuiltIns(WeakMapPrototype, {
        set: function set(key, value) {
          var arrayIntegrityLevel
          if (isArray(key)) {
            if (isFrozen(key)) arrayIntegrityLevel = FROZEN
            else if (isSealed(key)) arrayIntegrityLevel = SEALED
          }
          nativeSet(this, key, value)
          if (arrayIntegrityLevel == FROZEN) freeze(key)
          if (arrayIntegrityLevel == SEALED) seal(key)
          return this
        },
      })
    }

  var isObject$2 = isObject$d
  var classof$4 = classofRaw$2
  var wellKnownSymbol$8 = wellKnownSymbol$c
  var MATCH$1 = wellKnownSymbol$8('match')

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp
    return (
      isObject$2(it) &&
      ((isRegExp = it[MATCH$1]) !== undefined
        ? !!isRegExp
        : classof$4(it) == 'RegExp')
    )
  }

  var isRegExp = isRegexp
  var $TypeError$6 = TypeError
  var notARegexp = function (it) {
    if (isRegExp(it)) {
      throw $TypeError$6("The method doesn't accept regular expressions")
    }
    return it
  }

  var wellKnownSymbol$7 = wellKnownSymbol$c
  var TO_STRING_TAG$2 = wellKnownSymbol$7('toStringTag')
  var test = {}
  test[TO_STRING_TAG$2] = 'z'
  var toStringTagSupport = String(test) === '[object z]'

  var TO_STRING_TAG_SUPPORT = toStringTagSupport
  var isCallable$6 = isCallable$j
  var classofRaw = classofRaw$2
  var wellKnownSymbol$6 = wellKnownSymbol$c
  var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag')
  var $Object = Object

  // ES3 wrong here
  var CORRECT_ARGUMENTS =
    classofRaw(
      (function () {
        return arguments
      })()
    ) == 'Arguments'

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key]
    } catch (error) {
      /* empty */
    }
  }

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$3 = TO_STRING_TAG_SUPPORT
    ? classofRaw
    : function (it) {
        var O, tag, result
        return it === undefined
          ? 'Undefined'
          : it === null
          ? 'Null'
          : // @@toStringTag case
          typeof (tag = tryGet((O = $Object(it)), TO_STRING_TAG$1)) == 'string'
          ? tag
          : // builtinTag case
          CORRECT_ARGUMENTS
          ? classofRaw(O)
          : // ES3 arguments fallback
          (result = classofRaw(O)) == 'Object' && isCallable$6(O.callee)
          ? 'Arguments'
          : result
      }

  var classof$2 = classof$3
  var $String$1 = String
  var toString$1 = function (argument) {
    if (classof$2(argument) === 'Symbol')
      throw TypeError('Cannot convert a Symbol value to a string')
    return $String$1(argument)
  }

  var wellKnownSymbol$5 = wellKnownSymbol$c
  var MATCH = wellKnownSymbol$5('match')
  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./
    try {
      '/./'[METHOD_NAME](regexp)
    } catch (error1) {
      try {
        regexp[MATCH] = false
        return '/./'[METHOD_NAME](regexp)
      } catch (error2) {
        /* empty */
      }
    }
    return false
  }

  var $$8 = _export
  var uncurryThis$3 = functionUncurryThis
  var notARegExp = notARegexp
  var requireObjectCoercible = requireObjectCoercible$3
  var toString = toString$1
  var correctIsRegExpLogic = correctIsRegexpLogic
  var stringIndexOf = uncurryThis$3(''.indexOf)

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$8(
    {
      target: 'String',
      proto: true,
      forced: !correctIsRegExpLogic('includes'),
    },
    {
      includes: function includes(searchString /* , position = 0 */) {
        return !!~stringIndexOf(
          toString(requireObjectCoercible(this)),
          toString(notARegExp(searchString)),
          arguments.length > 1 ? arguments[1] : undefined
        )
      },
    }
  )

  var $$7 = require('../internals/export')
  var $includes = require('../internals/array-includes').includes
  var fails$2 = require('../internals/fails')
  var addToUnscopables = require('../internals/add-to-unscopables')

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$2(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes()
  })

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$7(
    {
      target: 'Array',
      proto: true,
      forced: BROKEN_ON_SPARSE,
    },
    {
      includes: function includes(el /* , fromIndex = 0 */) {
        return $includes(
          this,
          el,
          arguments.length > 1 ? arguments[1] : undefined
        )
      },
    }
  )

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes')

  var classof$1 = classofRaw$2
  var engineIsNode =
    typeof process != 'undefined' && classof$1(process) == 'process'

  var uncurryThis$2 = functionUncurryThis
  var aCallable$6 = aCallable$8
  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$2(
        aCallable$6(Object.getOwnPropertyDescriptor(object, key)[method])
      )
    } catch (error) {
      /* empty */
    }
  }

  var isCallable$5 = isCallable$j
  var $String = String
  var $TypeError$5 = TypeError
  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$5(argument)) return argument
    throw $TypeError$5("Can't set " + $String(argument) + ' as a prototype')
  }

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor
  var anObject$4 = anObject$b
  var aPossiblePrototype = aPossiblePrototype$1

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var CORRECT_SETTER = false
          var test = {}
          var setter
          try {
            setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set')
            setter(test, [])
            CORRECT_SETTER = test instanceof Array
          } catch (error) {
            /* empty */
          }
          return function setPrototypeOf(O, proto) {
            anObject$4(O)
            aPossiblePrototype(proto)
            if (CORRECT_SETTER) setter(O, proto)
            else O.__proto__ = proto
            return O
          }
        })()
      : undefined)

  var defineProperty = objectDefineProperty.f
  var hasOwn$1 = hasOwnProperty_1
  var wellKnownSymbol$4 = wellKnownSymbol$c
  var TO_STRING_TAG = wellKnownSymbol$4('toStringTag')
  var setToStringTag$1 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype
    if (target && !hasOwn$1(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG,
      })
    }
  }

  var isPrototypeOf$1 = objectIsPrototypeOf
  var $TypeError$4 = TypeError
  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$1(Prototype, it)) return it
    throw $TypeError$4('Incorrect invocation')
  }

  var NATIVE_BIND$1 = functionBindNative
  var FunctionPrototype = Function.prototype
  var apply$1 = FunctionPrototype.apply
  var call$7 = FunctionPrototype.call

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply =
    (typeof Reflect == 'object' && Reflect.apply) ||
    (NATIVE_BIND$1
      ? call$7.bind(apply$1)
      : function () {
          return call$7.apply(apply$1, arguments)
        })

  var uncurryThis$1 = functionUncurryThisClause
  var aCallable$5 = aCallable$8
  var NATIVE_BIND = functionBindNative
  var bind$4 = uncurryThis$1(uncurryThis$1.bind)

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$5(fn)
    return that === undefined
      ? fn
      : NATIVE_BIND
      ? bind$4(fn, that)
      : function () /* ...args */
        {
          return fn.apply(that, arguments)
        }
  }

  var getBuiltIn$3 = getBuiltIn$8
  var html$1 = getBuiltIn$3('document', 'documentElement')

  var uncurryThis = functionUncurryThis
  var arraySlice$1 = uncurryThis([].slice)

  var $TypeError$3 = TypeError
  var validateArgumentsLength$1 = function (passed, required) {
    if (passed < required) throw $TypeError$3('Not enough arguments')
    return passed
  }

  var userAgent$2 = require('../internals/engine-user-agent')

  // eslint-disable-next-line redos/no-vulnerable -- safe
  module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2)

  var engineIsIos = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$5 = /*@__PURE__*/ getAugmentedNamespace(engineIsIos)

  var global$5 = require$$3$2
  var apply = functionApply
  var bind$3 = functionBindContext
  var isCallable$4 = isCallable$j
  var hasOwn = hasOwnProperty_1
  var fails$1 = fails$j
  var html = html$1
  var arraySlice = arraySlice$1
  var createElement = documentCreateElement
  var validateArgumentsLength = validateArgumentsLength$1
  var IS_IOS$1 = require$$5
  var IS_NODE$2 = engineIsNode
  var set = global$5.setImmediate
  var clear = global$5.clearImmediate
  var process$3 = global$5.process
  var Dispatch = global$5.Dispatch
  var Function$1 = global$5.Function
  var MessageChannel$1 = global$5.MessageChannel
  var String$1 = global$5.String
  var counter = 0
  var queue$2 = {}
  var ONREADYSTATECHANGE = 'onreadystatechange'
  var $location, defer, channel, port
  fails$1(function () {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global$5.location
  })
  var run = function run(id) {
    if (hasOwn(queue$2, id)) {
      var fn = queue$2[id]
      delete queue$2[id]
      fn()
    }
  }
  var runner = function runner(id) {
    return function () {
      run(id)
    }
  }
  var eventListener = function eventListener(event) {
    run(event.data)
  }
  var globalPostMessageDefer = function globalPostMessageDefer(id) {
    // old engines have not location.origin
    global$5.postMessage(
      String$1(id),
      $location.protocol + '//' + $location.host
    )
  }

  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set || !clear) {
    set = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1)
      var fn = isCallable$4(handler) ? handler : Function$1(handler)
      var args = arraySlice(arguments, 1)
      queue$2[++counter] = function () {
        apply(fn, undefined, args)
      }
      defer(counter)
      return counter
    }
    clear = function clearImmediate(id) {
      delete queue$2[id]
    }
    // Node.js 0.8-
    if (IS_NODE$2) {
      defer = function defer(id) {
        process$3.nextTick(runner(id))
      }
      // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id))
      }
      // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel$1 && !IS_IOS$1) {
      channel = new MessageChannel$1()
      port = channel.port2
      channel.port1.onmessage = eventListener
      defer = bind$3(port.postMessage, port)
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (
      global$5.addEventListener &&
      isCallable$4(global$5.postMessage) &&
      !global$5.importScripts &&
      $location &&
      $location.protocol !== 'file:' &&
      !fails$1(globalPostMessageDefer)
    ) {
      defer = globalPostMessageDefer
      global$5.addEventListener('message', eventListener, false)
      // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function defer(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] =
          function () {
            html.removeChild(this)
            run(id)
          }
      }
      // Rest old browsers
    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0)
      }
    }
  }
  var task$1 = {
    set: set,
    clear: clear,
  }

  var Queue$2 = function Queue() {
    this.head = null
    this.tail = null
  }
  Queue$2.prototype = {
    add: function add(item) {
      var entry = {
        item: item,
        next: null,
      }
      var tail = this.tail
      if (tail) tail.next = entry
      else this.head = entry
      this.tail = entry
    },
    get: function get() {
      var entry = this.head
      if (entry) {
        var next = (this.head = entry.next)
        if (next === null) this.tail = null
        return entry.item
      }
    },
  }
  var queue$1 = Queue$2

  var userAgent$1 = require('../internals/engine-user-agent')
  module.exports =
    /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined'

  var engineIsIosPebble = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$6 = /*@__PURE__*/ getAugmentedNamespace(engineIsIosPebble)

  var userAgent = require('../internals/engine-user-agent')
  module.exports = /web0s(?!.*chrome)/i.test(userAgent)

  var engineIsWebosWebkit = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$7 = /*@__PURE__*/ getAugmentedNamespace(engineIsWebosWebkit)

  var global$4 = require$$3$2
  var bind$2 = functionBindContext
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f
  var macrotask = task$1.set
  var Queue$1 = queue$1
  var IS_IOS = require$$5
  var IS_IOS_PEBBLE = require$$6
  var IS_WEBOS_WEBKIT = require$$7
  var IS_NODE$1 = engineIsNode
  var MutationObserver =
    global$4.MutationObserver || global$4.WebKitMutationObserver
  var document$2 = global$4.document
  var process$2 = global$4.process
  var Promise$1 = global$4.Promise
  // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor(
    global$4,
    'queueMicrotask'
  )
  var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value
  var notify$1, toggle, node, promise, then

  // modern engines have queueMicrotask method
  if (!microtask$1) {
    var queue = new Queue$1()
    var flush = function flush() {
      var parent, fn
      if (IS_NODE$1 && (parent = process$2.domain)) parent.exit()
      while ((fn = queue.get()))
        try {
          fn()
        } catch (error) {
          if (queue.head) notify$1()
          throw error
        }
      if (parent) parent.enter()
    }

    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (
      !IS_IOS &&
      !IS_NODE$1 &&
      !IS_WEBOS_WEBKIT &&
      MutationObserver &&
      document$2
    ) {
      toggle = true
      node = document$2.createTextNode('')
      new MutationObserver(flush).observe(node, {
        characterData: true,
      })
      notify$1 = function notify() {
        node.data = toggle = !toggle
      }
      // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined)
      // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1
      then = bind$2(promise.then, promise)
      notify$1 = function notify() {
        then(flush)
      }
      // Node.js without promises
    } else if (IS_NODE$1) {
      notify$1 = function notify() {
        process$2.nextTick(flush)
      }
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessage
      // - onreadystatechange
      // - setTimeout
    } else {
      // `webpack` dev server bug on IE global methods - use bind(fn, global)
      macrotask = bind$2(macrotask, global$4)
      notify$1 = function notify() {
        macrotask(flush)
      }
    }
    microtask$1 = function microtask(fn) {
      if (!queue.head) notify$1()
      queue.add(fn)
    }
  }
  var microtask_1 = microtask$1

  var hostReportErrors$1 = function (a, b) {
    try {
      // eslint-disable-next-line no-console -- safe
      arguments.length == 1 ? console.error(a) : console.error(a, b)
    } catch (error) {
      /* empty */
    }
  }

  var perform$3 = function (exec) {
    try {
      return {
        error: false,
        value: exec(),
      }
    } catch (error) {
      return {
        error: true,
        value: error,
      }
    }
  }

  var global$3 = require$$3$2
  var promiseNativeConstructor = global$3.Promise

  var $$6 = require('../internals/export')
  var IS_PURE$1 = require('../internals/is-pure')
  var NativePromiseConstructor$4 = require('../internals/promise-native-constructor')
  var fails = require('../internals/fails')
  var getBuiltIn$2 = require('../internals/get-built-in')
  var isCallable$3 = require('../internals/is-callable')
  var speciesConstructor$1 = require('../internals/species-constructor')
  var promiseResolve$2 = require('../internals/promise-resolve')
  var defineBuiltIn$2 = require('../internals/define-built-in')
  var NativePromisePrototype$3 =
    NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype

  // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
  var NON_GENERIC =
    !!NativePromiseConstructor$4 &&
    fails(function () {
      // eslint-disable-next-line unicorn/no-thenable -- required for testing
      NativePromisePrototype$3['finally'].call(
        {
          then: function then() {
            /* empty */
          },
        },
        function () {
          /* empty */
        }
      )
    })

  // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally
  $$6(
    {
      target: 'Promise',
      proto: true,
      real: true,
      forced: NON_GENERIC,
    },
    {
      finally: function _finally(onFinally) {
        var C = speciesConstructor$1(this, getBuiltIn$2('Promise'))
        var isFunction = isCallable$3(onFinally)
        return this.then(
          isFunction
            ? function (x) {
                return promiseResolve$2(C, onFinally()).then(function () {
                  return x
                })
              }
            : onFinally,
          isFunction
            ? function (e) {
                return promiseResolve$2(C, onFinally()).then(function () {
                  throw e
                })
              }
            : onFinally
        )
      },
    }
  )

  // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
  if (!IS_PURE$1 && isCallable$3(NativePromiseConstructor$4)) {
    var method$1 = getBuiltIn$2('Promise').prototype['finally']
    if (NativePromisePrototype$3['finally'] !== method$1) {
      defineBuiltIn$2(NativePromisePrototype$3, 'finally', method$1, {
        unsafe: true,
      })
    }
  }

  var global$2 = require('../internals/global')
  var NativePromiseConstructor$3 = require('../internals/promise-native-constructor')
  var isCallable$2 = require('../internals/is-callable')
  var isForced = require('../internals/is-forced')
  var inspectSource = require('../internals/inspect-source')
  var wellKnownSymbol$3 = require('../internals/well-known-symbol')
  var IS_BROWSER = require('../internals/engine-is-browser')
  var IS_DENO = require('../internals/engine-is-deno')
  var IS_PURE = require('../internals/is-pure')
  var V8_VERSION = require('../internals/engine-v8-version')
  var NativePromisePrototype$2 =
    NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype
  var SPECIES = wellKnownSymbol$3('species')
  var SUBCLASSING = false
  var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$2(
    global$2.PromiseRejectionEvent
  )
  var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3)
    var GLOBAL_CORE_JS_PROMISE =
      PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3)
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if (
      IS_PURE &&
      !(
        NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally']
      )
    )
      return true
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (
      !V8_VERSION ||
      V8_VERSION < 51 ||
      !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)
    ) {
      // Detect correctness of subclassing with @@species support
      var promise = new NativePromiseConstructor$3(function (resolve) {
        resolve(1)
      })
      var FakePromise = function FakePromise(exec) {
        exec(
          function () {
            /* empty */
          },
          function () {
            /* empty */
          }
        )
      }
      var constructor = (promise.constructor = {})
      constructor[SPECIES] = FakePromise
      SUBCLASSING =
        promise.then(function () {
          /* empty */
        }) instanceof FakePromise
      if (!SUBCLASSING) return true
      // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    }
    return (
      !GLOBAL_CORE_JS_PROMISE &&
      (IS_BROWSER || IS_DENO) &&
      !NATIVE_PROMISE_REJECTION_EVENT$1
    )
  })
  module.exports = {
    CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
    REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
    SUBCLASSING: SUBCLASSING,
  }

  var promiseConstructorDetection = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$4 = /*@__PURE__*/ getAugmentedNamespace(
    promiseConstructorDetection
  )

  var newPromiseCapability$2 = {}

  var aCallable$4 = aCallable$8
  var $TypeError$2 = TypeError
  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined)
        throw $TypeError$2('Bad Promise constructor')
      resolve = $$resolve
      reject = $$reject
    })
    this.resolve = aCallable$4(resolve)
    this.reject = aCallable$4(reject)
  }

  // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C)
  }

  var $$5 = _export
  var IS_NODE = engineIsNode
  var global$1 = require$$3$2
  var call$6 = functionCall
  var defineBuiltIn$1 = defineBuiltIn$6
  var setPrototypeOf = objectSetPrototypeOf
  var setToStringTag = setToStringTag$1
  var setSpecies = setSpecies$2
  var aCallable$3 = aCallable$8
  var isCallable$1 = isCallable$j
  var isObject$1 = isObject$d
  var anInstance = anInstance$1
  var speciesConstructor = speciesConstructor$3
  var task = task$1.set
  var microtask = microtask_1
  var hostReportErrors = hostReportErrors$1
  var perform$2 = perform$3
  var Queue = queue$1
  var InternalStateModule = internalState
  var NativePromiseConstructor$2 = promiseNativeConstructor
  var PromiseConstructorDetection = require$$4
  var newPromiseCapabilityModule$3 = newPromiseCapability$2
  var PROMISE = 'Promise'
  var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR
  var NATIVE_PROMISE_REJECTION_EVENT =
    PromiseConstructorDetection.REJECTION_EVENT
  var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING
  var getInternalPromiseState = InternalStateModule.getterFor(PROMISE)
  var setInternalState = InternalStateModule.set
  var NativePromisePrototype$1 =
    NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype
  var PromiseConstructor = NativePromiseConstructor$2
  var PromisePrototype = NativePromisePrototype$1
  var TypeError$1 = global$1.TypeError
  var document$1 = global$1.document
  var process$1 = global$1.process
  var newPromiseCapability$1 = newPromiseCapabilityModule$3.f
  var newGenericPromiseCapability = newPromiseCapability$1
  var DISPATCH_EVENT = !!(
    document$1 &&
    document$1.createEvent &&
    global$1.dispatchEvent
  )
  var UNHANDLED_REJECTION = 'unhandledrejection'
  var REJECTION_HANDLED = 'rejectionhandled'
  var PENDING = 0
  var FULFILLED = 1
  var REJECTED = 2
  var HANDLED = 1
  var UNHANDLED = 2
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen

  // helpers
  var isThenable = function isThenable(it) {
    var then
    return isObject$1(it) && isCallable$1((then = it.then)) ? then : false
  }
  var callReaction = function callReaction(reaction, state) {
    var value = state.value
    var ok = state.state == FULFILLED
    var handler = ok ? reaction.ok : reaction.fail
    var resolve = reaction.resolve
    var reject = reaction.reject
    var domain = reaction.domain
    var result, then, exited
    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state)
          state.rejection = HANDLED
        }
        if (handler === true) result = value
        else {
          if (domain) domain.enter()
          result = handler(value) // can throw
          if (domain) {
            domain.exit()
            exited = true
          }
        }
        if (result === reaction.promise) {
          reject(TypeError$1('Promise-chain cycle'))
        } else if ((then = isThenable(result))) {
          call$6(then, result, resolve, reject)
        } else resolve(result)
      } else reject(value)
    } catch (error) {
      if (domain && !exited) domain.exit()
      reject(error)
    }
  }
  var notify = function notify(state, isReject) {
    if (state.notified) return
    state.notified = true
    microtask(function () {
      var reactions = state.reactions
      var reaction
      while ((reaction = reactions.get())) {
        callReaction(reaction, state)
      }
      state.notified = false
      if (isReject && !state.rejection) onUnhandled(state)
    })
  }
  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event')
      event.promise = promise
      event.reason = reason
      event.initEvent(name, false, true)
      global$1.dispatchEvent(event)
    } else
      event = {
        promise: promise,
        reason: reason,
      }
    if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$1['on' + name]))
      handler(event)
    else if (name === UNHANDLED_REJECTION)
      hostReportErrors('Unhandled promise rejection', reason)
  }
  var onUnhandled = function onUnhandled(state) {
    call$6(task, global$1, function () {
      var promise = state.facade
      var value = state.value
      var IS_UNHANDLED = isUnhandled(state)
      var result
      if (IS_UNHANDLED) {
        result = perform$2(function () {
          if (IS_NODE) {
            process$1.emit('unhandledRejection', value, promise)
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value)
        })
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED
        if (result.error) throw result.value
      }
    })
  }
  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent
  }
  var onHandleUnhandled = function onHandleUnhandled(state) {
    call$6(task, global$1, function () {
      var promise = state.facade
      if (IS_NODE) {
        process$1.emit('rejectionHandled', promise)
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value)
    })
  }
  var bind$1 = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap)
    }
  }
  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return
    state.done = true
    if (unwrap) state = unwrap
    state.value = value
    state.state = REJECTED
    notify(state, true)
  }
  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return
    state.done = true
    if (unwrap) state = unwrap
    try {
      if (state.facade === value)
        throw TypeError$1("Promise can't be resolved itself")
      var then = isThenable(value)
      if (then) {
        microtask(function () {
          var wrapper = {
            done: false,
          }
          try {
            call$6(
              then,
              value,
              bind$1(internalResolve, wrapper, state),
              bind$1(internalReject, wrapper, state)
            )
          } catch (error) {
            internalReject(wrapper, error, state)
          }
        })
      } else {
        state.value = value
        state.state = FULFILLED
        notify(state, false)
      }
    } catch (error) {
      internalReject(
        {
          done: false,
        },
        error,
        state
      )
    }
  }

  // constructor polyfill
  if (FORCED_PROMISE_CONSTRUCTOR$4) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype)
      aCallable$3(executor)
      call$6(Internal, this)
      var state = getInternalPromiseState(this)
      try {
        executor(bind$1(internalResolve, state), bind$1(internalReject, state))
      } catch (error) {
        internalReject(state, error)
      }
    }
    PromisePrototype = PromiseConstructor.prototype

    // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new Queue(),
        rejection: false,
        state: PENDING,
        value: undefined,
      })
    }

    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    Internal.prototype = defineBuiltIn$1(
      PromisePrototype,
      'then',
      function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this)
        var reaction = newPromiseCapability$1(
          speciesConstructor(this, PromiseConstructor)
        )
        state.parent = true
        reaction.ok = isCallable$1(onFulfilled) ? onFulfilled : true
        reaction.fail = isCallable$1(onRejected) && onRejected
        reaction.domain = IS_NODE ? process$1.domain : undefined
        if (state.state == PENDING) state.reactions.add(reaction)
        else
          microtask(function () {
            callReaction(reaction, state)
          })
        return reaction.promise
      }
    )
    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal()
      var state = getInternalPromiseState(promise)
      this.promise = promise
      this.resolve = bind$1(internalResolve, state)
      this.reject = bind$1(internalReject, state)
    }
    newPromiseCapabilityModule$3.f = newPromiseCapability$1 =
      function newPromiseCapability(C) {
        return C === PromiseConstructor || C === PromiseWrapper
          ? new OwnPromiseCapability(C)
          : newGenericPromiseCapability(C)
      }
    if (
      isCallable$1(NativePromiseConstructor$2) &&
      NativePromisePrototype$1 !== Object.prototype
    ) {
      nativeThen = NativePromisePrototype$1.then
      if (!NATIVE_PROMISE_SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        defineBuiltIn$1(
          NativePromisePrototype$1,
          'then',
          function then(onFulfilled, onRejected) {
            var that = this
            return new PromiseConstructor(function (resolve, reject) {
              call$6(nativeThen, that, resolve, reject)
            }).then(onFulfilled, onRejected)
            // https://github.com/zloirock/core-js/issues/640
          },
          {
            unsafe: true,
          }
        )
      }

      // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype$1.constructor
      } catch (error) {
        /* empty */
      }

      // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype$1, PromisePrototype)
      }
    }
  }
  $$5(
    {
      global: true,
      constructor: true,
      wrap: true,
      forced: FORCED_PROMISE_CONSTRUCTOR$4,
    },
    {
      Promise: PromiseConstructor,
    }
  )
  setToStringTag(PromiseConstructor, PROMISE, false)
  setSpecies(PROMISE)

  var iterators = {}

  var wellKnownSymbol$2 = wellKnownSymbol$c
  var Iterators$1 = iterators
  var ITERATOR$2 = wellKnownSymbol$2('iterator')
  var ArrayPrototype = Array.prototype

  // check on default Array iterator
  var isArrayIteratorMethod$1 = function (it) {
    return (
      it !== undefined &&
      (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it)
    )
  }

  var classof = classof$3
  var getMethod$1 = getMethod$3
  var isNullOrUndefined = isNullOrUndefined$6
  var Iterators = iterators
  var wellKnownSymbol$1 = wellKnownSymbol$c
  var ITERATOR$1 = wellKnownSymbol$1('iterator')
  var getIteratorMethod$2 = function (it) {
    if (!isNullOrUndefined(it))
      return (
        getMethod$1(it, ITERATOR$1) ||
        getMethod$1(it, '@@iterator') ||
        Iterators[classof(it)]
      )
  }

  var call$5 = functionCall
  var aCallable$2 = aCallable$8
  var anObject$3 = anObject$b
  var tryToString$1 = tryToString$4
  var getIteratorMethod$1 = getIteratorMethod$2
  var $TypeError$1 = TypeError
  var getIterator$1 = function (argument, usingIterator) {
    var iteratorMethod =
      arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator
    if (aCallable$2(iteratorMethod))
      return anObject$3(call$5(iteratorMethod, argument))
    throw $TypeError$1(tryToString$1(argument) + ' is not iterable')
  }

  var call$4 = functionCall
  var anObject$2 = anObject$b
  var getMethod = getMethod$3
  var iteratorClose$1 = function (iterator, kind, value) {
    var innerResult, innerError
    anObject$2(iterator)
    try {
      innerResult = getMethod(iterator, 'return')
      if (!innerResult) {
        if (kind === 'throw') throw value
        return value
      }
      innerResult = call$4(innerResult, iterator)
    } catch (error) {
      innerError = true
      innerResult = error
    }
    if (kind === 'throw') throw value
    if (innerError) throw innerResult
    anObject$2(innerResult)
    return value
  }

  var bind = functionBindContext
  var call$3 = functionCall
  var anObject$1 = anObject$b
  var tryToString = tryToString$4
  var isArrayIteratorMethod = isArrayIteratorMethod$1
  var lengthOfArrayLike = lengthOfArrayLike$3
  var isPrototypeOf = objectIsPrototypeOf
  var getIterator = getIterator$1
  var getIteratorMethod = getIteratorMethod$2
  var iteratorClose = iteratorClose$1
  var $TypeError = TypeError
  var Result = function Result(stopped, result) {
    this.stopped = stopped
    this.result = result
  }
  var ResultPrototype = Result.prototype
  var iterate$2 = function (iterable, unboundFunction, options) {
    var that = options && options.that
    var AS_ENTRIES = !!(options && options.AS_ENTRIES)
    var IS_RECORD = !!(options && options.IS_RECORD)
    var IS_ITERATOR = !!(options && options.IS_ITERATOR)
    var INTERRUPTED = !!(options && options.INTERRUPTED)
    var fn = bind(unboundFunction, that)
    var iterator, iterFn, index, length, result, next, step
    var stop = function stop(condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition)
      return new Result(true, condition)
    }
    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject$1(value)
        return INTERRUPTED
          ? fn(value[0], value[1], stop)
          : fn(value[0], value[1])
      }
      return INTERRUPTED ? fn(value, stop) : fn(value)
    }
    if (IS_RECORD) {
      iterator = iterable.iterator
    } else if (IS_ITERATOR) {
      iterator = iterable
    } else {
      iterFn = getIteratorMethod(iterable)
      if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable')
      // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (
          index = 0, length = lengthOfArrayLike(iterable);
          length > index;
          index++
        ) {
          result = callFn(iterable[index])
          if (result && isPrototypeOf(ResultPrototype, result)) return result
        }
        return new Result(false)
      }
      iterator = getIterator(iterable, iterFn)
    }
    next = IS_RECORD ? iterable.next : iterator.next
    while (!(step = call$3(next, iterator)).done) {
      try {
        result = callFn(step.value)
      } catch (error) {
        iteratorClose(iterator, 'throw', error)
      }
      if (
        typeof result == 'object' &&
        result &&
        isPrototypeOf(ResultPrototype, result)
      )
        return result
    }
    return new Result(false)
  }

  var wellKnownSymbol = wellKnownSymbol$c
  var ITERATOR = wellKnownSymbol('iterator')
  var SAFE_CLOSING = false
  try {
    var called = 0
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++,
        }
      },
      return: function _return() {
        SAFE_CLOSING = true
      },
    }
    iteratorWithReturn[ITERATOR] = function () {
      return this
    }
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () {
      throw 2
    })
  } catch (error) {
    /* empty */
  }
  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false
    var ITERATION_SUPPORT = false
    try {
      var object = {}
      object[ITERATOR] = function () {
        return {
          next: function next() {
            return {
              done: (ITERATION_SUPPORT = true),
            }
          },
        }
      }
      exec(object)
    } catch (error) {
      /* empty */
    }
    return ITERATION_SUPPORT
  }

  var NativePromiseConstructor$1 = promiseNativeConstructor
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1
  var FORCED_PROMISE_CONSTRUCTOR$3 = require$$4.CONSTRUCTOR
  var promiseStaticsIncorrectIteration =
    FORCED_PROMISE_CONSTRUCTOR$3 ||
    !checkCorrectnessOfIteration(function (iterable) {
      NativePromiseConstructor$1.all(iterable).then(undefined, function () {
        /* empty */
      })
    })

  var $$4 = _export
  var call$2 = functionCall
  var aCallable$1 = aCallable$8
  var newPromiseCapabilityModule$2 = newPromiseCapability$2
  var perform$1 = perform$3
  var iterate$1 = iterate$2
  var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration

  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  $$4(
    {
      target: 'Promise',
      stat: true,
      forced: PROMISE_STATICS_INCORRECT_ITERATION$1,
    },
    {
      all: function all(iterable) {
        var C = this
        var capability = newPromiseCapabilityModule$2.f(C)
        var resolve = capability.resolve
        var reject = capability.reject
        var result = perform$1(function () {
          var $promiseResolve = aCallable$1(C.resolve)
          var values = []
          var counter = 0
          var remaining = 1
          iterate$1(iterable, function (promise) {
            var index = counter++
            var alreadyCalled = false
            remaining++
            call$2($promiseResolve, C, promise).then(function (value) {
              if (alreadyCalled) return
              alreadyCalled = true
              values[index] = value
              --remaining || resolve(values)
            }, reject)
          })
          --remaining || resolve(values)
        })
        if (result.error) reject(result.value)
        return capability.promise
      },
    }
  )

  var $$3 = _export
  var FORCED_PROMISE_CONSTRUCTOR$2 = require$$4.CONSTRUCTOR
  var NativePromiseConstructor = promiseNativeConstructor
  var getBuiltIn$1 = getBuiltIn$8
  var isCallable = isCallable$j
  var defineBuiltIn = defineBuiltIn$6
  var NativePromisePrototype =
    NativePromiseConstructor && NativePromiseConstructor.prototype

  // `Promise.prototype.catch` method
  // https://tc39.es/ecma262/#sec-promise.prototype.catch
  $$3(
    {
      target: 'Promise',
      proto: true,
      forced: FORCED_PROMISE_CONSTRUCTOR$2,
      real: true,
    },
    {
      catch: function _catch(onRejected) {
        return this.then(undefined, onRejected)
      },
    }
  )

  // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
  if (isCallable(NativePromiseConstructor)) {
    var method = getBuiltIn$1('Promise').prototype['catch']
    if (NativePromisePrototype['catch'] !== method) {
      defineBuiltIn(NativePromisePrototype, 'catch', method, {
        unsafe: true,
      })
    }
  }

  var $$2 = _export
  var call$1 = functionCall
  var aCallable = aCallable$8
  var newPromiseCapabilityModule$1 = newPromiseCapability$2
  var perform = perform$3
  var iterate = iterate$2
  var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration

  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  $$2(
    {
      target: 'Promise',
      stat: true,
      forced: PROMISE_STATICS_INCORRECT_ITERATION,
    },
    {
      race: function race(iterable) {
        var C = this
        var capability = newPromiseCapabilityModule$1.f(C)
        var reject = capability.reject
        var result = perform(function () {
          var $promiseResolve = aCallable(C.resolve)
          iterate(iterable, function (promise) {
            call$1($promiseResolve, C, promise).then(capability.resolve, reject)
          })
        })
        if (result.error) reject(result.value)
        return capability.promise
      },
    }
  )

  var $$1 = _export
  var call = functionCall
  var newPromiseCapabilityModule = newPromiseCapability$2
  var FORCED_PROMISE_CONSTRUCTOR$1 = require$$4.CONSTRUCTOR

  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  $$1(
    {
      target: 'Promise',
      stat: true,
      forced: FORCED_PROMISE_CONSTRUCTOR$1,
    },
    {
      reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this)
        call(capability.reject, undefined, r)
        return capability.promise
      },
    }
  )

  var anObject = anObject$b
  var isObject = isObject$d
  var newPromiseCapability = newPromiseCapability$2
  var promiseResolve$1 = function (C, x) {
    anObject(C)
    if (isObject(x) && x.constructor === C) return x
    var promiseCapability = newPromiseCapability.f(C)
    var resolve = promiseCapability.resolve
    resolve(x)
    return promiseCapability.promise
  }

  var $ = _export
  var getBuiltIn = getBuiltIn$8
  var FORCED_PROMISE_CONSTRUCTOR = require$$4.CONSTRUCTOR
  var promiseResolve = promiseResolve$1
  getBuiltIn('Promise')

  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  $(
    {
      target: 'Promise',
      stat: true,
      forced: FORCED_PROMISE_CONSTRUCTOR,
    },
    {
      resolve: function resolve(x) {
        return promiseResolve(this, x)
      },
    }
  )

  /**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    ;(function () {
      /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
          'function'
      ) {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error())
      }
      var ReactVersion = '18.2.0'

      // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types.
      var REACT_ELEMENT_TYPE = Symbol.for('react.element')
      var REACT_PORTAL_TYPE = Symbol.for('react.portal')
      var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment')
      var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode')
      var REACT_PROFILER_TYPE = Symbol.for('react.profiler')
      var REACT_PROVIDER_TYPE = Symbol.for('react.provider')
      var REACT_CONTEXT_TYPE = Symbol.for('react.context')
      var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref')
      var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense')
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list')
      var REACT_MEMO_TYPE = Symbol.for('react.memo')
      var REACT_LAZY_TYPE = Symbol.for('react.lazy')
      var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen')
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator
      var FAUX_ITERATOR_SYMBOL = '@@iterator'
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') {
          return null
        }
        var maybeIterator =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]
        if (typeof maybeIterator === 'function') {
          return maybeIterator
        }
        return null
      }

      /**
       * Keeps track of the current dispatcher.
       */
      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      }

      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */
      var ReactCurrentBatchConfig = {
        transition: null,
      }
      var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
      }

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null,
      }
      var ReactDebugCurrentFrame = {}
      var currentExtraStackFrame = null
      function setExtraStackFrame(stack) {
        {
          currentExtraStackFrame = stack
        }
      }
      {
        ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
          {
            currentExtraStackFrame = stack
          }
        } // Stack implementation injected by the current renderer.

        ReactDebugCurrentFrame.getCurrentStack = null
        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = '' // Add an extra top frame while an element is being validated

          if (currentExtraStackFrame) {
            stack += currentExtraStackFrame
          } // Delegate to the injected renderer-specific implementation

          var impl = ReactDebugCurrentFrame.getCurrentStack
          if (impl) {
            stack += impl() || ''
          }
          return stack
        }
      }

      // -----------------------------------------------------------------------------

      var enableScopeAPI = false // Experimental Create Event Handle API.
      var enableCacheElement = false
      var enableTransitionTracing = false // No known bugs, but needs performance testing

      var enableLegacyHidden = false // Enables unstable_avoidThisFallback feature in Fiber
      // stuff. Intended to enable React core members to more easily debug scheduling
      // issues in DEV builds.

      var enableDebugTracing = false // Track which Fiber(s) schedule render work.

      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
      }
      {
        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame
        ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue
      }

      // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          {
            for (
              var _len = arguments.length,
                args = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key]
            }
            printWarning('warn', format, args)
          }
        }
      }
      function error(format) {
        {
          {
            for (
              var _len2 = arguments.length,
                args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 1] = arguments[_key2]
            }
            printWarning('error', format, args)
          }
        }
      }
      function printWarning(level, format, args) {
        // When changing this logic, you might want to also
        // update consoleWithStackDev.www.js as well.
        {
          var ReactDebugCurrentFrame =
            ReactSharedInternals.ReactDebugCurrentFrame
          var stack = ReactDebugCurrentFrame.getStackAddendum()
          if (stack !== '') {
            format += '%s'
            args = args.concat([stack])
          } // eslint-disable-next-line react-internal/safe-string-coercion

          var argsWithFormat = args.map(function (item) {
            return String(item)
          }) // Careful: RN currently depends on this prefix

          argsWithFormat.unshift('Warning: ' + format) // We intentionally don't use spread (or .apply) directly because it
          // breaks IE9: https://github.com/facebook/react/issues/13610
          // eslint-disable-next-line react-internal/no-production-logging

          Function.prototype.apply.call(console[level], console, argsWithFormat)
        }
      }
      var didWarnStateUpdateForUnmountedComponent = {}
      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor
          var componentName =
            (_constructor && (_constructor.displayName || _constructor.name)) ||
            'ReactClass'
          var warningKey = componentName + '.' + callerName
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return
          }
          error(
            "Can't call %s on a component that is not yet mounted. " +
              'This is a no-op, but it might indicate a bug in your application. ' +
              'Instead, assign to `this.state` directly or define a `state = {};` ' +
              'class property with the desired state in the %s component.',
            callerName,
            componentName
          )
          didWarnStateUpdateForUnmountedComponent[warningKey] = true
        }
      }
      /**
       * This is the abstract API for an update queue.
       */

      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted(publicInstance) {
          return false
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function enqueueForceUpdate(
          publicInstance,
          callback,
          callerName
        ) {
          warnNoop(publicInstance, 'forceUpdate')
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function enqueueReplaceState(
          publicInstance,
          completeState,
          callback,
          callerName
        ) {
          warnNoop(publicInstance, 'replaceState')
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function enqueueSetState(
          publicInstance,
          partialState,
          callback,
          callerName
        ) {
          warnNoop(publicInstance, 'setState')
        },
      }
      var assign = Object.assign
      var emptyObject = {}
      {
        Object.freeze(emptyObject)
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props
        this.context = context // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue
      }
      Component.prototype.isReactComponent = {}
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (
          typeof partialState !== 'object' &&
          typeof partialState !== 'function' &&
          partialState != null
        ) {
          throw new Error(
            'setState(...): takes an object of state variables to update or a ' +
              'function which returns an object of state variables.'
          )
        }
        this.updater.enqueueSetState(this, partialState, callback, 'setState')
      }
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */

      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
      }
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */

      {
        var deprecatedAPIs = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in ' +
              'componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see ' +
              'https://github.com/facebook/react/issues/3236).',
          ],
        }
        var defineDeprecationWarning = function defineDeprecationWarning(
          methodName,
          info
        ) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function get() {
              warn(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                info[0],
                info[1]
              )
              return undefined
            },
          })
        }
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName])
          }
        }
      }
      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props
        this.context = context // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject
        this.updater = updater || ReactNoopUpdateQueue
      }
      var pureComponentPrototype = (PureComponent.prototype =
        new ComponentDummy())
      pureComponentPrototype.constructor = PureComponent // Avoid an extra prototype jump for these methods.

      assign(pureComponentPrototype, Component.prototype)
      pureComponentPrototype.isPureReactComponent = true

      // an immutable object with a single mutable value
      function createRef() {
        var refObject = {
          current: null,
        }
        {
          Object.seal(refObject)
        }
        return refObject
      }
      var isArrayImpl = Array.isArray // eslint-disable-next-line no-redeclare

      function isArray(a) {
        return isArrayImpl(a)
      }

      /*
       * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
       * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
       *
       * The functions in this module will throw an easier-to-understand,
       * easier-to-debug exception with a clear errors message message explaining the
       * problem. (Instead of a confusing exception thrown inside the implementation
       * of the `value` object).
       */
      // $FlowFixMe only called in DEV, so void return is not possible.
      function typeName(value) {
        {
          // toStringTag is needed for namespaced types like Temporal.Instant
          var hasToStringTag =
            typeof Symbol === 'function' && Symbol.toStringTag
          var type =
            (hasToStringTag && value[Symbol.toStringTag]) ||
            value.constructor.name ||
            'Object'
          return type
        }
      } // $FlowFixMe only called in DEV, so void return is not possible.

      function willCoercionThrow(value) {
        {
          try {
            testStringCoercion(value)
            return false
          } catch (e) {
            return true
          }
        }
      }
      function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return '' + value
      }
      function checkKeyStringCoercion(value) {
        {
          if (willCoercionThrow(value)) {
            error(
              'The provided key is an unsupported type %s.' +
                ' This value must be coerced to a string before before using it here.',
              typeName(value)
            )
            return testStringCoercion(value) // throw (to help callers find troubleshooting comments)
          }
        }
      }

      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName
        if (displayName) {
          return displayName
        }
        var functionName = innerType.displayName || innerType.name || ''
        return functionName !== ''
          ? wrapperName + '(' + functionName + ')'
          : wrapperName
      } // Keep in sync with react-reconciler/getComponentNameFromFiber

      function getContextName(type) {
        return type.displayName || 'Context'
      } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

      function getComponentNameFromType(type) {
        if (type == null) {
          // Host root, text node or just invalid type.
          return null
        }
        {
          if (typeof type.tag === 'number') {
            error(
              'Received an unexpected object in getComponentNameFromType(). ' +
                'This is likely a bug in React. Please file an issue.'
            )
          }
        }
        if (typeof type === 'function') {
          return type.displayName || type.name || null
        }
        if (typeof type === 'string') {
          return type
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment'
          case REACT_PORTAL_TYPE:
            return 'Portal'
          case REACT_PROFILER_TYPE:
            return 'Profiler'
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode'
          case REACT_SUSPENSE_TYPE:
            return 'Suspense'
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList'
        }
        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type
              return getContextName(context) + '.Consumer'
            case REACT_PROVIDER_TYPE:
              var provider = type
              return getContextName(provider._context) + '.Provider'
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef')
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null
              if (outerName !== null) {
                return outerName
              }
              return getComponentNameFromType(type.type) || 'Memo'
            case REACT_LAZY_TYPE: {
              var lazyComponent = type
              var payload = lazyComponent._payload
              var init = lazyComponent._init
              try {
                return getComponentNameFromType(init(payload))
              } catch (x) {
                return null
              }
            }

            // eslint-disable-next-line no-fallthrough
          }
        }

        return null
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true,
      }
      var specialPropKeyWarningShown,
        specialPropRefWarningShown,
        didWarnAboutStringRefs
      {
        didWarnAboutStringRefs = {}
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get
            if (getter && getter.isReactWarning) {
              return false
            }
          }
        }
        return config.ref !== undefined
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get
            if (getter && getter.isReactWarning) {
              return false
            }
          }
        }
        return config.key !== undefined
      }
      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function warnAboutAccessingKey() {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true
              error(
                '%s: `key` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://reactjs.org/link/special-props)',
                displayName
              )
            }
          }
        }
        warnAboutAccessingKey.isReactWarning = true
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true,
        })
      }
      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function warnAboutAccessingRef() {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true
              error(
                '%s: `ref` is not a prop. Trying to access it will result ' +
                  'in `undefined` being returned. If you need to access the same ' +
                  'value within the child component, you should pass it as a different ' +
                  'prop. (https://reactjs.org/link/special-props)',
                displayName
              )
            }
          }
        }
        warnAboutAccessingRef.isReactWarning = true
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true,
        })
      }
      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (
            typeof config.ref === 'string' &&
            ReactCurrentOwner.current &&
            config.__self &&
            ReactCurrentOwner.current.stateNode !== config.__self
          ) {
            var componentName = getComponentNameFromType(
              ReactCurrentOwner.current.type
            )
            if (!didWarnAboutStringRefs[componentName]) {
              error(
                'Component "%s" contains the string ref "%s". ' +
                  'Support for string refs will be removed in a future major release. ' +
                  'This case cannot be automatically converted to an arrow function. ' +
                  'We ask you to manually fix this case by using useRef() or createRef() instead. ' +
                  'Learn more about using refs safely here: ' +
                  'https://reactjs.org/link/strict-mode-string-ref',
                componentName,
                config.ref
              )
              didWarnAboutStringRefs[componentName] = true
            }
          }
        }
      }
      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, instanceof check
       * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} props
       * @param {*} key
       * @param {string|object} ref
       * @param {*} owner
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @internal
       */

      var ReactElement = function ReactElement(
        type,
        key,
        ref,
        self,
        source,
        owner,
        props
      ) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,
          // Record the component responsible for creating this element.
          _owner: owner,
        }
        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {} // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.

          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false,
          }) // self and source are DEV only properties.

          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self,
          }) // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.

          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source,
          })
          if (Object.freeze) {
            Object.freeze(element.props)
            Object.freeze(element)
          }
        }
        return element
      }
      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */

      function createElement(type, config, children) {
        var propName // Reserved names are extracted

        var props = {}
        var key = null
        var ref = null
        var self = null
        var source = null
        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref
            {
              warnIfStringRefCannotBeAutoConverted(config)
            }
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key)
            }
            key = '' + config.key
          }
          self = config.__self === undefined ? null : config.__self
          source = config.__source === undefined ? null : config.__source // Remaining properties are added to a new props object

          for (propName in config) {
            if (
              hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName)
            ) {
              props[propName] = config[propName]
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2
        if (childrenLength === 1) {
          props.children = children
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength)
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2]
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray)
            }
          }
          props.children = childArray
        } // Resolve default props

        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName]
            }
          }
        }
        {
          if (key || ref) {
            var displayName =
              typeof type === 'function'
                ? type.displayName || type.name || 'Unknown'
                : type
            if (key) {
              defineKeyPropWarningGetter(props, displayName)
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName)
            }
          }
        }
        return ReactElement(
          type,
          key,
          ref,
          self,
          source,
          ReactCurrentOwner.current,
          props
        )
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(
          oldElement.type,
          newKey,
          oldElement.ref,
          oldElement._self,
          oldElement._source,
          oldElement._owner,
          oldElement.props
        )
        return newElement
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */

      function cloneElement(element, config, children) {
        if (element === null || element === undefined) {
          throw new Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              element +
              '.'
          )
        }
        var propName // Original props are copied

        var props = assign({}, element.props) // Reserved names are extracted

        var key = element.key
        var ref = element.ref // Self is preserved since the owner is preserved.

        var self = element._self // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source // Owner will be preserved, unless ref is overridden

        var owner = element._owner
        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref
            owner = ReactCurrentOwner.current
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key)
            }
            key = '' + config.key
          } // Remaining properties override existing props

          var defaultProps
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps
          }
          for (propName in config) {
            if (
              hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName)
            ) {
              if (
                config[propName] === undefined &&
                defaultProps !== undefined
              ) {
                // Resolve default props
                props[propName] = defaultProps[propName]
              } else {
                props[propName] = config[propName]
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.

        var childrenLength = arguments.length - 2
        if (childrenLength === 1) {
          props.children = children
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength)
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2]
          }
          props.children = childArray
        }
        return ReactElement(element.type, key, ref, self, source, owner, props)
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */

      function isValidElement(object) {
        return (
          typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        )
      }
      var SEPARATOR = '.'
      var SUBSEPARATOR = ':'
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g
        var escaperLookup = {
          '=': '=0',
          ':': '=2',
        }
        var escapedString = key.replace(escapeRegex, function (match) {
          return escaperLookup[match]
        })
        return '$' + escapedString
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false
      var userProvidedKeyEscapeRegex = /\/+/g
      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/')
      }
      /**
       * Generate a key string that identifies a element within a set.
       *
       * @param {*} element A element that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */

      function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (
          typeof element === 'object' &&
          element !== null &&
          element.key != null
        ) {
          // Explicit key
          {
            checkKeyStringCoercion(element.key)
          }
          return escape('' + element.key)
        } // Implicit key determined by the index in the set

        return index.toString(36)
      }
      function mapIntoArray(
        children,
        array,
        escapedPrefix,
        nameSoFar,
        callback
      ) {
        var type = typeof children
        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null
        }
        var invokeCallback = false
        if (children === null) {
          invokeCallback = true
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true
              break
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true
              }
          }
        }
        if (invokeCallback) {
          var _child = children
          var mappedChild = callback(_child) // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows:

          var childKey =
            nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar
          if (isArray(mappedChild)) {
            var escapedChildKey = ''
            if (childKey != null) {
              escapedChildKey = escapeUserProvidedKey(childKey) + '/'
            }
            mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
              return c
            })
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              {
                // The `if` statement here prevents auto-disabling of the safe
                // coercion ESLint rule, so we must manually disable it below.
                // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                if (
                  mappedChild.key &&
                  (!_child || _child.key !== mappedChild.key)
                ) {
                  checkKeyStringCoercion(mappedChild.key)
                }
              }
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                escapedPrefix +
                  // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key &&
                  (!_child || _child.key !== mappedChild.key)
                    ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                      // eslint-disable-next-line react-internal/safe-string-coercion
                      escapeUserProvidedKey('' + mappedChild.key) + '/'
                    : '') +
                  childKey
              )
            }
            array.push(mappedChild)
          }
          return 1
        }
        var child
        var nextName
        var subtreeCount = 0 // Count of children found in the current subtree.

        var nextNamePrefix =
          nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR
        if (isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i]
            nextName = nextNamePrefix + getElementKey(child, i)
            subtreeCount += mapIntoArray(
              child,
              array,
              escapedPrefix,
              nextName,
              callback
            )
          }
        } else {
          var iteratorFn = getIteratorFn(children)
          if (typeof iteratorFn === 'function') {
            var iterableChildren = children
            {
              // Warn about using Maps as children
              if (iteratorFn === iterableChildren.entries) {
                if (!didWarnAboutMaps) {
                  warn(
                    'Using Maps as children is not supported. ' +
                      'Use an array of keyed ReactElements instead.'
                  )
                }
                didWarnAboutMaps = true
              }
            }
            var iterator = iteratorFn.call(iterableChildren)
            var step
            var ii = 0
            while (!(step = iterator.next()).done) {
              child = step.value
              nextName = nextNamePrefix + getElementKey(child, ii++)
              subtreeCount += mapIntoArray(
                child,
                array,
                escapedPrefix,
                nextName,
                callback
              )
            }
          } else if (type === 'object') {
            // eslint-disable-next-line react-internal/safe-string-coercion
            var childrenString = String(children)
            throw new Error(
              'Objects are not valid as a React child (found: ' +
                (childrenString === '[object Object]'
                  ? 'object with keys {' +
                    Object.keys(children).join(', ') +
                    '}'
                  : childrenString) +
                '). ' +
                'If you meant to render a collection of children, use an array ' +
                'instead.'
            )
          }
        }
        return subtreeCount
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children
        }
        var result = []
        var count = 0
        mapIntoArray(children, result, '', '', function (child) {
          return func.call(context, child, count++)
        })
        return result
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */

      function countChildren(children) {
        var n = 0
        mapChildren(children, function () {
          n++ // Don't return anything
        })

        return n
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(
          children,
          function () {
            forEachFunc.apply(this, arguments) // Don't return anything.
          },
          forEachContext
        )
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */

      function toArray(children) {
        return (
          mapChildren(children, function (child) {
            return child
          }) || []
        )
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */

      function onlyChild(children) {
        if (!isValidElement(children)) {
          throw new Error(
            'React.Children.only expected to receive a single React element child.'
          )
        }
        return children
      }
      function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null,
        }
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context,
        }
        var hasWarnedAboutUsingNestedContextConsumers = false
        var hasWarnedAboutUsingConsumerProvider = false
        var hasWarnedAboutDisplayNameOnConsumer = false
        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
          } // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function get() {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true
                  error(
                    'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' +
                      'a future major release. Did you mean to render <Context.Provider> instead?'
                  )
                }
                return context.Provider
              },
              set: function set(_Provider) {
                context.Provider = _Provider
              },
            },
            _currentValue: {
              get: function get() {
                return context._currentValue
              },
              set: function set(_currentValue) {
                context._currentValue = _currentValue
              },
            },
            _currentValue2: {
              get: function get() {
                return context._currentValue2
              },
              set: function set(_currentValue2) {
                context._currentValue2 = _currentValue2
              },
            },
            _threadCount: {
              get: function get() {
                return context._threadCount
              },
              set: function set(_threadCount) {
                context._threadCount = _threadCount
              },
            },
            Consumer: {
              get: function get() {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true
                  error(
                    'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' +
                      'a future major release. Did you mean to render <Context.Consumer> instead?'
                  )
                }
                return context.Consumer
              },
            },
            displayName: {
              get: function get() {
                return context.displayName
              },
              set: function set(displayName) {
                if (!hasWarnedAboutDisplayNameOnConsumer) {
                  warn(
                    'Setting `displayName` on Context.Consumer has no effect. ' +
                      "You should set it directly on the context with Context.displayName = '%s'.",
                    displayName
                  )
                  hasWarnedAboutDisplayNameOnConsumer = true
                }
              },
            },
          }) // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer
        }
        {
          context._currentRenderer = null
          context._currentRenderer2 = null
        }
        return context
      }
      var Uninitialized = -1
      var Pending = 0
      var Resolved = 1
      var Rejected = 2
      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result
          var thenable = ctor() // Transition to the next state.
          // This might throw either because it's missing or throws. If so, we treat it
          // as still uninitialized and try again next time. Which is the same as what
          // happens if the ctor or any wrappers processing the ctor throws. This might
          // end up fixing it if the resolution was a concurrency bug.

          thenable.then(
            function (moduleObject) {
              if (
                payload._status === Pending ||
                payload._status === Uninitialized
              ) {
                // Transition to the next state.
                var resolved = payload
                resolved._status = Resolved
                resolved._result = moduleObject
              }
            },
            function (error) {
              if (
                payload._status === Pending ||
                payload._status === Uninitialized
              ) {
                // Transition to the next state.
                var rejected = payload
                rejected._status = Rejected
                rejected._result = error
              }
            }
          )
          if (payload._status === Uninitialized) {
            // In case, we're still uninitialized, then we're waiting for the thenable
            // to resolve. Set it as pending in the meantime.
            var pending = payload
            pending._status = Pending
            pending._result = thenable
          }
        }
        if (payload._status === Resolved) {
          var moduleObject = payload._result
          {
            if (moduleObject === undefined) {
              error(
                'lazy: Expected the result of a dynamic imp' +
                  'ort() call. ' +
                  'Instead received: %s\n\nYour code should look like: \n  ' +
                  // Break up imports to avoid accidentally parsing them as dependencies.
                  'const MyComponent = lazy(() => imp' +
                  "ort('./MyComponent'))\n\n" +
                  'Did you accidentally put curly braces around the import?',
                moduleObject
              )
            }
          }
          {
            if (!('default' in moduleObject)) {
              error(
                'lazy: Expected the result of a dynamic imp' +
                  'ort() call. ' +
                  'Instead received: %s\n\nYour code should look like: \n  ' +
                  // Break up imports to avoid accidentally parsing them as dependencies.
                  'const MyComponent = lazy(() => imp' +
                  "ort('./MyComponent'))",
                moduleObject
              )
            }
          }
          return moduleObject.default
        } else {
          throw payload._result
        }
      }
      function lazy(ctor) {
        var payload = {
          // We use these fields to store the result.
          _status: Uninitialized,
          _result: ctor,
        }
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer,
        }
        {
          // In production, this would just set it on the object.
          var defaultProps
          var propTypes // $FlowFixMe

          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function get() {
                return defaultProps
              },
              set: function set(newDefaultProps) {
                error(
                  'React.lazy(...): It is not supported to assign `defaultProps` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.'
                )
                defaultProps = newDefaultProps // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true,
                })
              },
            },
            propTypes: {
              configurable: true,
              get: function get() {
                return propTypes
              },
              set: function set(newPropTypes) {
                error(
                  'React.lazy(...): It is not supported to assign `propTypes` to ' +
                    'a lazy component import. Either specify them where the component ' +
                    'is defined, or create a wrapping component around it.'
                )
                propTypes = newPropTypes // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true,
                })
              },
            },
          })
        }
        return lazyType
      }
      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error(
              'forwardRef requires a render function but received a `memo` ' +
                'component. Instead of forwardRef(memo(...)), use ' +
                'memo(forwardRef(...)).'
            )
          } else if (typeof render !== 'function') {
            error(
              'forwardRef requires a render function but was given %s.',
              render === null ? 'null' : typeof render
            )
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error(
                'forwardRef render functions accept exactly two parameters: props and ref. %s',
                render.length === 1
                  ? 'Did you forget to use the ref parameter?'
                  : 'Any additional parameter will be undefined.'
              )
            }
          }
          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error(
                'forwardRef render functions do not support propTypes or defaultProps. ' +
                  'Did you accidentally pass a React component?'
              )
            }
          }
        }
        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render,
        }
        {
          var ownName
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function get() {
              return ownName
            },
            set: function set(name) {
              ownName = name // The inner component shouldn't inherit this display name in most cases,
              // because the component may be used elsewhere.
              // But it's nice for anonymous functions to inherit the name,
              // so that our component-stack generation logic will display their frames.
              // An anonymous function generally suggests a pattern like:
              //   React.forwardRef((props, ref) => {...});
              // This kind of inner function is not used elsewhere so the side effect is okay.

              if (!render.name && !render.displayName) {
                render.displayName = name
              }
            },
          })
        }
        return elementType
      }
      var REACT_MODULE_REFERENCE
      {
        REACT_MODULE_REFERENCE = Symbol.for('react.module.reference')
      }
      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

        if (
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_PROFILER_TYPE ||
          enableDebugTracing ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          enableLegacyHidden ||
          type === REACT_OFFSCREEN_TYPE ||
          enableScopeAPI ||
          enableCacheElement ||
          enableTransitionTracing
        ) {
          return true
        }
        if (typeof type === 'object' && type !== null) {
          if (
            type.$$typeof === REACT_LAZY_TYPE ||
            type.$$typeof === REACT_MEMO_TYPE ||
            type.$$typeof === REACT_PROVIDER_TYPE ||
            type.$$typeof === REACT_CONTEXT_TYPE ||
            type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE ||
            type.getModuleId !== undefined
          ) {
            return true
          }
        }
        return false
      }
      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error(
              'memo: The first argument must be a component. Instead ' +
                'received: %s',
              type === null ? 'null' : typeof type
            )
          }
        }
        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare,
        }
        {
          var ownName
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function get() {
              return ownName
            },
            set: function set(name) {
              ownName = name // The inner component shouldn't inherit this display name in most cases,
              // because the component may be used elsewhere.
              // But it's nice for anonymous functions to inherit the name,
              // so that our component-stack generation logic will display their frames.
              // An anonymous function generally suggests a pattern like:
              //   React.memo((props) => {...});
              // This kind of inner function is not used elsewhere so the side effect is okay.

              if (!type.name && !type.displayName) {
                type.displayName = name
              }
            },
          })
        }
        return elementType
      }
      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current
        {
          if (dispatcher === null) {
            error(
              'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' +
                ' one of the following reasons:\n' +
                '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' +
                '2. You might be breaking the Rules of Hooks\n' +
                '3. You might have more than one copy of React in the same app\n' +
                'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
            )
          }
        } // Will result in a null access error if accessed outside render phase. We
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.

        return dispatcher
      }
      function useContext(Context) {
        var dispatcher = resolveDispatcher()
        {
          // TODO: add a more generic warning for invalid values.
          if (Context._context !== undefined) {
            var realContext = Context._context // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error(
                'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' +
                  'removed in a future major release. Did you mean to call useContext(Context) instead?'
              )
            } else if (realContext.Provider === Context) {
              error(
                'Calling useContext(Context.Provider) is not supported. ' +
                  'Did you mean to call useContext(Context) instead?'
              )
            }
          }
        }
        return dispatcher.useContext(Context)
      }
      function useState(initialState) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useState(initialState)
      }
      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useReducer(reducer, initialArg, init)
      }
      function useRef(initialValue) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useRef(initialValue)
      }
      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useEffect(create, deps)
      }
      function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useInsertionEffect(create, deps)
      }
      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useLayoutEffect(create, deps)
      }
      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useCallback(callback, deps)
      }
      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useMemo(create, deps)
      }
      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useImperativeHandle(ref, create, deps)
      }
      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher()
          return dispatcher.useDebugValue(value, formatterFn)
        }
      }
      function useTransition() {
        var dispatcher = resolveDispatcher()
        return dispatcher.useTransition()
      }
      function useDeferredValue(value) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useDeferredValue(value)
      }
      function useId() {
        var dispatcher = resolveDispatcher()
        return dispatcher.useId()
      }
      function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher()
        return dispatcher.useSyncExternalStore(
          subscribe,
          getSnapshot,
          getServerSnapshot
        )
      }

      // Helpers to patch console.logs to avoid logging during side-effect free
      // replaying on render function. This currently only patches the object
      // lazily which won't cover if the log function was extracted eagerly.
      // We could also eagerly patch the method.
      var disabledDepth = 0
      var prevLog
      var prevInfo
      var prevWarn
      var prevError
      var prevGroup
      var prevGroupCollapsed
      var prevGroupEnd
      function disabledLog() {}
      disabledLog.__reactDisabledLog = true
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            prevLog = console.log
            prevInfo = console.info
            prevWarn = console.warn
            prevError = console.error
            prevGroup = console.group
            prevGroupCollapsed = console.groupCollapsed
            prevGroupEnd = console.groupEnd // https://github.com/facebook/react/issues/19099

            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true,
            } // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props,
            })
            /* eslint-enable react-internal/no-production-logging */
          }

          disabledDepth++
        }
      }
      function reenableLogs() {
        {
          disabledDepth--
          if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */
            var props = {
              configurable: true,
              enumerable: true,
              writable: true,
            } // $FlowFixMe Flow thinks console is immutable.

            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog,
              }),
              info: assign({}, props, {
                value: prevInfo,
              }),
              warn: assign({}, props, {
                value: prevWarn,
              }),
              error: assign({}, props, {
                value: prevError,
              }),
              group: assign({}, props, {
                value: prevGroup,
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed,
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd,
              }),
            })
            /* eslint-enable react-internal/no-production-logging */
          }

          if (disabledDepth < 0) {
            error(
              'disabledDepth fell below zero. ' +
                'This is a bug in React. Please file an issue.'
            )
          }
        }
      }
      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher
      var prefix
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === undefined) {
            // Extract the VM specific prefix used by each line.
            try {
              throw Error()
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/)
              prefix = (match && match[1]) || ''
            }
          } // We use the prefix to ensure our stacks line up with native stack frames.

          return '\n' + prefix + name
        }
      }
      var reentry = false
      var componentFrameCache
      {
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map
        componentFrameCache = new PossiblyWeakMap()
      }
      function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) {
          return ''
        }
        {
          var frame = componentFrameCache.get(fn)
          if (frame !== undefined) {
            return frame
          }
        }
        var control
        reentry = true
        var previousPrepareStackTrace = Error.prepareStackTrace // $FlowFixMe It does accept undefined.

        Error.prepareStackTrace = undefined
        var previousDispatcher
        {
          previousDispatcher = ReactCurrentDispatcher$1.current // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher$1.current = null
          disableLogs()
        }
        try {
          // This should throw.
          if (construct) {
            // Something should be setting the props in the constructor.
            var Fake = function Fake() {
              throw Error()
            } // $FlowFixMe

            Object.defineProperty(Fake.prototype, 'props', {
              set: function set() {
                // We use a throwing setter instead of frozen or non-writable props
                // because that won't throw in a non-strict mode function.
                throw Error()
              },
            })
            if (typeof Reflect === 'object' && Reflect.construct) {
              // We construct a different control for this case to include any extra
              // frames added by the construct call.
              try {
                Reflect.construct(Fake, [])
              } catch (x) {
                control = x
              }
              Reflect.construct(fn, [], Fake)
            } else {
              try {
                Fake.call()
              } catch (x) {
                control = x
              }
              fn.call(Fake.prototype)
            }
          } else {
            try {
              throw Error()
            } catch (x) {
              control = x
            }
            fn()
          }
        } catch (sample) {
          // This is inlined manually because closure doesn't do it for us.
          if (sample && control && typeof sample.stack === 'string') {
            // This extracts the first frame from the sample that isn't also in the control.
            // Skipping one frame that we assume is the frame that calls the two.
            var sampleLines = sample.stack.split('\n')
            var controlLines = control.stack.split('\n')
            var s = sampleLines.length - 1
            var c = controlLines.length - 1
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              // We expect at least one stack frame to be shared.
              // Typically this will be the root most one. However, stack frames may be
              // cut off due to maximum stack limits. In this case, one maybe cut off
              // earlier than the other. We assume that the sample is longer or the same
              // and there for cut off earlier. So we should find the root most frame in
              // the sample somewhere in the control.
              c--
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              // Next we find the first one that isn't the same which should be the
              // frame that called our sample function and the control.
              if (sampleLines[s] !== controlLines[c]) {
                // In V8, the first line is describing the message but other VMs don't.
                // If we're about to return the first line, and the control is also on the same
                // line, that's a pretty good indicator that our sample threw at same line as
                // the control. I.e. before we entered the sample frame. So we ignore this result.
                // This can happen if you passed a class to function component, or non-function.
                if (s !== 1 || c !== 1) {
                  do {
                    s--
                    c-- // We may still have similar intermediate frames from the construct call.
                    // The next one that isn't the same should be our match though.

                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                      var _frame =
                        '\n' + sampleLines[s].replace(' at new ', ' at ') // If our component frame is labeled "<anonymous>"
                      // but we have a user-provided "displayName"
                      // splice it in to make the stack more readable.

                      if (fn.displayName && _frame.includes('<anonymous>')) {
                        _frame = _frame.replace('<anonymous>', fn.displayName)
                      }
                      {
                        if (typeof fn === 'function') {
                          componentFrameCache.set(fn, _frame)
                        }
                      } // Return the line we found.

                      return _frame
                    }
                  } while (s >= 1 && c >= 0)
                }
                break
              }
            }
          }
        } finally {
          reentry = false
          {
            ReactCurrentDispatcher$1.current = previousDispatcher
            reenableLogs()
          }
          Error.prepareStackTrace = previousPrepareStackTrace
        } // Fallback to just using the name if we couldn't make it throw.

        var name = fn ? fn.displayName || fn.name : ''
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : ''
        {
          if (typeof fn === 'function') {
            componentFrameCache.set(fn, syntheticFrame)
          }
        }
        return syntheticFrame
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false)
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype
        return !!(prototype && prototype.isReactComponent)
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return ''
        }
        if (typeof type === 'function') {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type))
          }
        }
        if (typeof type === 'string') {
          return describeBuiltInComponentFrame(type)
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense')
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList')
        }
        if (typeof type === 'object') {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render)
            case REACT_MEMO_TYPE:
              // Memo may contain any component type so we recursively resolve it.
              return describeUnknownElementTypeFrameInDEV(
                type.type,
                source,
                ownerFn
              )
            case REACT_LAZY_TYPE: {
              var lazyComponent = type
              var payload = lazyComponent._payload
              var init = lazyComponent._init
              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(
                  init(payload),
                  source,
                  ownerFn
                )
              } catch (x) {}
            }
          }
        }
        return ''
      }
      var loggedTypeFailures = {}
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner
            var stack = describeUnknownElementTypeFrameInDEV(
              element.type,
              element._source,
              owner ? owner.type : null
            )
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack)
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null)
          }
        }
      }
      function checkPropTypes(
        typeSpecs,
        values,
        location,
        componentName,
        element
      ) {
        {
          // $FlowFixMe This is okay but Flow doesn't know it.
          var has = Function.call.bind(hasOwnProperty)
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$1 = void 0 // Prop type validation may throw. In case they do, we don't want to
              // fail the render phase where it didn't fail before. So we log it.
              // After these have been cleaned up, we'll let them throw.

              try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                  // eslint-disable-next-line react-internal/prod-error-codes
                  var err = Error(
                    (componentName || 'React class') +
                      ': ' +
                      location +
                      ' type `' +
                      typeSpecName +
                      '` is invalid; ' +
                      'it must be a function, usually from the `prop-types` package, but received `' +
                      typeof typeSpecs[typeSpecName] +
                      '`.' +
                      'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                  )
                  err.name = 'Invariant Violation'
                  throw err
                }
                error$1 = typeSpecs[typeSpecName](
                  values,
                  typeSpecName,
                  componentName,
                  location,
                  null,
                  'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                )
              } catch (ex) {
                error$1 = ex
              }
              if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element)
                error(
                  '%s: type specification of %s' +
                    ' `%s` is invalid; the type checker ' +
                    'function must return `null` or an `Error` but returned a %s. ' +
                    'You may have forgotten to pass an argument to the type checker ' +
                    'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                    'shape all require an argument).',
                  componentName || 'React class',
                  location,
                  typeSpecName,
                  typeof error$1
                )
                setCurrentlyValidatingElement(null)
              }
              if (
                error$1 instanceof Error &&
                !(error$1.message in loggedTypeFailures)
              ) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true
                setCurrentlyValidatingElement(element)
                error('Failed %s type: %s', location, error$1.message)
                setCurrentlyValidatingElement(null)
              }
            }
          }
        }
      }
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner
            var stack = describeUnknownElementTypeFrameInDEV(
              element.type,
              element._source,
              owner ? owner.type : null
            )
            setExtraStackFrame(stack)
          } else {
            setExtraStackFrame(null)
          }
        }
      }
      var propTypesMisspellWarningShown
      {
        propTypesMisspellWarningShown = false
      }
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentNameFromType(ReactCurrentOwner.current.type)
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.'
          }
        }
        return ''
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '')
          var lineNumber = source.lineNumber
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
        }
        return ''
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source)
        }
        return ''
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */

      var ownerHasKeyUseWarning = {}
      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum()
        if (!info) {
          var parentName =
            typeof parentType === 'string'
              ? parentType
              : parentType.displayName || parentType.name
          if (parentName) {
            info =
              '\n\nCheck the top-level render call using <' + parentName + '>.'
          }
        }
        return info
      }
      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */

      function validateExplicitKey(element, parentType) {
        if (
          !element._store ||
          element._store.validated ||
          element.key != null
        ) {
          return
        }
        element._store.validated = true
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType)
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = ''
        if (
          element &&
          element._owner &&
          element._owner !== ReactCurrentOwner.current
        ) {
          // Give the component that originally created this child.
          childOwner =
            ' It was passed a child from ' +
            getComponentNameFromType(element._owner.type) +
            '.'
        }
        {
          setCurrentlyValidatingElement$1(element)
          error(
            'Each child in a list should have a unique "key" prop.' +
              '%s%s See https://reactjs.org/link/warning-keys for more information.',
            currentComponentErrorInfo,
            childOwner
          )
          setCurrentlyValidatingElement$1(null)
        }
      }
      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */

      function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') {
          return
        }
        if (isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i]
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType)
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node)
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node)
              var step
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType)
                }
              }
            }
          }
        }
      }
      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */

      function validatePropTypes(element) {
        {
          var type = element.type
          if (type === null || type === undefined || typeof type === 'string') {
            return
          }
          var propTypes
          if (typeof type === 'function') {
            propTypes = type.propTypes
          } else if (
            typeof type === 'object' &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE ||
              // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)
          ) {
            propTypes = type.propTypes
          } else {
            return
          }
          if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type)
            checkPropTypes(propTypes, element.props, 'prop', name, element)
          } else if (
            type.PropTypes !== undefined &&
            !propTypesMisspellWarningShown
          ) {
            propTypesMisspellWarningShown = true // Intentionally inside to avoid triggering lazy initializers:

            var _name = getComponentNameFromType(type)
            error(
              'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
              _name || 'Unknown'
            )
          }
          if (
            typeof type.getDefaultProps === 'function' &&
            !type.getDefaultProps.isReactClassApproved
          ) {
            error(
              'getDefaultProps is only used on classic React.createClass ' +
                'definitions. Use a static property named `defaultProps` instead.'
            )
          }
        }
      }
      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */

      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props)
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i]
            if (key !== 'children' && key !== 'key') {
              setCurrentlyValidatingElement$1(fragment)
              error(
                'Invalid prop `%s` supplied to `React.Fragment`. ' +
                  'React.Fragment can only have `key` and `children` props.',
                key
              )
              setCurrentlyValidatingElement$1(null)
              break
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment)
            error('Invalid attribute `ref` supplied to `React.Fragment`.')
            setCurrentlyValidatingElement$1(null)
          }
        }
      }
      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type) // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = ''
          if (
            type === undefined ||
            (typeof type === 'object' &&
              type !== null &&
              Object.keys(type).length === 0)
          ) {
            info +=
              ' You likely forgot to export your component from the file ' +
              "it's defined in, or you might have mixed up default and named imports."
          }
          var sourceInfo = getSourceInfoErrorAddendumForProps(props)
          if (sourceInfo) {
            info += sourceInfo
          } else {
            info += getDeclarationErrorAddendum()
          }
          var typeString
          if (type === null) {
            typeString = 'null'
          } else if (isArray(type)) {
            typeString = 'array'
          } else if (
            type !== undefined &&
            type.$$typeof === REACT_ELEMENT_TYPE
          ) {
            typeString =
              '<' + (getComponentNameFromType(type.type) || 'Unknown') + ' />'
            info =
              ' Did you accidentally export a JSX literal instead of a component?'
          } else {
            typeString = typeof type
          }
          {
            error(
              'React.createElement: type is invalid -- expected a string (for ' +
                'built-in components) or a class/function (for composite ' +
                'components) but got: %s.%s',
              typeString,
              info
            )
          }
        }
        var element = createElement.apply(this, arguments) // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)

        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type)
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element)
        } else {
          validatePropTypes(element)
        }
        return element
      }
      var didWarnAboutDeprecatedCreateFactory = false
      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type)
        validatedFactory.type = type
        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true
            warn(
              'React.createFactory() is deprecated and will be removed in ' +
                'a future major release. Consider using JSX ' +
                'or use React.createElement() directly instead.'
            )
          } // Legacy hook: remove it

          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function get() {
              warn(
                'Factory.type is deprecated. Access the class directly ' +
                  'before passing it to createFactory.'
              )
              Object.defineProperty(this, 'type', {
                value: type,
              })
              return type
            },
          })
        }
        return validatedFactory
      }
      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments)
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type)
        }
        validatePropTypes(newElement)
        return newElement
      }
      function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition
        ReactCurrentBatchConfig.transition = {}
        var currentTransition = ReactCurrentBatchConfig.transition
        {
          ReactCurrentBatchConfig.transition._updatedFibers = new Set()
        }
        try {
          scope()
        } finally {
          ReactCurrentBatchConfig.transition = prevTransition
          {
            if (prevTransition === null && currentTransition._updatedFibers) {
              var updatedFibersCount = currentTransition._updatedFibers.size
              if (updatedFibersCount > 10) {
                warn(
                  'Detected a large number of updates inside startTransition. ' +
                    'If this is due to a subscription please re-write it to use React provided hooks. ' +
                    'Otherwise concurrent mode guarantees are off the table.'
                )
              }
              currentTransition._updatedFibers.clear()
            }
          }
        }
      }
      var didWarnAboutMessageChannel = false
      var enqueueTaskImpl = null
      function enqueueTask(task) {
        if (enqueueTaskImpl === null) {
          try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ('require' + Math.random()).slice(0, 7)
            var nodeRequire = module && module[requireString] // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.

            enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate
          } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function enqueueTaskImpl(callback) {
              {
                if (didWarnAboutMessageChannel === false) {
                  didWarnAboutMessageChannel = true
                  if (typeof MessageChannel === 'undefined') {
                    error(
                      'This browser does not have a MessageChannel implementation, ' +
                        'so enqueuing tasks via await act(async () => ...) will fail. ' +
                        'Please file an issue at https://github.com/facebook/react/issues ' +
                        'if you encounter this warning.'
                    )
                  }
                }
              }
              var channel = new MessageChannel()
              channel.port1.onmessage = callback
              channel.port2.postMessage(undefined)
            }
          }
        }
        return enqueueTaskImpl(task)
      }
      var actScopeDepth = 0
      var didWarnNoAwaitAct = false
      function act(callback) {
        {
          // `act` calls can be nested, so we track the depth. This represents the
          // number of `act` scopes on the stack.
          var prevActScopeDepth = actScopeDepth
          actScopeDepth++
          if (ReactCurrentActQueue.current === null) {
            // This is the outermost `act` scope. Initialize the queue. The reconciler
            // will detect the queue and use it instead of Scheduler.
            ReactCurrentActQueue.current = []
          }
          var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy
          var result
          try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true
            result = callback() // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.

            if (
              !prevIsBatchingLegacy &&
              ReactCurrentActQueue.didScheduleLegacyUpdate
            ) {
              var queue = ReactCurrentActQueue.current
              if (queue !== null) {
                ReactCurrentActQueue.didScheduleLegacyUpdate = false
                flushActQueue(queue)
              }
            }
          } catch (error) {
            popActScope(prevActScopeDepth)
            throw error
          } finally {
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy
          }
          if (
            result !== null &&
            typeof result === 'object' &&
            typeof result.then === 'function'
          ) {
            var thenableResult = result // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.

            var wasAwaited = false
            var thenable = {
              then: function then(resolve, reject) {
                wasAwaited = true
                thenableResult.then(
                  function (returnValue) {
                    popActScope(prevActScopeDepth)
                    if (actScopeDepth === 0) {
                      // We've exited the outermost act scope. Recursively flush the
                      // queue until there's no remaining work.
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject)
                    } else {
                      resolve(returnValue)
                    }
                  },
                  function (error) {
                    // The callback threw an error.
                    popActScope(prevActScopeDepth)
                    reject(error)
                  }
                )
              },
            }
            {
              if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                // eslint-disable-next-line no-undef
                Promise.resolve()
                  .then(function () {})
                  .then(function () {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true
                      error(
                        'You called act(async () => ...) without await. ' +
                          'This could lead to unexpected testing behaviour, ' +
                          'interleaving multiple act calls and mixing their ' +
                          'scopes. ' +
                          'You should - await act(async () => ...);'
                      )
                    }
                  })
              }
            }
            return thenable
          } else {
            var returnValue = result // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.

            popActScope(prevActScopeDepth)
            if (actScopeDepth === 0) {
              // Exiting the outermost act scope. Flush the queue.
              var _queue = ReactCurrentActQueue.current
              if (_queue !== null) {
                flushActQueue(_queue)
                ReactCurrentActQueue.current = null
              } // Return a thenable. If the user awaits it, we'll flush again in
              // case additional work was scheduled by a microtask.

              var _thenable = {
                then: function then(resolve, reject) {
                  // Confirm we haven't re-entered another `act` scope, in case
                  // the user does something weird like await the thenable
                  // multiple times.
                  if (ReactCurrentActQueue.current === null) {
                    // Recursively flush the queue until there's no remaining work.
                    ReactCurrentActQueue.current = []
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject)
                  } else {
                    resolve(returnValue)
                  }
                },
              }
              return _thenable
            } else {
              // Since we're inside a nested `act` scope, the returned thenable
              // immediately resolves. The outer scope will flush the queue.
              var _thenable2 = {
                then: function then(resolve, reject) {
                  resolve(returnValue)
                },
              }
              return _thenable2
            }
          }
        }
      }
      function popActScope(prevActScopeDepth) {
        {
          if (prevActScopeDepth !== actScopeDepth - 1) {
            error(
              'You seem to have overlapping act() calls, this is not supported. ' +
                'Be sure to await previous act() calls before making a new one. '
            )
          }
          actScopeDepth = prevActScopeDepth
        }
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        {
          var queue = ReactCurrentActQueue.current
          if (queue !== null) {
            try {
              flushActQueue(queue)
              enqueueTask(function () {
                if (queue.length === 0) {
                  // No additional work was scheduled. Finish.
                  ReactCurrentActQueue.current = null
                  resolve(returnValue)
                } else {
                  // Keep flushing work until there's none left.
                  recursivelyFlushAsyncActWork(returnValue, resolve, reject)
                }
              })
            } catch (error) {
              reject(error)
            }
          } else {
            resolve(returnValue)
          }
        }
      }
      var isFlushing = false
      function flushActQueue(queue) {
        {
          if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true
            var i = 0
            try {
              for (; i < queue.length; i++) {
                var callback = queue[i]
                do {
                  callback = callback(true)
                } while (callback !== null)
              }
              queue.length = 0
            } catch (error) {
              // If something throws, leave the remaining callbacks on the queue.
              queue = queue.slice(i + 1)
              throw error
            } finally {
              isFlushing = false
            }
          }
        }
      }
      var createElement$1 = createElementWithValidation
      var cloneElement$1 = cloneElementWithValidation
      var createFactory = createFactoryWithValidation
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild,
      }
      exports.Children = Children
      exports.Component = Component
      exports.Fragment = REACT_FRAGMENT_TYPE
      exports.Profiler = REACT_PROFILER_TYPE
      exports.PureComponent = PureComponent
      exports.StrictMode = REACT_STRICT_MODE_TYPE
      exports.Suspense = REACT_SUSPENSE_TYPE
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        ReactSharedInternals
      exports.cloneElement = cloneElement$1
      exports.createContext = createContext
      exports.createElement = createElement$1
      exports.createFactory = createFactory
      exports.createRef = createRef
      exports.forwardRef = forwardRef
      exports.isValidElement = isValidElement
      exports.lazy = lazy
      exports.memo = memo
      exports.startTransition = startTransition
      exports.unstable_act = act
      exports.useCallback = useCallback
      exports.useContext = useContext
      exports.useDebugValue = useDebugValue
      exports.useDeferredValue = useDeferredValue
      exports.useEffect = useEffect
      exports.useId = useId
      exports.useImperativeHandle = useImperativeHandle
      exports.useInsertionEffect = useInsertionEffect
      exports.useLayoutEffect = useLayoutEffect
      exports.useMemo = useMemo
      exports.useReducer = useReducer
      exports.useRef = useRef
      exports.useState = useState
      exports.useSyncExternalStore = useSyncExternalStore
      exports.useTransition = useTransition
      exports.version = ReactVersion
      /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
          'function'
      ) {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
      }
    })()
  }

  var react_development = /*#__PURE__*/ Object.freeze({
    __proto__: null,
  })

  var require$$0 = /*@__PURE__*/ getAugmentedNamespace(react_development)

  ;(function (module) {
    {
      module.exports = require$$0
    }
  })(react)

  var React = /*@__PURE__*/ getDefaultExportFromCjs(reactExports)

  function styleInject(css, ref) {
    if (ref === void 0) ref = {}
    var insertAt = ref.insertAt
    if (!css || typeof document === 'undefined') {
      return
    }
    var head = document.head || document.getElementsByTagName('head')[0]
    var style = document.createElement('style')
    style.type = 'text/css'
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild)
      } else {
        head.appendChild(style)
      }
    } else {
      head.appendChild(style)
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
  }

  var css_248z =
    ".discord-button {\n  transition: all 0.218s;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dadce0;\n  border-radius: 4px;\n  color: #3c4043;\n  cursor: pointer;\n  text-decoration: none;\n  font-family: 'Google Sans', arial, sans-serif;\n  font-size: 12px;\n  height: 40px;\n  letter-spacing: 0.25px;\n  outline: none;\n  overflow: hidden;\n  padding: 0 12px;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  width: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.discord-button:hover {\n  box-shadow: none;\n  border-color: #d2e3fc;\n  background-color: rgba(66, 133, 244, 0.04);\n  outline: none;\n  transition: all 0.218s;\n}\n\n.discord-button--small {\n  font-size: 12px;\n  padding: 0 16px;\n}\n.discord-button--medium {\n  font-size: 14px;\n  padding: 0 20px;\n}\n.discord-button--large {\n  font-size: 16px;\n  padding: 0 24px;\n}\n"
  styleInject(css_248z)

  const _excluded = [
    'discordClientId',
    'redirectUri',
    'responseType',
    'scopes',
    'debug',
    'backgroundColor',
    'size',
    'label',
    'onClick',
    'newTab',
  ]

  // Example DISCORD_WEB_URL
  // https://discord.com/api/oauth2/authorize?client_id=1077903194962796556&redirect_uri=http%3A%2F%2Flocalhost%3A8910%2F.redwood%2Ffunctions%2FdiscordAuth&response_type=code&scope=identify%20email

  const DISCORD_BASE_OAUTH_URL = 'https://discord.com/api/oauth2/authorize'
  const DiscordLogin = (_ref) => {
    let {
        discordClientId,
        redirectUri,
        responseType = 'code',
        scopes = ['identify', 'email'],
        debug = false,
        backgroundColor,
        size,
        label,
        onClick,
        newTab = false,
      } = _ref,
      props = _objectWithoutProperties(_ref, _excluded)
    const params = new URLSearchParams({
      client_id: discordClientId,
      redirect_uri: redirectUri,
      response_type: responseType,
      scope: scopes.join(' '),
    })
    if (debug) {
      console.log('Parameter string: '.concat(params.toString()))
    }
    const url = new URL(DISCORD_BASE_OAUTH_URL)
    url.search = params
    if (debug) {
      console.log('Final URL: '.concat(url, '}'))
    }
    const defaultOnClick = (e) => {
      e.preventDefault()
      // window.location.href = url
      newTab ? window.open(url, '_blank') : window.open(url)
    }
    return /*#__PURE__*/ React.createElement(
      'button',
      _extends(
        {
          type: 'button',
          onClick: onClick || defaultOnClick,
          className: ['discord-button', 'discord-button--'.concat(size)].join(
            ' '
          ),
          style: backgroundColor && {
            backgroundColor,
          },
        },
        props
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            width: 25,
            height: 25,
            marginRight: 5,
          },
        },
        /*#__PURE__*/ React.createElement(
          'svg',
          {
            id: 'Layer_1',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 245 240',
            fill: '#7289da',
          },
          /*#__PURE__*/ React.createElement('path', {
            className: 'st0',
            d: 'M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z',
          }),
          /*#__PURE__*/ React.createElement('path', {
            className: 'st0',
            d: 'M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z',
          })
        )
      ),
      /*#__PURE__*/ React.createElement(
        'span',
        null,
        label && label != '' ? label : 'Sign in with Discord'
      )
    )
  }

  exports.DiscordLogin = DiscordLogin
})
