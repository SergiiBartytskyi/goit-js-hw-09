import"./assets/styles-ef263eda.js";import{t as r}from"./assets/vendor-01f40b0f.js";const o={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},a="feedback-form-state";let t=JSON.parse(localStorage.getItem(a))||{email:"",message:""};o.form.addEventListener("submit",m);o.form.addEventListener("input",r(l,500));s();function m(e){t.email&&t.message?(e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),t={email:"",message:""}):alert("Fill please all fields")}function l(e){t[e.target.name]=e.target.value.trim(),localStorage.setItem(a,JSON.stringify(t))}function s(){const e=JSON.parse(localStorage.getItem(a));e&&(o.email.value=e.email||"",o.message.value=e.message||"")}
//# sourceMappingURL=commonHelpers2.js.map