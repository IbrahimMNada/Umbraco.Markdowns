import { UmbUfmElementBase as i, UmbUfmComponentBase as p } from "@umbraco-cms/backoffice/ufm";
import { property as c, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UMB_BLOCK_ENTRY_CONTEXT as v } from "@umbraco-cms/backoffice/block";
const _ = {
    type: "ufmComponent",
    alias: "My.CustomUfmComponent",
    name: "My Custom UFM Component",
    api: () => Promise.resolve().then(() => x),
    meta: {
        marker: ">"
    }
}, b = [_], M = (o, t) => {
    t.registerMany([
        ...b
    ]);
};
var h = Object.defineProperty, y = Object.getOwnPropertyDescriptor, l = (o, t, s, n) => {
    for (var e = n > 1 ? void 0 : n ? y(t, s) : t, r = o.length - 1, m; r >= 0; r--)
        (m = o[r]) && (e = (n ? m(t, s, e) : m(e)) || e);
    return n && e && h(t, s, e), e;
};
const C = "ufm-custom-value";
let a = class extends i {
    getValueFromExpression(o, t) {
        const s = [], n = /([a-zA-Z_$][\w$]*)|\[(\d+)\]/g;
        let e;
        for (; (e = n.exec(t)) !== null;)
            e[1] ? s.push(e[1]) : e[2] && s.push(parseInt(e[2], 10));
        let r = o;
        for (const m of s) r = r[m];
        return r;
    }
    constructor() {
        super(), this.consumeContext(v, async (o) => {
            const t = o.content;
            this.observe(
                t,
                (s) => {
                    if (s === void 0) return;
                    const n = this.getValueFromExpression(s, this.alias);
                    n === void 0 ? this.observe(o.contentElementTypeName, (e) => {
                        this.value = this.localize.term(e);
                    }) : this.value = n;
                },
                "observeValue"
            );
        });
    }
};
l([
    c()
], a.prototype, "alias", 2);
a = l([
    f(C)
], a);
class u extends p {
    render(t) {
        return t.text ? `<ufm-custom-value  ${super.getAttributes(t.text)}></ufm-custom-value>` : void 0;
    }
}
const x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    MyCustomUfmComponent: u,
    api: u
}, Symbol.toStringTag, { value: "Module" }));
export {
    M as onInit
};
//# sourceMappingURL=url-picker-ufm.js.map
