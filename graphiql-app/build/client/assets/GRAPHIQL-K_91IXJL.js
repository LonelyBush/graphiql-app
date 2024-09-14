import { d as Ce, r as O, j as T } from './index-wWMGXTih.js';
import { d as W, R as ce } from './response-BYer4qt1.js';
import { u as be } from './react-redux-CHx4hV8O.js';
import { u as Le, B as Re } from './button-CmpeQtVi.js';
import { a as Fe } from './graphiql-history-slice-C9bI_IZu.js';
import { u as we } from './index-Dpa_0JzH.js';
import './iconBase-QCAFBzlY.js';
import './redux-toolkit.modern-C1Urj9PA.js';
function Q(e, t) {
  if (!!!e) throw new Error(t);
}
function Pe(e) {
  return typeof e == 'object' && e !== null;
}
function Ue(e, t) {
  if (!!!e) throw new Error('Unexpected invariant triggered.');
}
const Ve = /\r\n|[\n\r]/g;
function K(e, t) {
  let n = 0,
    s = 1;
  for (const i of e.body.matchAll(Ve)) {
    if ((typeof i.index == 'number' || Ue(!1), i.index >= t)) break;
    (n = i.index + i[0].length), (s += 1);
  }
  return { line: s, column: t + 1 - n };
}
function Be(e) {
  return me(e.source, K(e.source, e.start));
}
function me(e, t) {
  const n = e.locationOffset.column - 1,
    s = ''.padStart(n) + e.body,
    i = t.line - 1,
    r = e.locationOffset.line - 1,
    a = t.line + r,
    p = t.line === 1 ? n : 0,
    h = t.column + p,
    u = `${e.name}:${a}:${h}
`,
    f = s.split(/\r\n|[\n\r]/g),
    E = f[i];
  if (E.length > 120) {
    const m = Math.floor(h / 80),
      _ = h % 80,
      x = [];
    for (let D = 0; D < E.length; D += 80) x.push(E.slice(D, D + 80));
    return (
      u +
      le([
        [`${a} |`, x[0]],
        ...x.slice(1, m + 1).map((D) => ['|', D]),
        ['|', '^'.padStart(_)],
        ['|', x[m + 1]],
      ])
    );
  }
  return (
    u +
    le([
      [`${a - 1} |`, f[i - 1]],
      [`${a} |`, E],
      ['|', '^'.padStart(h)],
      [`${a + 1} |`, f[i + 1]],
    ])
  );
}
function le(e) {
  const t = e.filter(([s, i]) => i !== void 0),
    n = Math.max(...t.map(([s]) => s.length));
  return t.map(([s, i]) => s.padStart(n) + (i ? ' ' + i : '')).join(`
`);
}
function je(e) {
  const t = e[0];
  return t == null || 'kind' in t || 'length' in t
    ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5],
      }
    : t;
}
class ne extends Error {
  constructor(t, ...n) {
    var s, i, r;
    const {
      nodes: a,
      source: p,
      positions: h,
      path: u,
      originalError: f,
      extensions: E,
    } = je(n);
    super(t),
      (this.name = 'GraphQLError'),
      (this.path = u ?? void 0),
      (this.originalError = f ?? void 0),
      (this.nodes = ue(Array.isArray(a) ? a : a ? [a] : void 0));
    const m = ue(
      (s = this.nodes) === null || s === void 0
        ? void 0
        : s.map((x) => x.loc).filter((x) => x != null),
    );
    (this.source =
      p ??
      (m == null || (i = m[0]) === null || i === void 0 ? void 0 : i.source)),
      (this.positions = h ?? (m == null ? void 0 : m.map((x) => x.start))),
      (this.locations =
        h && p
          ? h.map((x) => K(p, x))
          : m == null
            ? void 0
            : m.map((x) => K(x.source, x.start)));
    const _ = Pe(f == null ? void 0 : f.extensions)
      ? f == null
        ? void 0
        : f.extensions
      : void 0;
    (this.extensions =
      (r = E ?? _) !== null && r !== void 0 ? r : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 },
      }),
      f != null && f.stack
        ? Object.defineProperty(this, 'stack', {
            value: f.stack,
            writable: !0,
            configurable: !0,
          })
        : Error.captureStackTrace
          ? Error.captureStackTrace(this, ne)
          : Object.defineProperty(this, 'stack', {
              value: Error().stack,
              writable: !0,
              configurable: !0,
            });
  }
  get [Symbol.toStringTag]() {
    return 'GraphQLError';
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc &&
          (t +=
            `

` + Be(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t +=
          `

` + me(this.source, n);
    return t;
  }
  toJSON() {
    const t = { message: this.message };
    return (
      this.locations != null && (t.locations = this.locations),
      this.path != null && (t.path = this.path),
      this.extensions != null &&
        Object.keys(this.extensions).length > 0 &&
        (t.extensions = this.extensions),
      t
    );
  }
}
function ue(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function v(e, t, n) {
  return new ne(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
class Me {
  constructor(t, n, s) {
    (this.start = t.start),
      (this.end = n.end),
      (this.startToken = t),
      (this.endToken = n),
      (this.source = s);
  }
  get [Symbol.toStringTag]() {
    return 'Location';
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class Te {
  constructor(t, n, s, i, r, a) {
    (this.kind = t),
      (this.start = n),
      (this.end = s),
      (this.line = i),
      (this.column = r),
      (this.value = a),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return 'Token';
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
const Ne = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: [
      'name',
      'variableDefinitions',
      'directives',
      'selectionSet',
    ],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: [
      'name',
      'variableDefinitions',
      'typeCondition',
      'directives',
      'selectionSet',
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: [
      'description',
      'name',
      'type',
      'defaultValue',
      'directives',
    ],
    InterfaceTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields'],
  },
  $e = new Set(Object.keys(Ne));
function pe(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == 'string' && $e.has(t);
}
var w;
(function (e) {
  (e.QUERY = 'query'),
    (e.MUTATION = 'mutation'),
    (e.SUBSCRIPTION = 'subscription');
})(w || (w = {}));
var ee;
(function (e) {
  (e.QUERY = 'QUERY'),
    (e.MUTATION = 'MUTATION'),
    (e.SUBSCRIPTION = 'SUBSCRIPTION'),
    (e.FIELD = 'FIELD'),
    (e.FRAGMENT_DEFINITION = 'FRAGMENT_DEFINITION'),
    (e.FRAGMENT_SPREAD = 'FRAGMENT_SPREAD'),
    (e.INLINE_FRAGMENT = 'INLINE_FRAGMENT'),
    (e.VARIABLE_DEFINITION = 'VARIABLE_DEFINITION'),
    (e.SCHEMA = 'SCHEMA'),
    (e.SCALAR = 'SCALAR'),
    (e.OBJECT = 'OBJECT'),
    (e.FIELD_DEFINITION = 'FIELD_DEFINITION'),
    (e.ARGUMENT_DEFINITION = 'ARGUMENT_DEFINITION'),
    (e.INTERFACE = 'INTERFACE'),
    (e.UNION = 'UNION'),
    (e.ENUM = 'ENUM'),
    (e.ENUM_VALUE = 'ENUM_VALUE'),
    (e.INPUT_OBJECT = 'INPUT_OBJECT'),
    (e.INPUT_FIELD_DEFINITION = 'INPUT_FIELD_DEFINITION');
})(ee || (ee = {}));
var l;
(function (e) {
  (e.NAME = 'Name'),
    (e.DOCUMENT = 'Document'),
    (e.OPERATION_DEFINITION = 'OperationDefinition'),
    (e.VARIABLE_DEFINITION = 'VariableDefinition'),
    (e.SELECTION_SET = 'SelectionSet'),
    (e.FIELD = 'Field'),
    (e.ARGUMENT = 'Argument'),
    (e.FRAGMENT_SPREAD = 'FragmentSpread'),
    (e.INLINE_FRAGMENT = 'InlineFragment'),
    (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
    (e.VARIABLE = 'Variable'),
    (e.INT = 'IntValue'),
    (e.FLOAT = 'FloatValue'),
    (e.STRING = 'StringValue'),
    (e.BOOLEAN = 'BooleanValue'),
    (e.NULL = 'NullValue'),
    (e.ENUM = 'EnumValue'),
    (e.LIST = 'ListValue'),
    (e.OBJECT = 'ObjectValue'),
    (e.OBJECT_FIELD = 'ObjectField'),
    (e.DIRECTIVE = 'Directive'),
    (e.NAMED_TYPE = 'NamedType'),
    (e.LIST_TYPE = 'ListType'),
    (e.NON_NULL_TYPE = 'NonNullType'),
    (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
    (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
    (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
    (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
    (e.FIELD_DEFINITION = 'FieldDefinition'),
    (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
    (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
    (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
    (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
    (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
    (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
    (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
    (e.SCHEMA_EXTENSION = 'SchemaExtension'),
    (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
    (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
    (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
    (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
    (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
    (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension');
})(l || (l = {}));
function te(e) {
  return e === 9 || e === 32;
}
function M(e) {
  return e >= 48 && e <= 57;
}
function xe(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function ye(e) {
  return xe(e) || e === 95;
}
function Ge(e) {
  return xe(e) || M(e) || e === 95;
}
function Ye(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    s = null,
    i = -1;
  for (let a = 0; a < e.length; ++a) {
    var r;
    const p = e[a],
      h = Je(p);
    h !== p.length &&
      ((s = (r = s) !== null && r !== void 0 ? r : a),
      (i = a),
      a !== 0 && h < n && (n = h));
  }
  return e
    .map((a, p) => (p === 0 ? a : a.slice(n)))
    .slice((t = s) !== null && t !== void 0 ? t : 0, i + 1);
}
function Je(e) {
  let t = 0;
  for (; t < e.length && te(e.charCodeAt(t)); ) ++t;
  return t;
}
function Qe(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    s = n.split(/\r\n|[\n\r]/g),
    i = s.length === 1,
    r =
      s.length > 1 &&
      s.slice(1).every((_) => _.length === 0 || te(_.charCodeAt(0))),
    a = n.endsWith('\\"""'),
    p = e.endsWith('"') && !a,
    h = e.endsWith('\\'),
    u = p || h,
    f = !i || e.length > 70 || u || r || a;
  let E = '';
  const m = i && te(e.charCodeAt(0));
  return (
    ((f && !m) || r) &&
      (E += `
`),
    (E += n),
    (f || u) &&
      (E += `
`),
    '"""' + E + '"""'
  );
}
var o;
(function (e) {
  (e.SOF = '<SOF>'),
    (e.EOF = '<EOF>'),
    (e.BANG = '!'),
    (e.DOLLAR = '$'),
    (e.AMP = '&'),
    (e.PAREN_L = '('),
    (e.PAREN_R = ')'),
    (e.SPREAD = '...'),
    (e.COLON = ':'),
    (e.EQUALS = '='),
    (e.AT = '@'),
    (e.BRACKET_L = '['),
    (e.BRACKET_R = ']'),
    (e.BRACE_L = '{'),
    (e.PIPE = '|'),
    (e.BRACE_R = '}'),
    (e.NAME = 'Name'),
    (e.INT = 'Int'),
    (e.FLOAT = 'Float'),
    (e.STRING = 'String'),
    (e.BLOCK_STRING = 'BlockString'),
    (e.COMMENT = 'Comment');
})(o || (o = {}));
class Xe {
  constructor(t) {
    const n = new Te(o.SOF, 0, 0, 0, 0);
    (this.source = t),
      (this.lastToken = n),
      (this.token = n),
      (this.line = 1),
      (this.lineStart = 0);
  }
  get [Symbol.toStringTag]() {
    return 'Lexer';
  }
  advance() {
    return (this.lastToken = this.token), (this.token = this.lookahead());
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== o.EOF)
      do
        if (t.next) t = t.next;
        else {
          const n = He(this, t.end);
          (t.next = n), (n.prev = t), (t = n);
        }
      while (t.kind === o.COMMENT);
    return t;
  }
}
function qe(e) {
  return (
    e === o.BANG ||
    e === o.DOLLAR ||
    e === o.AMP ||
    e === o.PAREN_L ||
    e === o.PAREN_R ||
    e === o.SPREAD ||
    e === o.COLON ||
    e === o.EQUALS ||
    e === o.AT ||
    e === o.BRACKET_L ||
    e === o.BRACKET_R ||
    e === o.BRACE_L ||
    e === o.PIPE ||
    e === o.BRACE_R
  );
}
function P(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function q(e, t) {
  return Ie(e.charCodeAt(t)) && ve(e.charCodeAt(t + 1));
}
function Ie(e) {
  return e >= 55296 && e <= 56319;
}
function ve(e) {
  return e >= 56320 && e <= 57343;
}
function R(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0) return o.EOF;
  if (n >= 32 && n <= 126) {
    const s = String.fromCodePoint(n);
    return s === '"' ? `'"'` : `"${s}"`;
  }
  return 'U+' + n.toString(16).toUpperCase().padStart(4, '0');
}
function I(e, t, n, s, i) {
  const r = e.line,
    a = 1 + n - e.lineStart;
  return new Te(t, n, s, r, a, i);
}
function He(e, t) {
  const n = e.source.body,
    s = n.length;
  let i = t;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    switch (r) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, (e.lineStart = i);
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i,
          ++e.line,
          (e.lineStart = i);
        continue;
      case 35:
        return ze(e, i);
      case 33:
        return I(e, o.BANG, i, i + 1);
      case 36:
        return I(e, o.DOLLAR, i, i + 1);
      case 38:
        return I(e, o.AMP, i, i + 1);
      case 40:
        return I(e, o.PAREN_L, i, i + 1);
      case 41:
        return I(e, o.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return I(e, o.SPREAD, i, i + 3);
        break;
      case 58:
        return I(e, o.COLON, i, i + 1);
      case 61:
        return I(e, o.EQUALS, i, i + 1);
      case 64:
        return I(e, o.AT, i, i + 1);
      case 91:
        return I(e, o.BRACKET_L, i, i + 1);
      case 93:
        return I(e, o.BRACKET_R, i, i + 1);
      case 123:
        return I(e, o.BRACE_L, i, i + 1);
      case 124:
        return I(e, o.PIPE, i, i + 1);
      case 125:
        return I(e, o.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34
          ? nt(e, i)
          : Ze(e, i);
    }
    if (M(r) || r === 45) return We(e, i, r);
    if (ye(r)) return it(e, i);
    throw v(
      e.source,
      i,
      r === 39
        ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
        : P(r) || q(n, i)
          ? `Unexpected character: ${R(e, i)}.`
          : `Invalid character: ${R(e, i)}.`,
    );
  }
  return I(e, o.EOF, s, s);
}
function ze(e, t) {
  const n = e.source.body,
    s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if (r === 10 || r === 13) break;
    if (P(r)) ++i;
    else if (q(n, i)) i += 2;
    else break;
  }
  return I(e, o.COMMENT, t, i, n.slice(t + 1, i));
}
function We(e, t, n) {
  const s = e.source.body;
  let i = t,
    r = n,
    a = !1;
  if ((r === 45 && (r = s.charCodeAt(++i)), r === 48)) {
    if (((r = s.charCodeAt(++i)), M(r)))
      throw v(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${R(e, i)}.`,
      );
  } else (i = Z(e, i, r)), (r = s.charCodeAt(i));
  if (
    (r === 46 &&
      ((a = !0),
      (r = s.charCodeAt(++i)),
      (i = Z(e, i, r)),
      (r = s.charCodeAt(i))),
    (r === 69 || r === 101) &&
      ((a = !0),
      (r = s.charCodeAt(++i)),
      (r === 43 || r === 45) && (r = s.charCodeAt(++i)),
      (i = Z(e, i, r)),
      (r = s.charCodeAt(i))),
    r === 46 || ye(r))
  )
    throw v(e.source, i, `Invalid number, expected digit but got: ${R(e, i)}.`);
  return I(e, a ? o.FLOAT : o.INT, t, i, s.slice(t, i));
}
function Z(e, t, n) {
  if (!M(n))
    throw v(e.source, t, `Invalid number, expected digit but got: ${R(e, t)}.`);
  const s = e.source.body;
  let i = t + 1;
  for (; M(s.charCodeAt(i)); ) ++i;
  return i;
}
function Ze(e, t) {
  const n = e.source.body,
    s = n.length;
  let i = t + 1,
    r = i,
    a = '';
  for (; i < s; ) {
    const p = n.charCodeAt(i);
    if (p === 34) return (a += n.slice(r, i)), I(e, o.STRING, t, i + 1, a);
    if (p === 92) {
      a += n.slice(r, i);
      const h =
        n.charCodeAt(i + 1) === 117
          ? n.charCodeAt(i + 2) === 123
            ? Ke(e, i)
            : et(e, i)
          : tt(e, i);
      (a += h.value), (i += h.size), (r = i);
      continue;
    }
    if (p === 10 || p === 13) break;
    if (P(p)) ++i;
    else if (q(n, i)) i += 2;
    else throw v(e.source, i, `Invalid character within String: ${R(e, i)}.`);
  }
  throw v(e.source, i, 'Unterminated string.');
}
function Ke(e, t) {
  const n = e.source.body;
  let s = 0,
    i = 3;
  for (; i < 12; ) {
    const r = n.charCodeAt(t + i++);
    if (r === 125) {
      if (i < 5 || !P(s)) break;
      return { value: String.fromCodePoint(s), size: i };
    }
    if (((s = (s << 4) | j(r)), s < 0)) break;
  }
  throw v(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`,
  );
}
function et(e, t) {
  const n = e.source.body,
    s = he(n, t + 2);
  if (P(s)) return { value: String.fromCodePoint(s), size: 6 };
  if (Ie(s) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = he(n, t + 8);
    if (ve(i)) return { value: String.fromCodePoint(s, i), size: 12 };
  }
  throw v(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`,
  );
}
function he(e, t) {
  return (
    (j(e.charCodeAt(t)) << 12) |
    (j(e.charCodeAt(t + 1)) << 8) |
    (j(e.charCodeAt(t + 2)) << 4) |
    j(e.charCodeAt(t + 3))
  );
}
function j(e) {
  return e >= 48 && e <= 57
    ? e - 48
    : e >= 65 && e <= 70
      ? e - 55
      : e >= 97 && e <= 102
        ? e - 87
        : -1;
}
function tt(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: '\\', size: 2 };
    case 47:
      return { value: '/', size: 2 };
    case 98:
      return { value: '\b', size: 2 };
    case 102:
      return { value: '\f', size: 2 };
    case 110:
      return {
        value: `
`,
        size: 2,
      };
    case 114:
      return { value: '\r', size: 2 };
    case 116:
      return { value: '	', size: 2 };
  }
  throw v(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(t, t + 2)}".`,
  );
}
function nt(e, t) {
  const n = e.source.body,
    s = n.length;
  let i = e.lineStart,
    r = t + 3,
    a = r,
    p = '';
  const h = [];
  for (; r < s; ) {
    const u = n.charCodeAt(r);
    if (u === 34 && n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34) {
      (p += n.slice(a, r)), h.push(p);
      const f = I(
        e,
        o.BLOCK_STRING,
        t,
        r + 3,
        Ye(h).join(`
`),
      );
      return (e.line += h.length - 1), (e.lineStart = i), f;
    }
    if (
      u === 92 &&
      n.charCodeAt(r + 1) === 34 &&
      n.charCodeAt(r + 2) === 34 &&
      n.charCodeAt(r + 3) === 34
    ) {
      (p += n.slice(a, r)), (a = r + 1), (r += 4);
      continue;
    }
    if (u === 10 || u === 13) {
      (p += n.slice(a, r)),
        h.push(p),
        u === 13 && n.charCodeAt(r + 1) === 10 ? (r += 2) : ++r,
        (p = ''),
        (a = r),
        (i = r);
      continue;
    }
    if (P(u)) ++r;
    else if (q(n, r)) r += 2;
    else throw v(e.source, r, `Invalid character within String: ${R(e, r)}.`);
  }
  throw v(e.source, r, 'Unterminated string.');
}
function it(e, t) {
  const n = e.source.body,
    s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if (Ge(r)) ++i;
    else break;
  }
  return I(e, o.NAME, t, i, n.slice(t, i));
}
const st = 10,
  Oe = 2;
function ie(e) {
  return H(e, []);
}
function H(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e);
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]';
    case 'object':
      return rt(e, t);
    default:
      return String(e);
  }
}
function rt(e, t) {
  if (e === null) return 'null';
  if (t.includes(e)) return '[Circular]';
  const n = [...t, e];
  if (ot(e)) {
    const s = e.toJSON();
    if (s !== e) return typeof s == 'string' ? s : H(s, n);
  } else if (Array.isArray(e)) return ct(e, n);
  return at(e, n);
}
function ot(e) {
  return typeof e.toJSON == 'function';
}
function at(e, t) {
  const n = Object.entries(e);
  return n.length === 0
    ? '{}'
    : t.length > Oe
      ? '[' + lt(e) + ']'
      : '{ ' + n.map(([i, r]) => i + ': ' + H(r, t)).join(', ') + ' }';
}
function ct(e, t) {
  if (e.length === 0) return '[]';
  if (t.length > Oe) return '[Array]';
  const n = Math.min(st, e.length),
    s = e.length - n,
    i = [];
  for (let r = 0; r < n; ++r) i.push(H(e[r], t));
  return (
    s === 1
      ? i.push('... 1 more item')
      : s > 1 && i.push(`... ${s} more items`),
    '[' + i.join(', ') + ']'
  );
}
function lt(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '');
  if (t === 'Object' && typeof e.constructor == 'function') {
    const n = e.constructor.name;
    if (typeof n == 'string' && n !== '') return n;
  }
  return t;
}
const ut = globalThis.process && !0,
  pt = ut
    ? function (t, n) {
        return t instanceof n;
      }
    : function (t, n) {
        if (t instanceof n) return !0;
        if (typeof t == 'object' && t !== null) {
          var s;
          const i = n.prototype[Symbol.toStringTag],
            r =
              Symbol.toStringTag in t
                ? t[Symbol.toStringTag]
                : (s = t.constructor) === null || s === void 0
                  ? void 0
                  : s.name;
          if (i === r) {
            const a = ie(t);
            throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }
        return !1;
      };
class _e {
  constructor(t, n = 'GraphQL request', s = { line: 1, column: 1 }) {
    typeof t == 'string' || Q(!1, `Body must be a string. Received: ${ie(t)}.`),
      (this.body = t),
      (this.name = n),
      (this.locationOffset = s),
      this.locationOffset.line > 0 ||
        Q(!1, 'line in locationOffset is 1-indexed and must be positive.'),
      this.locationOffset.column > 0 ||
        Q(!1, 'column in locationOffset is 1-indexed and must be positive.');
  }
  get [Symbol.toStringTag]() {
    return 'Source';
  }
}
function ht(e) {
  return pt(e, _e);
}
function de(e, t) {
  return new dt(e, t).parseDocument();
}
class dt {
  constructor(t, n = {}) {
    const s = ht(t) ? t : new _e(t);
    (this._lexer = new Xe(s)), (this._options = n), (this._tokenCounter = 0);
  }
  parseName() {
    const t = this.expectToken(o.NAME);
    return this.node(t, { kind: l.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: l.DOCUMENT,
      definitions: this.many(o.SOF, this.parseDefinition, o.EOF),
    });
  }
  parseDefinition() {
    if (this.peek(o.BRACE_L)) return this.parseOperationDefinition();
    const t = this.peekDescription(),
      n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === o.NAME) {
      switch (n.value) {
        case 'schema':
          return this.parseSchemaDefinition();
        case 'scalar':
          return this.parseScalarTypeDefinition();
        case 'type':
          return this.parseObjectTypeDefinition();
        case 'interface':
          return this.parseInterfaceTypeDefinition();
        case 'union':
          return this.parseUnionTypeDefinition();
        case 'enum':
          return this.parseEnumTypeDefinition();
        case 'input':
          return this.parseInputObjectTypeDefinition();
        case 'directive':
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw v(
          this._lexer.source,
          this._lexer.token.start,
          'Unexpected description, descriptions are supported only on type definitions.',
        );
      switch (n.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();
        case 'fragment':
          return this.parseFragmentDefinition();
        case 'extend':
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(o.BRACE_L))
      return this.node(t, {
        kind: l.OPERATION_DEFINITION,
        operation: w.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    const n = this.parseOperationType();
    let s;
    return (
      this.peek(o.NAME) && (s = this.parseName()),
      this.node(t, {
        kind: l.OPERATION_DEFINITION,
        operation: n,
        name: s,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet(),
      })
    );
  }
  parseOperationType() {
    const t = this.expectToken(o.NAME);
    switch (t.value) {
      case 'query':
        return w.QUERY;
      case 'mutation':
        return w.MUTATION;
      case 'subscription':
        return w.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      o.PAREN_L,
      this.parseVariableDefinition,
      o.PAREN_R,
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: l.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(o.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(o.EQUALS)
        ? this.parseConstValueLiteral()
        : void 0,
      directives: this.parseConstDirectives(),
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return (
      this.expectToken(o.DOLLAR),
      this.node(t, { kind: l.VARIABLE, name: this.parseName() })
    );
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: l.SELECTION_SET,
      selections: this.many(o.BRACE_L, this.parseSelection, o.BRACE_R),
    });
  }
  parseSelection() {
    return this.peek(o.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token,
      n = this.parseName();
    let s, i;
    return (
      this.expectOptionalToken(o.COLON)
        ? ((s = n), (i = this.parseName()))
        : (i = n),
      this.node(t, {
        kind: l.FIELD,
        alias: s,
        name: i,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(o.BRACE_L) ? this.parseSelectionSet() : void 0,
      })
    );
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(o.PAREN_L, n, o.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token,
      s = this.parseName();
    return (
      this.expectToken(o.COLON),
      this.node(n, {
        kind: l.ARGUMENT,
        name: s,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(o.SPREAD);
    const n = this.expectOptionalKeyword('on');
    return !n && this.peek(o.NAME)
      ? this.node(t, {
          kind: l.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1),
        })
      : this.node(t, {
          kind: l.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        });
  }
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return (
      this.expectKeyword('fragment'),
      this._options.allowLegacyFragmentVariables === !0
        ? this.node(t, {
            kind: l.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
        : this.node(t, {
            kind: l.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    );
  }
  parseFragmentName() {
    if (this._lexer.token.value === 'on') throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case o.BRACKET_L:
        return this.parseList(t);
      case o.BRACE_L:
        return this.parseObject(t);
      case o.INT:
        return (
          this.advanceLexer(), this.node(n, { kind: l.INT, value: n.value })
        );
      case o.FLOAT:
        return (
          this.advanceLexer(), this.node(n, { kind: l.FLOAT, value: n.value })
        );
      case o.STRING:
      case o.BLOCK_STRING:
        return this.parseStringLiteral();
      case o.NAME:
        switch ((this.advanceLexer(), n.value)) {
          case 'true':
            return this.node(n, { kind: l.BOOLEAN, value: !0 });
          case 'false':
            return this.node(n, { kind: l.BOOLEAN, value: !1 });
          case 'null':
            return this.node(n, { kind: l.NULL });
          default:
            return this.node(n, { kind: l.ENUM, value: n.value });
        }
      case o.DOLLAR:
        if (t)
          if ((this.expectToken(o.DOLLAR), this._lexer.token.kind === o.NAME)) {
            const s = this._lexer.token.value;
            throw v(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${s}" in constant value.`,
            );
          } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return (
      this.advanceLexer(),
      this.node(t, {
        kind: l.STRING,
        value: t.value,
        block: t.kind === o.BLOCK_STRING,
      })
    );
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: l.LIST,
      values: this.any(o.BRACKET_L, n, o.BRACKET_R),
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: l.OBJECT,
      fields: this.any(o.BRACE_L, n, o.BRACE_R),
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token,
      s = this.parseName();
    return (
      this.expectToken(o.COLON),
      this.node(n, {
        kind: l.OBJECT_FIELD,
        name: s,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(o.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return (
      this.expectToken(o.AT),
      this.node(n, {
        kind: l.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(t),
      })
    );
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(o.BRACKET_L)) {
      const s = this.parseTypeReference();
      this.expectToken(o.BRACKET_R),
        (n = this.node(t, { kind: l.LIST_TYPE, type: s }));
    } else n = this.parseNamedType();
    return this.expectOptionalToken(o.BANG)
      ? this.node(t, { kind: l.NON_NULL_TYPE, type: n })
      : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: l.NAMED_TYPE,
      name: this.parseName(),
    });
  }
  peekDescription() {
    return this.peek(o.STRING) || this.peek(o.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('schema');
    const s = this.parseConstDirectives(),
      i = this.many(o.BRACE_L, this.parseOperationTypeDefinition, o.BRACE_R);
    return this.node(t, {
      kind: l.SCHEMA_DEFINITION,
      description: n,
      directives: s,
      operationTypes: i,
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseOperationType();
    this.expectToken(o.COLON);
    const s = this.parseNamedType();
    return this.node(t, {
      kind: l.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: s,
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('scalar');
    const s = this.parseName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: l.SCALAR_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('type');
    const s = this.parseName(),
      i = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: l.OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a,
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword('implements')
      ? this.delimitedMany(o.AMP, this.parseNamedType)
      : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseFieldDefinition, o.BRACE_R);
  }
  parseFieldDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      s = this.parseName(),
      i = this.parseArgumentDefs();
    this.expectToken(o.COLON);
    const r = this.parseTypeReference(),
      a = this.parseConstDirectives();
    return this.node(t, {
      kind: l.FIELD_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      type: r,
      directives: a,
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(o.PAREN_L, this.parseInputValueDef, o.PAREN_R);
  }
  parseInputValueDef() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      s = this.parseName();
    this.expectToken(o.COLON);
    const i = this.parseTypeReference();
    let r;
    this.expectOptionalToken(o.EQUALS) && (r = this.parseConstValueLiteral());
    const a = this.parseConstDirectives();
    return this.node(t, {
      kind: l.INPUT_VALUE_DEFINITION,
      description: n,
      name: s,
      type: i,
      defaultValue: r,
      directives: a,
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('interface');
    const s = this.parseName(),
      i = this.parseImplementsInterfaces(),
      r = this.parseConstDirectives(),
      a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: l.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a,
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('union');
    const s = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: l.UNION_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      types: r,
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(o.EQUALS)
      ? this.delimitedMany(o.PIPE, this.parseNamedType)
      : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('enum');
    const s = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: l.ENUM_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      values: r,
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      o.BRACE_L,
      this.parseEnumValueDefinition,
      o.BRACE_R,
    );
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      s = this.parseEnumValueName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: l.ENUM_VALUE_DEFINITION,
      description: n,
      name: s,
      directives: i,
    });
  }
  parseEnumValueName() {
    if (
      this._lexer.token.value === 'true' ||
      this._lexer.token.value === 'false' ||
      this._lexer.token.value === 'null'
    )
      throw v(
        this._lexer.source,
        this._lexer.token.start,
        `${Y(this._lexer.token)} is reserved and cannot be used for an enum value.`,
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('input');
    const s = this.parseName(),
      i = this.parseConstDirectives(),
      r = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: l.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      fields: r,
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(o.BRACE_L, this.parseInputValueDef, o.BRACE_R);
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === o.NAME)
      switch (t.value) {
        case 'schema':
          return this.parseSchemaExtension();
        case 'scalar':
          return this.parseScalarTypeExtension();
        case 'type':
          return this.parseObjectTypeExtension();
        case 'interface':
          return this.parseInterfaceTypeExtension();
        case 'union':
          return this.parseUnionTypeExtension();
        case 'enum':
          return this.parseEnumTypeExtension();
        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('schema');
    const n = this.parseConstDirectives(),
      s = this.optionalMany(
        o.BRACE_L,
        this.parseOperationTypeDefinition,
        o.BRACE_R,
      );
    if (n.length === 0 && s.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: l.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: s,
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('scalar');
    const n = this.parseName(),
      s = this.parseConstDirectives();
    if (s.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: l.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: s,
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('type');
    const n = this.parseName(),
      s = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: l.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r,
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('interface');
    const n = this.parseName(),
      s = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: l.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r,
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('union');
    const n = this.parseName(),
      s = this.parseConstDirectives(),
      i = this.parseUnionMemberTypes();
    if (s.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: l.UNION_TYPE_EXTENSION,
      name: n,
      directives: s,
      types: i,
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('enum');
    const n = this.parseName(),
      s = this.parseConstDirectives(),
      i = this.parseEnumValuesDefinition();
    if (s.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: l.ENUM_TYPE_EXTENSION,
      name: n,
      directives: s,
      values: i,
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword('extend'), this.expectKeyword('input');
    const n = this.parseName(),
      s = this.parseConstDirectives(),
      i = this.parseInputFieldsDefinition();
    if (s.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: l.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: s,
      fields: i,
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword('directive'), this.expectToken(o.AT);
    const s = this.parseName(),
      i = this.parseArgumentDefs(),
      r = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    const a = this.parseDirectiveLocations();
    return this.node(t, {
      kind: l.DIRECTIVE_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      repeatable: r,
      locations: a,
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(o.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token,
      n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(ee, n.value)) return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return (
      this._options.noLocation !== !0 &&
        (n.loc = new Me(t, this._lexer.lastToken, this._lexer.source)),
      n
    );
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw v(this._lexer.source, n.start, `Expected ${De(t)}, found ${Y(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === o.NAME && n.value === t) this.advanceLexer();
    else
      throw v(this._lexer.source, n.start, `Expected "${t}", found ${Y(n)}.`);
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === o.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return v(this._lexer.source, n.start, `Unexpected ${Y(n)}.`);
  }
  any(t, n, s) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(s); ) i.push(n.call(this));
    return i;
  }
  optionalMany(t, n, s) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do i.push(n.call(this));
      while (!this.expectOptionalToken(s));
      return i;
    }
    return [];
  }
  many(t, n, s) {
    this.expectToken(t);
    const i = [];
    do i.push(n.call(this));
    while (!this.expectOptionalToken(s));
    return i;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const s = [];
    do s.push(n.call(this));
    while (this.expectOptionalToken(t));
    return s;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options,
      n = this._lexer.advance();
    if (
      t !== void 0 &&
      n.kind !== o.EOF &&
      (++this._tokenCounter, this._tokenCounter > t)
    )
      throw v(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`,
      );
  }
}
function Y(e) {
  const t = e.value;
  return De(e.kind) + (t != null ? ` "${t}"` : '');
}
function De(e) {
  return qe(e) ? `"${e}"` : e;
}
function ft(e) {
  return `"${e.replace(Et, mt)}"`;
}
const Et = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function mt(e) {
  return Tt[e.charCodeAt(0)];
}
const Tt = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F',
  ],
  Nt = Object.freeze({});
function xt(e, t, n = Ne) {
  const s = new Map();
  for (const A of Object.values(l)) s.set(A, yt(t, A));
  let i,
    r = Array.isArray(e),
    a = [e],
    p = -1,
    h = [],
    u = e,
    f,
    E;
  const m = [],
    _ = [];
  do {
    p++;
    const A = p === a.length,
      L = A && h.length !== 0;
    if (A) {
      if (
        ((f = _.length === 0 ? void 0 : m[m.length - 1]),
        (u = E),
        (E = _.pop()),
        L)
      )
        if (r) {
          u = u.slice();
          let k = 0;
          for (const [V, $] of h) {
            const G = V - k;
            $ === null ? (u.splice(G, 1), k++) : (u[G] = $);
          }
        } else {
          u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u));
          for (const [k, V] of h) u[k] = V;
        }
      (p = i.index), (a = i.keys), (h = i.edits), (r = i.inArray), (i = i.prev);
    } else if (E) {
      if (((f = r ? p : a[p]), (u = E[f]), u == null)) continue;
      m.push(f);
    }
    let g;
    if (!Array.isArray(u)) {
      var x, D;
      pe(u) || Q(!1, `Invalid AST Node: ${ie(u)}.`);
      const k = A
        ? (x = s.get(u.kind)) === null || x === void 0
          ? void 0
          : x.leave
        : (D = s.get(u.kind)) === null || D === void 0
          ? void 0
          : D.enter;
      if (((g = k == null ? void 0 : k.call(t, u, f, E, m, _)), g === Nt))
        break;
      if (g === !1) {
        if (!A) {
          m.pop();
          continue;
        }
      } else if (g !== void 0 && (h.push([f, g]), !A))
        if (pe(g)) u = g;
        else {
          m.pop();
          continue;
        }
    }
    if ((g === void 0 && L && h.push([f, u]), A)) m.pop();
    else {
      var U;
      (i = { inArray: r, index: p, keys: a, edits: h, prev: i }),
        (r = Array.isArray(u)),
        (a = r ? u : (U = n[u.kind]) !== null && U !== void 0 ? U : []),
        (p = -1),
        (h = []),
        E && _.push(E),
        (E = u);
    }
  } while (i !== void 0);
  return h.length !== 0 ? h[h.length - 1][1] : e;
}
function yt(e, t) {
  const n = e[t];
  return typeof n == 'object'
    ? n
    : typeof n == 'function'
      ? { enter: n, leave: void 0 }
      : { enter: e.enter, leave: e.leave };
}
function fe(e) {
  return xt(e, vt);
}
const It = 80,
  vt = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => '$' + e.name },
    Document: {
      leave: (e) =>
        c(
          e.definitions,
          `

`,
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = d('(', c(e.variableDefinitions, ', '), ')'),
          n = c([e.operation, c([e.name, t]), c(e.directives, ' ')], ' ');
        return (n === 'query' ? '' : n + ' ') + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: s }) =>
        e + ': ' + t + d(' = ', n) + d(' ', c(s, ' ')),
    },
    SelectionSet: { leave: ({ selections: e }) => S(e) },
    Field: {
      leave({
        alias: e,
        name: t,
        arguments: n,
        directives: s,
        selectionSet: i,
      }) {
        const r = d('', e, ': ') + t;
        let a = r + d('(', c(n, ', '), ')');
        return (
          a.length > It &&
            (a =
              r +
              d(
                `(
`,
                X(
                  c(
                    n,
                    `
`,
                  ),
                ),
                `
)`,
              )),
          c([a, c(s, ' '), i], ' ')
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: {
      leave: ({ name: e, directives: t }) => '...' + e + d(' ', c(t, ' ')),
    },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
        c(['...', d('on ', e), c(t, ' '), n], ' '),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: n,
        directives: s,
        selectionSet: i,
      }) =>
        `fragment ${e}${d('(', c(n, ', '), ')')} on ${t} ${d('', c(s, ' '), ' ')}` +
        i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? Qe(e) : ft(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + c(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + c(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: {
      leave: ({ name: e, arguments: t }) => '@' + e + d('(', c(t, ', '), ')'),
    },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['schema', c(t, ' '), S(n)], ' '),
    },
    OperationTypeDefinition: {
      leave: ({ operation: e, type: t }) => e + ': ' + t,
    },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['scalar', t, c(n, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: s,
        fields: i,
      }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['type', t, d('implements ', c(n, ' & ')), c(s, ' '), S(i)], ' '),
    },
    FieldDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        type: s,
        directives: i,
      }) =>
        d(
          '',
          e,
          `
`,
        ) +
        t +
        (Ee(n)
          ? d(
              `(
`,
              X(
                c(
                  n,
                  `
`,
                ),
              ),
              `
)`,
            )
          : d('(', c(n, ', '), ')')) +
        ': ' +
        s +
        d(' ', c(i, ' ')),
    },
    InputValueDefinition: {
      leave: ({
        description: e,
        name: t,
        type: n,
        defaultValue: s,
        directives: i,
      }) =>
        d(
          '',
          e,
          `
`,
        ) + c([t + ': ' + n, d('= ', s), c(i, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: s,
        fields: i,
      }) =>
        d(
          '',
          e,
          `
`,
        ) +
        c(
          ['interface', t, d('implements ', c(n, ' & ')), c(s, ' '), S(i)],
          ' ',
        ),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: s }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['union', t, c(n, ' '), d('= ', c(s, ' | '))], ' '),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: s }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['enum', t, c(n, ' '), S(s)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        d(
          '',
          e,
          `
`,
        ) + c([t, c(n, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: s }) =>
        d(
          '',
          e,
          `
`,
        ) + c(['input', t, c(n, ' '), S(s)], ' '),
    },
    DirectiveDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        repeatable: s,
        locations: i,
      }) =>
        d(
          '',
          e,
          `
`,
        ) +
        'directive @' +
        t +
        (Ee(n)
          ? d(
              `(
`,
              X(
                c(
                  n,
                  `
`,
                ),
              ),
              `
)`,
            )
          : d('(', c(n, ', '), ')')) +
        (s ? ' repeatable' : '') +
        ' on ' +
        c(i, ' | '),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) =>
        c(['extend schema', c(e, ' '), S(t)], ' '),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) =>
        c(['extend scalar', e, c(t, ' ')], ' '),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: s }) =>
        c(
          ['extend type', e, d('implements ', c(t, ' & ')), c(n, ' '), S(s)],
          ' ',
        ),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: s }) =>
        c(
          [
            'extend interface',
            e,
            d('implements ', c(t, ' & ')),
            c(n, ' '),
            S(s),
          ],
          ' ',
        ),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) =>
        c(['extend union', e, c(t, ' '), d('= ', c(n, ' | '))], ' '),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) =>
        c(['extend enum', e, c(t, ' '), S(n)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) =>
        c(['extend input', e, c(t, ' '), S(n)], ' '),
    },
  };
function c(e, t = '') {
  var n;
  return (n = e == null ? void 0 : e.filter((s) => s).join(t)) !== null &&
    n !== void 0
    ? n
    : '';
}
function S(e) {
  return d(
    `{
`,
    X(
      c(
        e,
        `
`,
      ),
    ),
    `
}`,
  );
}
function d(e, t, n = '') {
  return t != null && t !== '' ? e + t + n : '';
}
function X(e) {
  return d(
    '  ',
    e.replace(
      /\n/g,
      `
  `,
    ),
  );
}
function Ee(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.some((n) =>
          n.includes(`
`),
        )) !== null && t !== void 0
    ? t
    : !1;
}
function Ot(e) {
  const t = {
      descriptions: !0,
      specifiedByUrl: !1,
      directiveIsRepeatable: !1,
      schemaDescription: !1,
      inputValueDeprecation: !1,
      oneOf: !1,
      ...e,
    },
    n = t.descriptions ? 'description' : '',
    s = t.specifiedByUrl ? 'specifiedByURL' : '',
    i = t.directiveIsRepeatable ? 'isRepeatable' : '',
    r = t.schemaDescription ? n : '';
  function a(h) {
    return t.inputValueDeprecation ? h : '';
  }
  const p = t.oneOf ? 'isOneOf' : '';
  return `
    query IntrospectionQuery {
      __schema {
        ${r}
        queryType { name }
        mutationType { name }
        subscriptionType { name }
        types {
          ...FullType
        }
        directives {
          name
          ${n}
          ${i}
          locations
          args${a('(includeDeprecated: true)')} {
            ...InputValue
          }
        }
      }
    }

    fragment FullType on __Type {
      kind
      name
      ${n}
      ${s}
      ${p}
      fields(includeDeprecated: true) {
        name
        ${n}
        args${a('(includeDeprecated: true)')} {
          ...InputValue
        }
        type {
          ...TypeRef
        }
        isDeprecated
        deprecationReason
      }
      inputFields${a('(includeDeprecated: true)')} {
        ...InputValue
      }
      interfaces {
        ...TypeRef
      }
      enumValues(includeDeprecated: true) {
        name
        ${n}
        isDeprecated
        deprecationReason
      }
      possibleTypes {
        ...TypeRef
      }
    }

    fragment InputValue on __InputValue {
      name
      ${n}
      type { ...TypeRef }
      defaultValue
      ${a('isDeprecated')}
      ${a('deprecationReason')}
    }

    fragment TypeRef on __Type {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
}
const J = {
    endpoint: 'https://rickandmortyapi.com/graphql',
    sdlEndpoint: 'https://rickandmortyapi.com/graphql',
    headers: '{"Content-Type": "application/json"}',
    query:
      'query ($filter: FilterCharacter) { characters(filter: $filter) { results { name } } }',
  },
  _t = '_wrapperGraphi_madas_1',
  Dt = '_title_madas_12',
  At = '_inputContainer_madas_16',
  St = '_inputBlock_madas_26',
  gt = '_inputInner_madas_32',
  kt = '_inputUrl_madas_38',
  b = {
    wrapperGraphi: _t,
    title: Dt,
    inputContainer: At,
    inputBlock: St,
    inputInner: gt,
    inputUrl: kt,
  };
function Ct({ requestItem: e }) {
  const t = Ce(),
    [n] = we(),
    [s, i] = O.useState((e == null ? void 0 : e.requestData.url) || J.endpoint),
    [r, a] = O.useState(
      (e == null ? void 0 : e.requestData.sdlUrl) || J.sdlEndpoint,
    ),
    [p, h] = O.useState(
      fe(de((e == null ? void 0 : e.requestData.query) || J.query)),
    ),
    [u, f] = O.useState((e == null ? void 0 : e.requestData.variables) || '{}'),
    [E, m] = O.useState(JSON.stringify(JSON.parse(J.headers), null, 2)),
    [_, x] = O.useState(null),
    [D, U] = O.useState(null),
    [A, L] = O.useState(null),
    [g, k] = O.useState(''),
    [V, $] = O.useState(null),
    [G, se] = O.useState(null),
    [re, oe] = O.useState(!1),
    { t: C } = Le(),
    Ae = be(),
    ae = (y) => {
      y instanceof Error ? L(`Error: ${y.message}`) : L(`Error: ${String(y)}`);
    },
    Se = async () => {
      if (r)
        try {
          const y = await fetch(r, {
            method: 'POST',
            headers: { ...JSON.parse(E || '{}') },
            body: JSON.stringify({ query: Ot() }),
          });
          $(y.status);
          const N = await y.json();
          N.data ? k(JSON.stringify(N.data, null, 2)) : N.error && se(N.error);
        } catch {
          se('Error fetching schema');
        }
    };
  O.useEffect(() => {
    const y = n.get('query'),
      N = n.get('variables'),
      F = n.get('headers'),
      B = n.get('fetchSchema');
    y && h(y), N && f(N), F && m(F), B === 'true' && oe(!0);
  }, [n]),
    O.useEffect(() => {
      re && Se();
    }, [re, r, E]);
  const ge = async (y) => {
      try {
        const N = await fetch(s, {
          method: 'POST',
          headers: { ...JSON.parse(E || '{}') },
          body: JSON.stringify(y),
        });
        if ((U(N.status), !N.ok)) {
          const B = await N.text();
          throw new Error(`Error ${N.status}: ${B}`);
        }
        const F = await N.json();
        x(JSON.stringify(F, null, 2)), L(null);
      } catch (N) {
        ae(N);
      }
    },
    ke = () => {
      x(null), L(null), m(JSON.stringify(JSON.parse(E), null, 2)), h(fe(de(p)));
      const y = new Date().toISOString();
      try {
        const N = new URLSearchParams({
            query: p,
            variables: u,
            headers: E,
            fetchSchema: 'true',
          }),
          F = {
            url: s,
            sdlUrl: r,
            method: 'GRAPHIQL',
            headers: E,
            variables: u,
            query: p,
          },
          B = { urlPage: `?${N.toString()}`, requestData: F, data: y };
        Ae(Fe([B])),
          t(`?${N.toString()}`, { replace: !0 }),
          ge({ query: p, variables: JSON.parse(u || '{}') }),
          oe(!0);
      } catch (N) {
        ae(N);
      }
    },
    z = (y) => (N) => {
      N !== void 0 && y(N);
    };
  return T.jsxs('div', {
    className: b.wrapperGraphi,
    children: [
      T.jsx('h2', { className: b.title, children: C('GraphiQLClient') }),
      T.jsxs('div', {
        className: b.inputContainer,
        children: [
          T.jsxs('div', {
            className: b.inputBlock,
            children: [
              T.jsxs('div', {
                className: b.inputInner,
                children: [
                  T.jsxs('label', {
                    htmlFor: 'endpoint',
                    children: [C('EndpointURL'), ':'],
                  }),
                  T.jsx('input', {
                    id: 'endpoint',
                    type: 'text',
                    value: s,
                    className: b.inputUrl,
                    onChange: (y) => i(y.target.value),
                  }),
                ],
              }),
              T.jsxs('div', {
                className: b.inputInner,
                children: [
                  T.jsxs('label', {
                    htmlFor: 'sdl-endpoint',
                    children: [C('SDLEndpointURL'), ':'],
                  }),
                  T.jsx('input', {
                    id: 'sdl-endpoint',
                    type: 'text',
                    value: r,
                    className: b.inputUrl,
                    onChange: (y) => a(y.target.value),
                  }),
                ],
              }),
            ],
          }),
          T.jsx(Re, { btnType: 'button', onClick: ke, children: C('Send') }),
        ],
      }),
      T.jsxs('div', {
        children: [
          T.jsxs('label', {
            htmlFor: 'headers-editor',
            children: [C('Headers'), ':'],
          }),
          T.jsx('div', {
            id: 'headers-editor',
            children: T.jsx(W, {
              height: '150px',
              language: 'json',
              value: E,
              onChange: z(m),
              theme: 'vs-dark',
              options: {
                minimap: { enabled: !1 },
                scrollBeyondLastLine: !1,
                automaticLayout: !0,
              },
            }),
          }),
        ],
      }),
      T.jsxs('div', {
        children: [
          T.jsxs('label', {
            htmlFor: 'query-editor',
            children: [C('GraphiQLQueryEditor'), ':'],
          }),
          T.jsx('div', {
            id: 'query-editor',
            children: T.jsx(W, {
              height: '150px',
              language: 'graphql',
              value: p,
              onChange: z(h),
              theme: 'vs-dark',
              options: {
                minimap: { enabled: !1 },
                scrollBeyondLastLine: !1,
                automaticLayout: !0,
              },
            }),
          }),
        ],
      }),
      T.jsxs('div', {
        children: [
          T.jsxs('label', {
            htmlFor: 'variables-editor',
            children: [C('VariablesEditor'), ':'],
          }),
          T.jsx('div', {
            id: 'variables-editor',
            children: T.jsx(W, {
              height: '150px',
              language: 'json',
              value: u,
              onChange: z(f),
              theme: 'vs-dark',
              options: {
                minimap: { enabled: !1 },
                scrollBeyondLastLine: !1,
                automaticLayout: !0,
              },
            }),
          }),
        ],
      }),
      T.jsx(ce, {
        title: C('Response'),
        responseStatus: D,
        response: _,
        error: A,
      }),
      D &&
        T.jsx(ce, {
          title: C('DocumentationSDL'),
          responseStatus: V,
          response: g,
          error: G,
        }),
    ],
  });
}
function Bt() {
  return T.jsx(Ct, {});
}
export { Bt as default };
