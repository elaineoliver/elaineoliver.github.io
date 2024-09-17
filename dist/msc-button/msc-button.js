/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M = globalThis, I = M.ShadowRoot && (M.ShadyCSS === void 0 || M.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, B = Symbol(), q = /* @__PURE__ */ new WeakMap();
let et = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== B) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (I && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ct = (r) => new et(typeof r == "string" ? r : r + "", void 0, B), lt = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((s, i, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1], r[0]);
  return new et(e, r, B);
}, dt = (r, t) => {
  if (I) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = M.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, F = I ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return ct(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: pt, defineProperty: ut, getOwnPropertyDescriptor: $t, getOwnPropertyNames: ft, getOwnPropertySymbols: _t, getPrototypeOf: mt } = Object, k = globalThis, K = k.trustedTypes, yt = K ? K.emptyScript : "", vt = k.reactiveElementPolyfillSupport, w = (r, t) => r, N = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? yt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, D = (r, t) => !pt(r, t), Z = { attribute: !0, type: String, converter: N, reflect: !1, hasChanged: D };
Symbol.metadata ??= Symbol("metadata"), k.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class A extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Z) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ut(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = $t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i?.call(this);
    }, set(n) {
      const c = i?.call(this);
      o.call(this, n), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z;
  }
  static _$Ei() {
    if (this.hasOwnProperty(w("elementProperties"))) return;
    const t = mt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(w("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(w("properties"))) {
      const e = this.properties, s = [...ft(e), ..._t(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(F(i));
    } else t !== void 0 && e.push(F(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return dt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (s.converter?.toAttribute !== void 0 ? s.converter : N).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : N;
      this._$Em = i, this[i] = n.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ??= this.constructor.getPropertyOptions(t), !(s.hasChanged ?? D)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [i, o] of s) o.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$EU();
    } catch (s) {
      throw t = !1, this._$EU(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej &&= this._$Ej.forEach((e) => this._$EC(e, this[e])), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
A.elementStyles = [], A.shadowRootOptions = { mode: "open" }, A[w("elementProperties")] = /* @__PURE__ */ new Map(), A[w("finalized")] = /* @__PURE__ */ new Map(), vt?.({ ReactiveElement: A }), (k.reactiveElementVersions ??= []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, R = j.trustedTypes, G = R ? R.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + f, gt = `<${it}>`, v = document, x = () => v.createComment(""), C = (r) => r === null || typeof r != "object" && typeof r != "function", W = Array.isArray, At = (r) => W(r) || typeof r?.[Symbol.iterator] == "function", L = `[ 	
\f\r]`, S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, J = /-->/g, Q = />/g, _ = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Y = /'/g, X = /"/g, rt = /^(?:script|style|textarea|title)$/i, bt = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), Et = bt(1), b = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), tt = /* @__PURE__ */ new WeakMap(), y = v.createTreeWalker(v, 129);
function ot(r, t) {
  if (!W(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return G !== void 0 ? G.createHTML(t) : t;
}
const St = (r, t) => {
  const e = r.length - 1, s = [];
  let i, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = S;
  for (let c = 0; c < e; c++) {
    const h = r[c];
    let l, p, a = -1, u = 0;
    for (; u < h.length && (n.lastIndex = u, p = n.exec(h), p !== null); ) u = n.lastIndex, n === S ? p[1] === "!--" ? n = J : p[1] !== void 0 ? n = Q : p[2] !== void 0 ? (rt.test(p[2]) && (i = RegExp("</" + p[2], "g")), n = _) : p[3] !== void 0 && (n = _) : n === _ ? p[0] === ">" ? (n = i ?? S, a = -1) : p[1] === void 0 ? a = -2 : (a = n.lastIndex - p[2].length, l = p[1], n = p[3] === void 0 ? _ : p[3] === '"' ? X : Y) : n === X || n === Y ? n = _ : n === J || n === Q ? n = S : (n = _, i = void 0);
    const $ = n === _ && r[c + 1].startsWith("/>") ? " " : "";
    o += n === S ? h + gt : a >= 0 ? (s.push(l), h.slice(0, a) + st + h.slice(a) + f + $) : h + f + (a === -2 ? c : $);
  }
  return [ot(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class U {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const c = t.length - 1, h = this.parts, [l, p] = St(t, e);
    if (this.el = U.createElement(l, s), y.currentNode = this.el.content, e === 2 || e === 3) {
      const a = this.el.content.firstChild;
      a.replaceWith(...a.childNodes);
    }
    for (; (i = y.nextNode()) !== null && h.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const a of i.getAttributeNames()) if (a.endsWith(st)) {
          const u = p[n++], $ = i.getAttribute(a).split(f), T = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: o, name: T[2], strings: $, ctor: T[1] === "." ? Pt : T[1] === "?" ? xt : T[1] === "@" ? Ct : z }), i.removeAttribute(a);
        } else a.startsWith(f) && (h.push({ type: 6, index: o }), i.removeAttribute(a));
        if (rt.test(i.tagName)) {
          const a = i.textContent.split(f), u = a.length - 1;
          if (u > 0) {
            i.textContent = R ? R.emptyScript : "";
            for (let $ = 0; $ < u; $++) i.append(a[$], x()), y.nextNode(), h.push({ type: 2, index: ++o });
            i.append(a[u], x());
          }
        }
      } else if (i.nodeType === 8) if (i.data === it) h.push({ type: 2, index: o });
      else {
        let a = -1;
        for (; (a = i.data.indexOf(f, a + 1)) !== -1; ) h.push({ type: 7, index: o }), a += f.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = v.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(r, t, e = r, s) {
  if (t === b) return t;
  let i = s !== void 0 ? e.o?.[s] : e.l;
  const o = C(t) ? void 0 : t._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(r), i._$AT(r, e, s)), s !== void 0 ? (e.o ??= [])[s] = i : e.l = i), i !== void 0 && (t = E(r, i._$AS(r, t.values), i, s)), t;
}
class wt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = (t?.creationScope ?? v).importNode(e, !0);
    y.currentNode = i;
    let o = y.nextNode(), n = 0, c = 0, h = s[0];
    for (; h !== void 0; ) {
      if (n === h.index) {
        let l;
        h.type === 2 ? l = new O(o, o.nextSibling, this, t) : h.type === 1 ? l = new h.ctor(o, h.name, h.strings, this, t) : h.type === 6 && (l = new Ut(o, this, t)), this._$AV.push(l), h = s[++c];
      }
      n !== h?.index && (o = y.nextNode(), n++);
    }
    return y.currentNode = v, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class O {
  get _$AU() {
    return this._$AM?._$AU ?? this.v;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this.v = i?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), C(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== b && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : At(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(v.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = U.createElement(ot(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === i) this._$AH.p(e);
    else {
      const o = new wt(i, this), n = o.u(this.options);
      o.p(e), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = tt.get(t.strings);
    return e === void 0 && tt.set(t.strings, e = new U(t)), e;
  }
  k(t) {
    W(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const o of t) i === e.length ? e.push(s = new O(this.O(x()), this.O(x()), this, this.options)) : s = e[i], s._$AI(o), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this.v = t, this._$AP?.(t));
  }
}
class z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
  }
  _$AI(t, e = this, s, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = E(this, t, e, 0), n = !C(t) || t !== this._$AH && t !== b, n && (this._$AH = t);
    else {
      const c = t;
      let h, l;
      for (t = o[0], h = 0; h < o.length - 1; h++) l = E(this, c[s + h], e, h), l === b && (l = this._$AH[h]), n ||= !C(l) || l !== this._$AH[h], l === d ? t = d : t !== d && (t += (l ?? "") + o[h + 1]), this._$AH[h] = l;
    }
    n && !i && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Pt extends z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class xt extends z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Ct extends z {
  constructor(t, e, s, i, o) {
    super(t, e, s, i, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === b) return;
    const s = this._$AH, i = t === d && s !== d || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== d && (s === d || i);
    i && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ut {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const Ot = j.litHtmlPolyfillSupport;
Ot?.(U, O), (j.litHtmlVersions ??= []).push("3.2.0");
const Tt = (r, t, e) => {
  const s = e?.renderBefore ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const o = e?.renderBefore ?? null;
    s._$litPart$ = i = new O(t.insertBefore(x(), o), o, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class P extends A {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    const t = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t.firstChild, t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = Tt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this.o?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.o?.setConnected(!1);
  }
  render() {
    return b;
  }
}
P._$litElement$ = !0, P.finalized = !0, globalThis.litElementHydrateSupport?.({ LitElement: P });
const Ht = globalThis.litElementPolyfillSupport;
Ht?.({ LitElement: P });
(globalThis.litElementVersions ??= []).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = { attribute: !0, type: String, converter: N, reflect: !1, hasChanged: D }, Rt = (r = Nt, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(c) {
      const h = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(n, h, r);
    }, init(c) {
      return c !== void 0 && this.P(n, void 0, r), c;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(c) {
      const h = this[n];
      t.call(this, c), this.requestUpdate(n, h, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function nt(r) {
  return (t, e) => typeof e == "object" ? Rt(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, n ? { ...s, wrapped: !0 } : s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
var kt = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, ht = (r) => {
  throw TypeError(r);
}, V = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? zt(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && kt(t, e, i), i;
}, at = (r, t, e) => t.has(r) || ht("Cannot " + e), H = (r, t, e) => (at(r, t, "read from private field"), e ? e.call(r) : t.get(r)), Lt = (r, t, e) => t.has(r) ? ht("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(r) : t.set(r, e), It = (r, t, e, s) => (at(r, t, "write to private field"), t.set(r, e), e), m;
let g = class extends P {
  constructor() {
    super(), Lt(this, m), this.type = "button", It(this, m, this.attachInternals()), this.addEventListener("click", this.doFormStuff.bind(this));
  }
  getForm() {
    return H(this, m).form;
  }
  componentDidLoad() {
    this.getForm();
  }
  render() {
    return Et`
      <button class=${this.variant || "primary"} type=${this.type || "button"}>
        <slot name="icon-before"></slot>
        <span class="label">
          <slot></slot>
        </span>
        <slot name="icon-after"></slot>
        <slot name="icon-only"></slot>
      </button>
    `;
  }
  doFormStuff() {
    (this.type === "submit" || this.type === "reset") && (H(this, m).form !== null ? this.type === "submit" ? H(this, m).form.requestSubmit() : this.type === "reset" && H(this, m).form.reset() : new Error(`MSC Button is type of "${this.type}", but a form can not be found.`));
  }
};
m = /* @__PURE__ */ new WeakMap();
g.formAssociated = !0;
g.shadowRootOptions = {
  mode: "open",
  delegatesFocus: !0
};
g.styles = lt`
    :host {
      display: inline-block;
      width: fit-content;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button {
      cursor: pointer;
      font: var(--msc-font-md);
      font-weight: bold;
    }

    button:focus-visible {
      outline: 2px solid var(--msc-color-interaction-focus);
      outline-offset: 2px;
    }

    button:focus-visible:hover {
      outline: none;
    }

    button:focus:not(:focus-visible) {
      outline: none;
    }

    .primary,
    .secondary {
      padding: 0 0.5lh;
      border-radius: 4px;
      line-height: 1.5lh;
    }

    .primary {
      border: 1px solid transparent;
      background: var(--msc-color-interaction);
      color: var(--msc-color-on-interaction);
    }

    .primary:hover,
    .primary:focus {
      border: 1px solid var(--msc-color-interaction-hover);
      background: var(--msc-color-interaction-hover);
    }

    .primary:active {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-interaction);
    }

    .secondary {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-on-interaction);
      color: var(--msc-color-interaction);
    }

    .secondary:hover,
    .secondary:focus {
      border: 1px solid var(--msc-color-interaction-hover);
      color: var(--msc-color-interaction-hover);
    }

    .secondary:active {
      border: 1px solid var(--msc-color-interaction);
      background: var(--msc-color-interaction);
    }
  `;
V([
  nt({ type: String })
], g.prototype, "type", 2);
V([
  nt({ type: String })
], g.prototype, "variant", 2);
g = V([
  Mt("msc-button")
], g);
export {
  g as MSCButton
};
//# sourceMappingURL=msc-button.js.map
