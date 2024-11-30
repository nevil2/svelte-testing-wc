/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function An(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const U = {}, Xe = [], he = () => {
}, Gi = () => !1, $t = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cn = (e) => e.startsWith("onUpdate:"), G = Object.assign, Rn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ki = Object.prototype.hasOwnProperty, L = (e, t) => ki.call(e, t), C = Array.isArray, qe = (e) => Kt(e) === "[object Map]", Is = (e) => Kt(e) === "[object Set]", R = (e) => typeof e == "function", k = (e) => typeof e == "string", He = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Ds = (e) => (B(e) || R(e)) && R(e.then) && R(e.catch), Ls = Object.prototype.toString, Kt = (e) => Ls.call(e), Yi = (e) => Kt(e).slice(8, -1), Bt = (e) => Kt(e) === "[object Object]", Nn = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ut = /* @__PURE__ */ An(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Gt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ji = /-(\w)/g, pe = Gt(
  (e) => e.replace(Ji, (t, n) => n ? n.toUpperCase() : "")
), Xi = /\B([A-Z])/g, ae = Gt(
  (e) => e.replace(Xi, "-$1").toLowerCase()
), Ms = Gt((e) => e.charAt(0).toUpperCase() + e.slice(1)), nn = Gt(
  (e) => e ? `on${Ms(e)}` : ""
), Be = (e, t) => !Object.is(e, t), sn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Fs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, qi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ts = (e) => {
  const t = k(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ns;
const kt = () => ns || (ns = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function In(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = k(s) ? to(s) : In(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (k(e) || B(e))
    return e;
}
const Zi = /;(?![^(]*\))/g, Qi = /:([^]+)/, eo = /\/\*[^]*?\*\//g;
function to(e) {
  const t = {};
  return e.replace(eo, "").split(Zi).forEach((n) => {
    if (n) {
      const s = n.split(Qi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Dn(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const s = Dn(e[n]);
      s && (t += s + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const no = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", so = /* @__PURE__ */ An(no);
function Ws(e) {
  return !!e || e === "";
}
const Hs = (e) => !!(e && e.__v_isRef === !0), Vs = (e) => k(e) ? e : e == null ? "" : C(e) || B(e) && (e.toString === Ls || !R(e.toString)) ? Hs(e) ? Vs(e.value) : JSON.stringify(e, js, 2) : String(e), js = (e, t) => Hs(t) ? js(e, t.value) : qe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[on(s, o) + " =>"] = i, n),
    {}
  )
} : Is(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => on(n))
} : He(t) ? on(t) : B(t) && !C(t) && !Bt(t) ? String(t) : t, on = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var io = { PYENV_VIRTUALENV_INIT: "1", VIRTUALENVWRAPPER_WORKON_CD: "1", LESSOPEN: "| /usr/bin/lesspipe %s", WORKON_HOME: "/home/nevil/.virtualenvs", USER: "nevil", npm_config_user_agent: "npm/10.9.1 node/v22.11.0 linux x64 workspaces/false", SSH_AGENT_PID: "25354", npm_node_execpath: "/home/nevil/.fnm/node-versions/v22.11.0/installation/bin/node", SHLVL: "1", WT_PROFILE_ID: "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}", npm_config_noproxy: "", HOME: "/home/nevil", OLDPWD: "/home/nevil/dev/rdb/wc-reproduction", npm_package_json: "/home/nevil/dev/rdb/wc-reproduction/make-component/package.json", PYENV_SHELL: "bash", FNM_ARCH: "x64", npm_config_userconfig: "/home/nevil/.npmrc", npm_config_local_prefix: "/home/nevil/dev/rdb/wc-reproduction/make-component", WSL_DISTRO_NAME: "Ubuntu-20.04", COLOR: "1", WAYLAND_DISPLAY: "wayland-0", FNM_LOGLEVEL: "info", LOGNAME: "nevil", FNM_NODE_DIST_MIRROR: "https://nodejs.org/dist", NAME: "NevPC", WSL_INTEROP: "/run/WSL/25321_interop", PULSE_SERVER: "unix:/mnt/wslg/PulseServer", _: "/tmp/fnm_multishells/25335_1732962589033/bin/npm", npm_config_prefix: "/home/nevil/.fnm/node-versions/v22.11.0/installation", npm_config_npm_version: "10.9.1", TERM: "xterm-256color", npm_config_cache: "/home/nevil/.npm", npm_config_node_gyp: "/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/nevil/dev/rdb/wc-reproduction/make-component/node_modules/.bin:/home/nevil/dev/rdb/wc-reproduction/node_modules/.bin:/home/nevil/dev/rdb/node_modules/.bin:/home/nevil/dev/node_modules/.bin:/home/nevil/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/nevil/.local/bin:/home/nevil/.pyenv/plugins/pyenv-virtualenv/shims:/home/nevil/.pyenv/shims:/home/nevil/.pyenv/bin:/home/nevil/.local/bin:/tmp/fnm_multishells/25335_1732962589033/bin:/home/nevil/.fnm:/home/nevil/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/IDEMIA/AWP/Dlls:/mnt/c/Program Files/IDEMIA/AWP/Dlls:/mnt/c/Program Files/Git/cmd:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Users/nevil/.cargo/bin:/mnt/c/Users/nevil/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/nevil/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/nevil/AppData/Local/Android/Sdk/platform-tools:/mnt/c/Program Files/Java/jdk1.8.0_291/bin:/snap/bin:/home/nevil/android-sdk/cmdline-tools/latest/bin:/home/nevil/android-sdk/platform-tools", NODE: "/home/nevil/.fnm/node-versions/v22.11.0/installation/bin/node", npm_package_name: "wc-test-build", WT_SESSION: "27c0371f-a636-4b0c-886e-34fad97b189e", XDG_RUNTIME_DIR: "/mnt/wslg/runtime-dir", DISPLAY: ":0", PROJECT_HOME: "/home/nevil/dev", LANG: "C.UTF-8", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", FNM_DIR: "/home/nevil/.fnm", npm_lifecycle_script: "vite build", SSH_AUTH_SOCK: "/tmp/ssh-XXXXXXYqKHgL/agent.25353", SHELL: "/bin/bash", npm_package_version: "0.0.0", npm_lifecycle_event: "build", LESSCLOSE: "/usr/bin/lesspipe %s %s", VIRTUALENVWRAPPER_PROJECT_FILENAME: ".project", VIRTUALENVWRAPPER_HOOK_DIR: "/home/nevil/.virtualenvs", VIRTUALENVWRAPPER_SCRIPT: "/home/nevil/.local/bin/virtualenvwrapper.sh", npm_config_globalconfig: "/home/nevil/.fnm/node-versions/v22.11.0/installation/etc/npmrc", npm_config_init_module: "/home/nevil/.npm-init.js", PWD: "/home/nevil/dev/rdb/wc-reproduction/make-component", FNM_MULTISHELL_PATH: "/tmp/fnm_multishells/25335_1732962589033", npm_execpath: "/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/bin/npm-cli.js", ANDROID_HOME: "/home/nevil/android-sdk", PYENV_ROOT: "/home/nevil/.pyenv", XDG_DATA_DIRS: "/usr/local/share:/usr/share:/var/lib/snapd/desktop", npm_config_global_prefix: "/home/nevil/.fnm/node-versions/v22.11.0/installation", npm_command: "run-script", WSL2_GUI_APPS_ENABLED: "1", HOSTTYPE: "x86_64", WSLENV: "WT_SESSION:WT_PROFILE_ID:", INIT_CWD: "/home/nevil/dev/rdb/wc-reproduction/make-component", EDITOR: "vi", NODE_ENV: "production" };
let le;
class oo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = le, !t && le && (this.index = (le.scopes || (le.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = le;
      try {
        return le = this, t();
      } finally {
        le = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    le = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    le = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ro() {
  return le;
}
let j;
const rn = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, le && le.active && le.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rn.has(this) && (rn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $s(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ss(this), Ks(this);
    const t = j, n = me;
    j = this, me = !0;
    try {
      return this.fn();
    } finally {
      Bs(this), j = t, me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fn(t);
      this.deps = this.depsTail = void 0, ss(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _n(this) && this.run();
  }
  get dirty() {
    return _n(this);
  }
}
let zs = 0, at, dt;
function $s(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dt, dt = e;
    return;
  }
  e.next = at, at = e;
}
function Ln() {
  zs++;
}
function Mn() {
  if (--zs > 0)
    return;
  if (dt) {
    let t = dt;
    for (dt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; at; ) {
    let t = at;
    for (at = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Bs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Fn(s), lo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function _n(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === vt))
    return;
  e.globalVersion = vt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !_n(e)) {
    e.flags &= -3;
    return;
  }
  const n = j, s = me;
  j = e, me = !0;
  try {
    Ks(e);
    const i = e.fn(e._value);
    (t.version === 0 || Be(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    j = n, me = s, Bs(e), e.flags &= -3;
  }
}
function Fn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Fn(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let me = !0;
const ks = [];
function Ne() {
  ks.push(me), me = !1;
}
function Ie() {
  const e = ks.pop();
  me = e === void 0 ? !0 : e;
}
function ss(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = j;
    j = void 0;
    try {
      t();
    } finally {
      j = n;
    }
  }
}
let vt = 0;
class co {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!j || !me || j === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== j)
      n = this.activeLink = new co(j, this), j.deps ? (n.prevDep = j.depsTail, j.depsTail.nextDep = n, j.depsTail = n) : j.deps = j.depsTail = n, Js(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = j.depsTail, n.nextDep = void 0, j.depsTail.nextDep = n, j.depsTail = n, j.deps === n && (j.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, vt++, this.notify(t);
  }
  notify(t) {
    Ln();
    try {
      io.NODE_ENV;
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mn();
    }
  }
}
function Js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Js(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const gn = /* @__PURE__ */ new WeakMap(), Ge = Symbol(
  ""
), bn = Symbol(
  ""
), xt = Symbol(
  ""
);
function Z(e, t, n) {
  if (me && j) {
    let s = gn.get(e);
    s || gn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ys()), i.map = s, i.key = n), i.track();
  }
}
function Re(e, t, n, s, i, o) {
  const r = gn.get(e);
  if (!r) {
    vt++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Ln(), t === "clear")
    r.forEach(c);
  else {
    const u = C(e), h = u && Nn(n);
    if (u && n === "length") {
      const a = Number(s);
      r.forEach((p, S) => {
        (S === "length" || S === xt || !He(S) && S >= a) && c(p);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && c(r.get(n)), h && c(r.get(xt)), t) {
        case "add":
          u ? h && c(r.get("length")) : (c(r.get(Ge)), qe(e) && c(r.get(bn)));
          break;
        case "delete":
          u || (c(r.get(Ge)), qe(e) && c(r.get(bn)));
          break;
        case "set":
          qe(e) && c(r.get(Ge));
          break;
      }
  }
  Mn();
}
function Ye(e) {
  const t = M(e);
  return t === e ? t : (Z(t, "iterate", xt), Se(e) ? t : t.map(ce));
}
function Wn(e) {
  return Z(e = M(e), "iterate", xt), e;
}
const fo = {
  __proto__: null,
  [Symbol.iterator]() {
    return ln(this, Symbol.iterator, ce);
  },
  concat(...e) {
    return Ye(this).concat(
      ...e.map((t) => C(t) ? Ye(t) : t)
    );
  },
  entries() {
    return ln(this, "entries", (e) => (e[1] = ce(e[1]), e));
  },
  every(e, t) {
    return Ae(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ae(this, "filter", e, t, (n) => n.map(ce), arguments);
  },
  find(e, t) {
    return Ae(this, "find", e, t, ce, arguments);
  },
  findIndex(e, t) {
    return Ae(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ae(this, "findLast", e, t, ce, arguments);
  },
  findLastIndex(e, t) {
    return Ae(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ae(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cn(this, "includes", e);
  },
  indexOf(...e) {
    return cn(this, "indexOf", e);
  },
  join(e) {
    return Ye(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ae(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return lt(this, "pop");
  },
  push(...e) {
    return lt(this, "push", e);
  },
  reduce(e, ...t) {
    return is(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return is(this, "reduceRight", e, t);
  },
  shift() {
    return lt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ae(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return lt(this, "splice", e);
  },
  toReversed() {
    return Ye(this).toReversed();
  },
  toSorted(e) {
    return Ye(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ye(this).toSpliced(...e);
  },
  unshift(...e) {
    return lt(this, "unshift", e);
  },
  values() {
    return ln(this, "values", ce);
  }
};
function ln(e, t, n) {
  const s = Wn(e), i = s[t]();
  return s !== e && !Se(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const uo = Array.prototype;
function Ae(e, t, n, s, i, o) {
  const r = Wn(e), c = r !== e && !Se(e), u = r[t];
  if (u !== uo[t]) {
    const p = u.apply(e, o);
    return c ? ce(p) : p;
  }
  let h = n;
  r !== e && (c ? h = function(p, S) {
    return n.call(this, ce(p), S, e);
  } : n.length > 2 && (h = function(p, S) {
    return n.call(this, p, S, e);
  }));
  const a = u.call(r, h, s);
  return c && i ? i(a) : a;
}
function is(e, t, n, s) {
  const i = Wn(e);
  let o = n;
  return i !== e && (Se(e) ? n.length > 3 && (o = function(r, c, u) {
    return n.call(this, r, c, u, e);
  }) : o = function(r, c, u) {
    return n.call(this, r, ce(c), u, e);
  }), i[t](o, ...s);
}
function cn(e, t, n) {
  const s = M(e);
  Z(s, "iterate", xt);
  const i = s[t](...n);
  return (i === -1 || i === !1) && Vn(n[0]) ? (n[0] = M(n[0]), s[t](...n)) : i;
}
function lt(e, t, n = []) {
  Ne(), Ln();
  const s = M(e)[t].apply(e, n);
  return Mn(), Ie(), s;
}
const ao = /* @__PURE__ */ An("__proto__,__v_isRef,__isVue"), Xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function ho(e) {
  He(e) || (e = String(e));
  const t = M(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class qs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (i ? o ? si : ni : o ? ti : ei).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = C(t);
    if (!i) {
      let u;
      if (r && (u = fo[n]))
        return u;
      if (n === "hasOwnProperty")
        return ho;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : s
    );
    return (He(n) ? Xs.has(n) : ao(n)) || (i || Z(t, "get", n), o) ? c : Q(c) ? r && Nn(n) ? c : c.value : B(c) ? i ? ii(c) : Hn(c) : c;
  }
}
class Zs extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    if (!this._isShallow) {
      const u = et(o);
      if (!Se(s) && !et(s) && (o = M(o), s = M(s)), !C(t) && Q(o) && !Q(s))
        return u ? !1 : (o.value = s, !0);
    }
    const r = C(t) && Nn(n) ? Number(n) < t.length : L(t, n), c = Reflect.set(
      t,
      n,
      s,
      Q(t) ? t : i
    );
    return t === M(i) && (r ? Be(s, o) && Re(t, "set", n, s) : Re(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = L(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Re(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!He(n) || !Xs.has(n)) && Z(t, "has", n), s;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      C(t) ? "length" : Ge
    ), Reflect.ownKeys(t);
  }
}
class Qs extends qs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const po = /* @__PURE__ */ new Zs(), mo = /* @__PURE__ */ new Qs(), _o = /* @__PURE__ */ new Zs(!0), go = /* @__PURE__ */ new Qs(!0), vn = (e) => e, Rt = (e) => Reflect.getPrototypeOf(e);
function bo(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = M(i), r = qe(o), c = e === "entries" || e === Symbol.iterator && r, u = e === "keys" && r, h = i[e](...s), a = n ? vn : t ? xn : ce;
    return !t && Z(
      o,
      "iterate",
      u ? bn : Ge
    ), {
      // iterator protocol
      next() {
        const { value: p, done: S } = h.next();
        return S ? { value: p, done: S } : {
          value: c ? [a(p[0]), a(p[1])] : a(p),
          done: S
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Nt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vo(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = M(o), c = M(i);
      e || (Be(i, c) && Z(r, "get", i), Z(r, "get", c));
      const { has: u } = Rt(r), h = t ? vn : e ? xn : ce;
      if (u.call(r, i))
        return h(o.get(i));
      if (u.call(r, c))
        return h(o.get(c));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Z(M(i), "iterate", Ge), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, r = M(o), c = M(i);
      return e || (Be(i, c) && Z(r, "has", i), Z(r, "has", c)), i === c ? o.has(i) : o.has(i) || o.has(c);
    },
    forEach(i, o) {
      const r = this, c = r.__v_raw, u = M(c), h = t ? vn : e ? xn : ce;
      return !e && Z(u, "iterate", Ge), c.forEach((a, p) => i.call(o, h(a), h(p), r));
    }
  };
  return G(
    n,
    e ? {
      add: Nt("add"),
      set: Nt("set"),
      delete: Nt("delete"),
      clear: Nt("clear")
    } : {
      add(i) {
        !t && !Se(i) && !et(i) && (i = M(i));
        const o = M(this);
        return Rt(o).has.call(o, i) || (o.add(i), Re(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !Se(o) && !et(o) && (o = M(o));
        const r = M(this), { has: c, get: u } = Rt(r);
        let h = c.call(r, i);
        h || (i = M(i), h = c.call(r, i));
        const a = u.call(r, i);
        return r.set(i, o), h ? Be(o, a) && Re(r, "set", i, o) : Re(r, "add", i, o), this;
      },
      delete(i) {
        const o = M(this), { has: r, get: c } = Rt(o);
        let u = r.call(o, i);
        u || (i = M(i), u = r.call(o, i)), c && c.call(o, i);
        const h = o.delete(i);
        return u && Re(o, "delete", i, void 0), h;
      },
      clear() {
        const i = M(this), o = i.size !== 0, r = i.clear();
        return o && Re(
          i,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = bo(i, e, t);
  }), n;
}
function Yt(e, t) {
  const n = vo(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    L(n, i) && i in s ? n : s,
    i,
    o
  );
}
const xo = {
  get: /* @__PURE__ */ Yt(!1, !1)
}, Eo = {
  get: /* @__PURE__ */ Yt(!1, !0)
}, yo = {
  get: /* @__PURE__ */ Yt(!0, !1)
}, So = {
  get: /* @__PURE__ */ Yt(!0, !0)
}, ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap();
function Oo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oo(Yi(e));
}
function Hn(e) {
  return et(e) ? e : Jt(
    e,
    !1,
    po,
    xo,
    ei
  );
}
function Po(e) {
  return Jt(
    e,
    !1,
    _o,
    Eo,
    ti
  );
}
function ii(e) {
  return Jt(
    e,
    !0,
    mo,
    yo,
    ni
  );
}
function It(e) {
  return Jt(
    e,
    !0,
    go,
    So,
    si
  );
}
function Jt(e, t, n, s, i) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = wo(e);
  if (r === 0)
    return e;
  const c = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, c), c;
}
function ht(e) {
  return et(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function Vn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function To(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && Fs(e, "__v_skip", !0), e;
}
const ce = (e) => B(e) ? Hn(e) : e, xn = (e) => B(e) ? ii(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function oi(e) {
  return Q(e) ? e.value : e;
}
const Ao = {
  get: (e, t, n) => t === "__v_raw" ? e : oi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Q(i) && !Q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ri(e) {
  return ht(e) ? e : new Proxy(e, Ao);
}
class Co {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = vt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    j !== this)
      return $s(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Gs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ro(e, t, n = !1) {
  let s, i;
  return R(e) ? s = e : (s = e.get, i = e.set), new Co(s, i, n);
}
const Dt = {}, Wt = /* @__PURE__ */ new WeakMap();
let Ke;
function No(e, t = !1, n = Ke) {
  if (n) {
    let s = Wt.get(n);
    s || Wt.set(n, s = []), s.push(e);
  }
}
function Io(e, t, n = U) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: c, call: u } = n, h = (T) => i ? T : Se(T) || i === !1 || i === 0 ? We(T, 1) : We(T);
  let a, p, S, O, D = !1, I = !1;
  if (Q(e) ? (p = () => e.value, D = Se(e)) : ht(e) ? (p = () => h(e), D = !0) : C(e) ? (I = !0, D = e.some((T) => ht(T) || Se(T)), p = () => e.map((T) => {
    if (Q(T))
      return T.value;
    if (ht(T))
      return h(T);
    if (R(T))
      return u ? u(T, 2) : T();
  })) : R(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (S) {
      Ne();
      try {
        S();
      } finally {
        Ie();
      }
    }
    const T = Ke;
    Ke = a;
    try {
      return u ? u(e, 3, [O]) : e(O);
    } finally {
      Ke = T;
    }
  } : p = he, t && i) {
    const T = p, Y = i === !0 ? 1 / 0 : i;
    p = () => We(T(), Y);
  }
  const X = ro(), W = () => {
    a.stop(), X && X.active && Rn(X.effects, a);
  };
  if (o && t) {
    const T = t;
    t = (...Y) => {
      T(...Y), W();
    };
  }
  let $ = I ? new Array(e.length).fill(Dt) : Dt;
  const K = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const Y = a.run();
        if (i || D || (I ? Y.some((Pe, ue) => Be(Pe, $[ue])) : Be(Y, $))) {
          S && S();
          const Pe = Ke;
          Ke = a;
          try {
            const ue = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              $ === Dt ? void 0 : I && $[0] === Dt ? [] : $,
              O
            ];
            u ? u(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            ), $ = Y;
          } finally {
            Ke = Pe;
          }
        }
      } else
        a.run();
  };
  return c && c(K), a = new Us(p), a.scheduler = r ? () => r(K, !1) : K, O = (T) => No(T, !1, a), S = a.onStop = () => {
    const T = Wt.get(a);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const Y of T) Y();
      Wt.delete(a);
    }
  }, t ? s ? K(!0) : $ = a.run() : r ? r(K.bind(null, !0), !0) : a.run(), W.pause = a.pause.bind(a), W.resume = a.resume.bind(a), W.stop = W, W;
}
function We(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Q(e))
    We(e.value, t, n);
  else if (C(e))
    for (let s = 0; s < e.length; s++)
      We(e[s], t, n);
  else if (Is(e) || qe(e))
    e.forEach((s) => {
      We(s, t, n);
    });
  else if (Bt(e)) {
    for (const s in e)
      We(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && We(e[s], t, n);
  }
  return e;
}
var Le = { PYENV_VIRTUALENV_INIT: "1", VIRTUALENVWRAPPER_WORKON_CD: "1", LESSOPEN: "| /usr/bin/lesspipe %s", WORKON_HOME: "/home/nevil/.virtualenvs", USER: "nevil", npm_config_user_agent: "npm/10.9.1 node/v22.11.0 linux x64 workspaces/false", SSH_AGENT_PID: "25354", npm_node_execpath: "/home/nevil/.fnm/node-versions/v22.11.0/installation/bin/node", SHLVL: "1", WT_PROFILE_ID: "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}", npm_config_noproxy: "", HOME: "/home/nevil", OLDPWD: "/home/nevil/dev/rdb/wc-reproduction", npm_package_json: "/home/nevil/dev/rdb/wc-reproduction/make-component/package.json", PYENV_SHELL: "bash", FNM_ARCH: "x64", npm_config_userconfig: "/home/nevil/.npmrc", npm_config_local_prefix: "/home/nevil/dev/rdb/wc-reproduction/make-component", WSL_DISTRO_NAME: "Ubuntu-20.04", COLOR: "1", WAYLAND_DISPLAY: "wayland-0", FNM_LOGLEVEL: "info", LOGNAME: "nevil", FNM_NODE_DIST_MIRROR: "https://nodejs.org/dist", NAME: "NevPC", WSL_INTEROP: "/run/WSL/25321_interop", PULSE_SERVER: "unix:/mnt/wslg/PulseServer", _: "/tmp/fnm_multishells/25335_1732962589033/bin/npm", npm_config_prefix: "/home/nevil/.fnm/node-versions/v22.11.0/installation", npm_config_npm_version: "10.9.1", TERM: "xterm-256color", npm_config_cache: "/home/nevil/.npm", npm_config_node_gyp: "/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/nevil/dev/rdb/wc-reproduction/make-component/node_modules/.bin:/home/nevil/dev/rdb/wc-reproduction/node_modules/.bin:/home/nevil/dev/rdb/node_modules/.bin:/home/nevil/dev/node_modules/.bin:/home/nevil/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/home/nevil/.local/bin:/home/nevil/.pyenv/plugins/pyenv-virtualenv/shims:/home/nevil/.pyenv/shims:/home/nevil/.pyenv/bin:/home/nevil/.local/bin:/tmp/fnm_multishells/25335_1732962589033/bin:/home/nevil/.fnm:/home/nevil/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/usr/lib/wsl/lib:/mnt/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/mnt/c/WINDOWS/system32:/mnt/c/WINDOWS:/mnt/c/WINDOWS/System32/Wbem:/mnt/c/WINDOWS/System32/WindowsPowerShell/v1.0/:/mnt/c/WINDOWS/System32/OpenSSH/:/mnt/c/Program Files (x86)/IDEMIA/AWP/Dlls:/mnt/c/Program Files/IDEMIA/AWP/Dlls:/mnt/c/Program Files/Git/cmd:/mnt/c/Program Files/Docker/Docker/resources/bin:/mnt/c/Users/nevil/.cargo/bin:/mnt/c/Users/nevil/AppData/Local/Microsoft/WindowsApps:/mnt/c/Users/nevil/AppData/Local/Programs/Microsoft VS Code/bin:/mnt/c/Users/nevil/AppData/Local/Android/Sdk/platform-tools:/mnt/c/Program Files/Java/jdk1.8.0_291/bin:/snap/bin:/home/nevil/android-sdk/cmdline-tools/latest/bin:/home/nevil/android-sdk/platform-tools", NODE: "/home/nevil/.fnm/node-versions/v22.11.0/installation/bin/node", npm_package_name: "wc-test-build", WT_SESSION: "27c0371f-a636-4b0c-886e-34fad97b189e", XDG_RUNTIME_DIR: "/mnt/wslg/runtime-dir", DISPLAY: ":0", PROJECT_HOME: "/home/nevil/dev", LANG: "C.UTF-8", LS_COLORS: "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", FNM_DIR: "/home/nevil/.fnm", npm_lifecycle_script: "vite build", SSH_AUTH_SOCK: "/tmp/ssh-XXXXXXYqKHgL/agent.25353", SHELL: "/bin/bash", npm_package_version: "0.0.0", npm_lifecycle_event: "build", LESSCLOSE: "/usr/bin/lesspipe %s %s", VIRTUALENVWRAPPER_PROJECT_FILENAME: ".project", VIRTUALENVWRAPPER_HOOK_DIR: "/home/nevil/.virtualenvs", VIRTUALENVWRAPPER_SCRIPT: "/home/nevil/.local/bin/virtualenvwrapper.sh", npm_config_globalconfig: "/home/nevil/.fnm/node-versions/v22.11.0/installation/etc/npmrc", npm_config_init_module: "/home/nevil/.npm-init.js", PWD: "/home/nevil/dev/rdb/wc-reproduction/make-component", FNM_MULTISHELL_PATH: "/tmp/fnm_multishells/25335_1732962589033", npm_execpath: "/home/nevil/.fnm/node-versions/v22.11.0/installation/lib/node_modules/npm/bin/npm-cli.js", ANDROID_HOME: "/home/nevil/android-sdk", PYENV_ROOT: "/home/nevil/.pyenv", XDG_DATA_DIRS: "/usr/local/share:/usr/share:/var/lib/snapd/desktop", npm_config_global_prefix: "/home/nevil/.fnm/node-versions/v22.11.0/installation", npm_command: "run-script", WSL2_GUI_APPS_ENABLED: "1", HOSTTYPE: "x86_64", WSLENV: "WT_SESSION:WT_PROFILE_ID:", INIT_CWD: "/home/nevil/dev/rdb/wc-reproduction/make-component", EDITOR: "vi", NODE_ENV: "production" };
const pt = [];
let fn = !1;
function Do(e, ...t) {
  if (fn) return;
  fn = !0, Ne();
  const n = pt.length ? pt[pt.length - 1].component : null, s = n && n.appContext.config.warnHandler, i = Lo();
  if (s)
    nt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var r, c;
          return (c = (r = o.toString) == null ? void 0 : r.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${Ui(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Mo(i)), console.warn(...o);
  }
  Ie(), fn = !1;
}
function Lo() {
  let e = pt[pt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Mo(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Fo(n));
  }), t;
}
function Fo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, i = ` at <${Ui(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [i, ...Wo(e.props), o] : [i + o];
}
function Wo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...li(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function li(e, t, n) {
  return k(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = li(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
function nt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Xt(i, t, n);
  }
}
function we(e, t, n, s) {
  if (R(e)) {
    const i = nt(e, t, n, s);
    return i && Ds(i) && i.catch((o) => {
      Xt(o, t, n);
    }), i;
  }
  if (C(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(we(e[o], t, n, s));
    return i;
  }
}
function Xt(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || U;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (o) {
      Ne(), nt(o, null, 10, [
        e,
        u,
        h
      ]), Ie();
      return;
    }
  }
  Ho(e, n, i, s, r);
}
function Ho(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const ne = [];
let ve = -1;
const Ze = [];
let Me = null, Je = 0;
const ci = /* @__PURE__ */ Promise.resolve();
let Ht = null;
function fi(e) {
  const t = Ht || ci;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vo(e) {
  let t = ve + 1, n = ne.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ne[s], o = Et(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function jn(e) {
  if (!(e.flags & 1)) {
    const t = Et(e), n = ne[ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Et(n) ? ne.push(e) : ne.splice(Vo(t), 0, e), e.flags |= 1, ui();
  }
}
function ui() {
  Ht || (Ht = ci.then(di));
}
function jo(e) {
  C(e) ? Ze.push(...e) : Me && e.id === -1 ? Me.splice(Je + 1, 0, e) : e.flags & 1 || (Ze.push(e), e.flags |= 1), ui();
}
function os(e, t, n = ve + 1) {
  for (; n < ne.length; n++) {
    const s = ne[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ne.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ai(e) {
  if (Ze.length) {
    const t = [...new Set(Ze)].sort(
      (n, s) => Et(n) - Et(s)
    );
    if (Ze.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, Je = 0; Je < Me.length; Je++) {
      const n = Me[Je];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Me = null, Je = 0;
  }
}
const Et = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function di(e) {
  const t = he;
  try {
    for (ve = 0; ve < ne.length; ve++) {
      const n = ne[ve];
      n && !(n.flags & 8) && (Le.NODE_ENV !== "production" && t(n), n.flags & 4 && (n.flags &= -2), nt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; ve < ne.length; ve++) {
      const n = ne[ve];
      n && (n.flags &= -2);
    }
    ve = -1, ne.length = 0, ai(), Ht = null, (ne.length || Ze.length) && di();
  }
}
let ye = null, hi = null;
function Vt(e) {
  const t = ye;
  return ye = e, hi = e && e.type.__scopeId || null, t;
}
function Uo(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && hs(-1);
    const o = Vt(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Vt(o), s._d && hs(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ze(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const c = i[r];
    o && (c.oldValue = o[r].value);
    let u = c.dir[s];
    u && (Ne(), we(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ie());
  }
}
const zo = Symbol("_vte"), $o = (e) => e.__isTeleport;
function Un(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Un(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ko(e, t) {
  return R(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    G({ name: e.name }, t, { setup: e })
  ) : e;
}
function pi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function jt(e, t, n, s, i = !1) {
  if (C(e)) {
    e.forEach(
      (D, I) => jt(
        D,
        t && (C(t) ? t[I] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (mt(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && jt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Gn(s.component) : s.el, r = i ? null : o, { i: c, r: u } = e, h = t && t.r, a = c.refs === U ? c.refs = {} : c.refs, p = c.setupState, S = M(p), O = p === U ? () => !1 : (D) => L(S, D);
  if (h != null && h !== u && (k(h) ? (a[h] = null, O(h) && (p[h] = null)) : Q(h) && (h.value = null)), R(u))
    nt(u, c, 12, [r, a]);
  else {
    const D = k(u), I = Q(u);
    if (D || I) {
      const X = () => {
        if (e.f) {
          const W = D ? O(u) ? p[u] : a[u] : u.value;
          i ? C(W) && Rn(W, o) : C(W) ? W.includes(o) || W.push(o) : D ? (a[u] = [o], O(u) && (p[u] = a[u])) : (u.value = [o], e.k && (a[e.k] = u.value));
        } else D ? (a[u] = r, O(u) && (p[u] = r)) : I && (u.value = r, e.k && (a[e.k] = r));
      };
      r ? (X.id = -1, re(X, n)) : X();
    }
  }
}
kt().requestIdleCallback;
kt().cancelIdleCallback;
const mt = (e) => !!e.type.__asyncLoader, mi = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  _i(e, "a", t);
}
function Go(e, t) {
  _i(e, "da", t);
}
function _i(e, t, n = J) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (qt(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      mi(i.parent.vnode) && ko(s, t, n, i), i = i.parent;
  }
}
function ko(e, t, n, s) {
  const i = qt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  gi(() => {
    Rn(s[t], i);
  }, n);
}
function qt(e, t, n = J, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Ne();
      const c = Ot(n), u = we(t, n, e, r);
      return c(), Ie(), u;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const De = (e) => (t, n = J) => {
  (!St || e === "sp") && qt(e, (...s) => t(...s), n);
}, Yo = De("bm"), Jo = De("m"), Xo = De(
  "bu"
), qo = De("u"), Zo = De(
  "bum"
), gi = De("um"), Qo = De(
  "sp"
), er = De("rtg"), tr = De("rtc");
function nr(e, t = J) {
  qt("ec", e, t);
}
const sr = Symbol.for("v-ndc"), En = (e) => e ? Vi(e) ? Gn(e) : En(e.parent) : null, _t = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => En(e.parent),
    $root: (e) => En(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      jn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => wr.bind(e)
  })
), un = (e, t) => e !== U && !e.__isScriptSetup && L(e, t), ir = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: c, appContext: u } = e;
    let h;
    if (t[0] !== "$") {
      const O = r[t];
      if (O !== void 0)
        switch (O) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (un(s, t))
          return r[t] = 1, s[t];
        if (i !== U && L(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && L(h, t)
        )
          return r[t] = 3, o[t];
        if (n !== U && L(n, t))
          return r[t] = 4, n[t];
        yn && (r[t] = 0);
      }
    }
    const a = _t[t];
    let p, S;
    if (a)
      return t === "$attrs" && Z(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== U && L(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      S = u.config.globalProperties, L(S, t)
    )
      return S[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return un(i, t) ? (i[t] = n, !0) : s !== U && L(s, t) ? (s[t] = n, !0) : L(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o }
  }, r) {
    let c;
    return !!n[r] || e !== U && L(e, r) || un(t, r) || (c = o[0]) && L(c, r) || L(s, r) || L(_t, r) || L(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rs(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let yn = !0;
function or(e) {
  const t = zn(e), n = e.proxy, s = e.ctx;
  yn = !1, t.beforeCreate && ls(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: S,
    beforeUpdate: O,
    updated: D,
    activated: I,
    deactivated: X,
    beforeDestroy: W,
    beforeUnmount: $,
    destroyed: K,
    unmounted: T,
    render: Y,
    renderTracked: Pe,
    renderTriggered: ue,
    errorCaptured: Te,
    serverPrefetch: wt,
    // public API
    expose: Ve,
    inheritAttrs: st,
    // assets
    components: Pt,
    directives: Tt,
    filters: en
  } = t;
  if (h && rr(h, s, null), r)
    for (const z in r) {
      const H = r[z];
      R(H) && (s[z] = H.bind(n));
    }
  if (i) {
    const z = i.call(n, n);
    B(z) && (e.data = Hn(z));
  }
  if (yn = !0, o)
    for (const z in o) {
      const H = o[z], je = R(H) ? H.bind(n, n) : R(H.get) ? H.get.bind(n, n) : he, At = !R(H) && R(H.set) ? H.set.bind(n) : he, Ue = Xr({
        get: je,
        set: At
      });
      Object.defineProperty(s, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: (_e) => Ue.value = _e
      });
    }
  if (c)
    for (const z in c)
      bi(c[z], s, n, z);
  if (u) {
    const z = R(u) ? u.call(n) : u;
    Reflect.ownKeys(z).forEach((H) => {
      dr(H, z[H]);
    });
  }
  a && ls(a, e, "c");
  function ee(z, H) {
    C(H) ? H.forEach((je) => z(je.bind(n))) : H && z(H.bind(n));
  }
  if (ee(Yo, p), ee(Jo, S), ee(Xo, O), ee(qo, D), ee(Bo, I), ee(Go, X), ee(nr, Te), ee(tr, Pe), ee(er, ue), ee(Zo, $), ee(gi, T), ee(Qo, wt), C(Ve))
    if (Ve.length) {
      const z = e.exposed || (e.exposed = {});
      Ve.forEach((H) => {
        Object.defineProperty(z, H, {
          get: () => n[H],
          set: (je) => n[H] = je
        });
      });
    } else e.exposed || (e.exposed = {});
  Y && e.render === he && (e.render = Y), st != null && (e.inheritAttrs = st), Pt && (e.components = Pt), Tt && (e.directives = Tt), wt && pi(e);
}
function rr(e, t, n = he) {
  C(e) && (e = Sn(e));
  for (const s in e) {
    const i = e[s];
    let o;
    B(i) ? "default" in i ? o = Lt(
      i.from || s,
      i.default,
      !0
    ) : o = Lt(i.from || s) : o = Lt(i), Q(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[s] = o;
  }
}
function ls(e, t, n) {
  we(
    C(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function bi(e, t, n, s) {
  let i = s.includes(".") ? Ii(n, s) : () => n[s];
  if (k(e)) {
    const o = t[e];
    R(o) && gt(i, o);
  } else if (R(e))
    gt(i, e.bind(n));
  else if (B(e))
    if (C(e))
      e.forEach((o) => bi(o, t, n, s));
    else {
      const o = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(o) && gt(i, o, e);
    }
}
function zn(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !i.length && !n && !s ? u = t : (u = {}, i.length && i.forEach(
    (h) => Ut(u, h, r, !0)
  ), Ut(u, t, r)), B(t) && o.set(t, u), u;
}
function Ut(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && Ut(e, o, n, !0), i && i.forEach(
    (r) => Ut(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const c = lr[r] || n && n[r];
      e[r] = c ? c(e[r], t[r]) : t[r];
    }
  return e;
}
const lr = {
  data: cs,
  props: fs,
  emits: fs,
  // objects
  methods: ft,
  computed: ft,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: ft,
  directives: ft,
  // watch
  watch: fr,
  // provide / inject
  provide: cs,
  inject: cr
};
function cs(e, t) {
  return t ? e ? function() {
    return G(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cr(e, t) {
  return ft(Sn(e), Sn(t));
}
function Sn(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ft(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    rs(e),
    rs(t ?? {})
  ) : t;
}
function fr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = te(e[s], t[s]);
  return n;
}
function vi() {
  return {
    app: null,
    config: {
      isNativeTag: Gi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ur = 0;
function ar(e, t) {
  return function(s, i = null) {
    R(s) || (s = G({}, s)), i != null && !B(i) && (i = null);
    const o = vi(), r = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = o.app = {
      _uid: ur++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: qr,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return r.has(a) || (a && R(a.install) ? (r.add(a), a.install(h, ...p)) : R(a) && (r.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (o.components[a] = p, h) : o.components[a];
      },
      directive(a, p) {
        return p ? (o.directives[a] = p, h) : o.directives[a];
      },
      mount(a, p, S) {
        if (!u) {
          const O = h._ceVNode || Oe(s, i);
          return O.appContext = o, S === !0 ? S = "svg" : S === !1 && (S = void 0), p && t ? t(O, a) : e(O, a, S), u = !0, h._container = a, a.__vue_app__ = h, Gn(O.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        u && (we(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return o.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = Qe;
        Qe = h;
        try {
          return a();
        } finally {
          Qe = p;
        }
      }
    };
    return h;
  };
}
let Qe = null;
function dr(e, t) {
  if (J) {
    let n = J.provides;
    const s = J.parent && J.parent.provides;
    s === n && (n = J.provides = Object.create(s)), n[e] = t;
  }
}
function Lt(e, t, n = !1) {
  const s = J || ye;
  if (s || Qe) {
    const i = Qe ? Qe._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(s && s.proxy) : t;
  }
}
const xi = {}, Ei = () => Object.create(xi), yi = (e) => Object.getPrototypeOf(e) === xi;
function hr(e, t, n, s = !1) {
  const i = {}, o = Ei();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Si(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : Po(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function pr(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, c = M(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let S = a[p];
        if (Zt(e.emitsOptions, S))
          continue;
        const O = t[S];
        if (u)
          if (L(o, S))
            O !== o[S] && (o[S] = O, h = !0);
          else {
            const D = pe(S);
            i[D] = On(
              u,
              c,
              D,
              O,
              e,
              !1
            );
          }
        else
          O !== o[S] && (o[S] = O, h = !0);
      }
    }
  } else {
    Si(e, t, i, o) && (h = !0);
    let a;
    for (const p in c)
      (!t || // for camelCase
      !L(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = ae(p)) === p || !L(t, a))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[p] = On(
        u,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete i[p]);
    if (o !== c)
      for (const p in o)
        (!t || !L(t, p)) && (delete o[p], h = !0);
  }
  h && Re(e.attrs, "set", "");
}
function Si(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, c;
  if (t)
    for (let u in t) {
      if (ut(u))
        continue;
      const h = t[u];
      let a;
      i && L(i, a = pe(u)) ? !o || !o.includes(a) ? n[a] = h : (c || (c = {}))[a] = h : Zt(e.emitsOptions, u) || (!(u in s) || h !== s[u]) && (s[u] = h, r = !0);
    }
  if (o) {
    const u = M(n), h = c || U;
    for (let a = 0; a < o.length; a++) {
      const p = o[a];
      n[p] = On(
        i,
        u,
        p,
        h[p],
        e,
        !L(h, p)
      );
    }
  }
  return r;
}
function On(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const c = L(r, "default");
    if (c && s === void 0) {
      const u = r.default;
      if (r.type !== Function && !r.skipFactory && R(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          s = h[n];
        else {
          const a = Ot(i);
          s = h[n] = u.call(
            null,
            t
          ), a();
        }
      } else
        s = u;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !c ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ae(n)) && (s = !0));
  }
  return s;
}
const mr = /* @__PURE__ */ new WeakMap();
function Oi(e, t, n = !1) {
  const s = n ? mr : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const a = (p) => {
      u = !0;
      const [S, O] = Oi(p, t, !0);
      G(r, S), O && c.push(...O);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!o && !u)
    return B(e) && s.set(e, Xe), Xe;
  if (C(o))
    for (let a = 0; a < o.length; a++) {
      const p = pe(o[a]);
      us(p) && (r[p] = U);
    }
  else if (o)
    for (const a in o) {
      const p = pe(a);
      if (us(p)) {
        const S = o[a], O = r[p] = C(S) || R(S) ? { type: S } : G({}, S), D = O.type;
        let I = !1, X = !0;
        if (C(D))
          for (let W = 0; W < D.length; ++W) {
            const $ = D[W], K = R($) && $.name;
            if (K === "Boolean") {
              I = !0;
              break;
            } else K === "String" && (X = !1);
          }
        else
          I = R(D) && D.name === "Boolean";
        O[
          0
          /* shouldCast */
        ] = I, O[
          1
          /* shouldCastTrue */
        ] = X, (I || L(O, "default")) && c.push(p);
      }
    }
  const h = [r, c];
  return B(e) && s.set(e, h), h;
}
function us(e) {
  return e[0] !== "$" && !ut(e);
}
const wi = (e) => e[0] === "_" || e === "$stable", $n = (e) => C(e) ? e.map(Ee) : [Ee(e)], _r = (e, t, n) => {
  if (t._n)
    return t;
  const s = Uo((...i) => (Le.NODE_ENV !== "production" && J && (!n || (n.root, J.root)), $n(t(...i))), n);
  return s._c = !1, s;
}, Pi = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (wi(i)) continue;
    const o = e[i];
    if (R(o))
      t[i] = _r(i, o, s);
    else if (o != null) {
      const r = $n(o);
      t[i] = () => r;
    }
  }
}, Ti = (e, t) => {
  const n = $n(t);
  e.slots.default = () => n;
}, Ai = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, gr = (e, t, n) => {
  const s = e.slots = Ei();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Ai(s, t, n), n && Fs(s, "_", i, !0)) : Pi(t, s);
  } else t && Ti(e, t);
}, br = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = U;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : Ai(i, t, n) : (o = !t.$stable, Pi(t, i)), r = t;
  } else t && (Ti(e, t), r = { default: 1 });
  if (o)
    for (const c in i)
      !wi(c) && r[c] == null && delete i[c];
}, re = Ir;
function vr(e) {
  return xr(e);
}
function xr(e, t) {
  const n = kt();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: S,
    setScopeId: O = he,
    insertStaticContent: D
  } = e, I = (l, f, d, g = null, m = null, _ = null, E = void 0, x = null, v = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ct(l, f) && (g = Ct(l), _e(l, m, _, !0), l = null), f.patchFlag === -2 && (v = !1, f.dynamicChildren = null);
    const { type: b, ref: P, shapeFlag: y } = f;
    switch (b) {
      case Qt:
        X(l, f, d, g);
        break;
      case ke:
        W(l, f, d, g);
        break;
      case hn:
        l == null && $(f, d, g, E);
        break;
      case xe:
        Pt(
          l,
          f,
          d,
          g,
          m,
          _,
          E,
          x,
          v
        );
        break;
      default:
        y & 1 ? Y(
          l,
          f,
          d,
          g,
          m,
          _,
          E,
          x,
          v
        ) : y & 6 ? Tt(
          l,
          f,
          d,
          g,
          m,
          _,
          E,
          x,
          v
        ) : (y & 64 || y & 128) && b.process(
          l,
          f,
          d,
          g,
          m,
          _,
          E,
          x,
          v,
          ot
        );
    }
    P != null && m && jt(P, l && l.ref, _, f || l, !f);
  }, X = (l, f, d, g) => {
    if (l == null)
      s(
        f.el = c(f.children),
        d,
        g
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && h(m, f.children);
    }
  }, W = (l, f, d, g) => {
    l == null ? s(
      f.el = u(f.children || ""),
      d,
      g
    ) : f.el = l.el;
  }, $ = (l, f, d, g) => {
    [l.el, l.anchor] = D(
      l.children,
      f,
      d,
      g,
      l.el,
      l.anchor
    );
  }, K = ({ el: l, anchor: f }, d, g) => {
    let m;
    for (; l && l !== f; )
      m = S(l), s(l, d, g), l = m;
    s(f, d, g);
  }, T = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = S(l), i(l), l = d;
    i(f);
  }, Y = (l, f, d, g, m, _, E, x, v) => {
    f.type === "svg" ? E = "svg" : f.type === "math" && (E = "mathml"), l == null ? Pe(
      f,
      d,
      g,
      m,
      _,
      E,
      x,
      v
    ) : wt(
      l,
      f,
      m,
      _,
      E,
      x,
      v
    );
  }, Pe = (l, f, d, g, m, _, E, x) => {
    let v, b;
    const { props: P, shapeFlag: y, transition: w, dirs: A } = l;
    if (v = l.el = r(
      l.type,
      _,
      P && P.is,
      P
    ), y & 8 ? a(v, l.children) : y & 16 && Te(
      l.children,
      v,
      null,
      g,
      m,
      an(l, _),
      E,
      x
    ), A && ze(l, null, g, "created"), ue(v, l, l.scopeId, E, g), P) {
      for (const V in P)
        V !== "value" && !ut(V) && o(v, V, null, P[V], _, g);
      "value" in P && o(v, "value", null, P.value, _), (b = P.onVnodeBeforeMount) && be(b, g, l);
    }
    A && ze(l, null, g, "beforeMount");
    const N = Er(m, w);
    N && w.beforeEnter(v), s(v, f, d), ((b = P && P.onVnodeMounted) || N || A) && re(() => {
      b && be(b, g, l), N && w.enter(v), A && ze(l, null, g, "mounted");
    }, m);
  }, ue = (l, f, d, g, m) => {
    if (d && O(l, d), g)
      for (let _ = 0; _ < g.length; _++)
        O(l, g[_]);
    if (m) {
      let _ = m.subTree;
      if (f === _ || Li(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const E = m.vnode;
        ue(
          l,
          E,
          E.scopeId,
          E.slotScopeIds,
          m.parent
        );
      }
    }
  }, Te = (l, f, d, g, m, _, E, x, v = 0) => {
    for (let b = v; b < l.length; b++) {
      const P = l[b] = x ? Fe(l[b]) : Ee(l[b]);
      I(
        null,
        P,
        f,
        d,
        g,
        m,
        _,
        E,
        x
      );
    }
  }, wt = (l, f, d, g, m, _, E) => {
    const x = f.el = l.el;
    let { patchFlag: v, dynamicChildren: b, dirs: P } = f;
    v |= l.patchFlag & 16;
    const y = l.props || U, w = f.props || U;
    let A;
    if (d && $e(d, !1), (A = w.onVnodeBeforeUpdate) && be(A, d, f, l), P && ze(f, l, d, "beforeUpdate"), d && $e(d, !0), (y.innerHTML && w.innerHTML == null || y.textContent && w.textContent == null) && a(x, ""), b ? Ve(
      l.dynamicChildren,
      b,
      x,
      d,
      g,
      an(f, m),
      _
    ) : E || H(
      l,
      f,
      x,
      null,
      d,
      g,
      an(f, m),
      _,
      !1
    ), v > 0) {
      if (v & 16)
        st(x, y, w, d, m);
      else if (v & 2 && y.class !== w.class && o(x, "class", null, w.class, m), v & 4 && o(x, "style", y.style, w.style, m), v & 8) {
        const N = f.dynamicProps;
        for (let V = 0; V < N.length; V++) {
          const F = N[V], se = y[F], q = w[F];
          (q !== se || F === "value") && o(x, F, se, q, m, d);
        }
      }
      v & 1 && l.children !== f.children && a(x, f.children);
    } else !E && b == null && st(x, y, w, d, m);
    ((A = w.onVnodeUpdated) || P) && re(() => {
      A && be(A, d, f, l), P && ze(f, l, d, "updated");
    }, g);
  }, Ve = (l, f, d, g, m, _, E) => {
    for (let x = 0; x < f.length; x++) {
      const v = l[x], b = f[x], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ct(v, b) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? p(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      I(
        v,
        b,
        P,
        null,
        g,
        m,
        _,
        E,
        !0
      );
    }
  }, st = (l, f, d, g, m) => {
    if (f !== d) {
      if (f !== U)
        for (const _ in f)
          !ut(_) && !(_ in d) && o(
            l,
            _,
            f[_],
            null,
            m,
            g
          );
      for (const _ in d) {
        if (ut(_)) continue;
        const E = d[_], x = f[_];
        E !== x && _ !== "value" && o(l, _, x, E, m, g);
      }
      "value" in d && o(l, "value", f.value, d.value, m);
    }
  }, Pt = (l, f, d, g, m, _, E, x, v) => {
    const b = f.el = l ? l.el : c(""), P = f.anchor = l ? l.anchor : c("");
    let { patchFlag: y, dynamicChildren: w, slotScopeIds: A } = f;
    A && (x = x ? x.concat(A) : A), l == null ? (s(b, d, g), s(P, d, g), Te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      P,
      m,
      _,
      E,
      x,
      v
    )) : y > 0 && y & 64 && w && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ve(
      l.dynamicChildren,
      w,
      d,
      m,
      _,
      E,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || m && f === m.subTree) && Ci(
      l,
      f,
      !0
      /* shallow */
    )) : H(
      l,
      f,
      d,
      P,
      m,
      _,
      E,
      x,
      v
    );
  }, Tt = (l, f, d, g, m, _, E, x, v) => {
    f.slotScopeIds = x, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      d,
      g,
      E,
      v
    ) : en(
      f,
      d,
      g,
      m,
      _,
      E,
      v
    ) : Yn(l, f, v);
  }, en = (l, f, d, g, m, _, E) => {
    const x = l.component = Ur(
      l,
      g,
      m
    );
    if (mi(l) && (x.ctx.renderer = ot), zr(x, !1, E), x.asyncDep) {
      if (m && m.registerDep(x, ee, E), !l.el) {
        const v = x.subTree = Oe(ke);
        W(null, v, f, d);
      }
    } else
      ee(
        x,
        l,
        f,
        d,
        m,
        _,
        E
      );
  }, Yn = (l, f, d) => {
    const g = f.component = l.component;
    if (Rr(l, f, d))
      if (g.asyncDep && !g.asyncResolved) {
        z(g, f, d);
        return;
      } else
        g.next = f, g.update();
    else
      f.el = l.el, g.vnode = f;
  }, ee = (l, f, d, g, m, _, E) => {
    const x = () => {
      if (l.isMounted) {
        let { next: y, bu: w, u: A, parent: N, vnode: V } = l;
        {
          const ie = Ri(l);
          if (ie) {
            y && (y.el = V.el, z(l, y, E)), ie.asyncDep.then(() => {
              l.isUnmounted || x();
            });
            return;
          }
        }
        let F = y, se;
        $e(l, !1), y ? (y.el = V.el, z(l, y, E)) : y = V, w && sn(w), (se = y.props && y.props.onVnodeBeforeUpdate) && be(se, N, y, V), $e(l, !0);
        const q = dn(l), de = l.subTree;
        l.subTree = q, I(
          de,
          q,
          // parent may have changed if it's in a teleport
          p(de.el),
          // anchor may have changed if it's in a fragment
          Ct(de),
          l,
          m,
          _
        ), y.el = q.el, F === null && Nr(l, q.el), A && re(A, m), (se = y.props && y.props.onVnodeUpdated) && re(
          () => be(se, N, y, V),
          m
        );
      } else {
        let y;
        const { el: w, props: A } = f, { bm: N, m: V, parent: F, root: se, type: q } = l, de = mt(f);
        if ($e(l, !1), N && sn(N), !de && (y = A && A.onVnodeBeforeMount) && be(y, F, f), $e(l, !0), w && Zn) {
          const ie = () => {
            l.subTree = dn(l), Zn(
              w,
              l.subTree,
              l,
              m,
              null
            );
          };
          de && q.__asyncHydrate ? q.__asyncHydrate(
            w,
            l,
            ie
          ) : ie();
        } else {
          se.ce && se.ce._injectChildStyle(q);
          const ie = l.subTree = dn(l);
          I(
            null,
            ie,
            d,
            g,
            l,
            m,
            _
          ), f.el = ie.el;
        }
        if (V && re(V, m), !de && (y = A && A.onVnodeMounted)) {
          const ie = f;
          re(
            () => be(y, F, ie),
            m
          );
        }
        (f.shapeFlag & 256 || F && mt(F.vnode) && F.vnode.shapeFlag & 256) && l.a && re(l.a, m), l.isMounted = !0, f = d = g = null;
      }
    };
    l.scope.on();
    const v = l.effect = new Us(x);
    l.scope.off();
    const b = l.update = v.run.bind(v), P = l.job = v.runIfDirty.bind(v);
    P.i = l, P.id = l.uid, v.scheduler = () => jn(P), $e(l, !0), b();
  }, z = (l, f, d) => {
    f.component = l;
    const g = l.vnode.props;
    l.vnode = f, l.next = null, pr(l, f.props, g, d), br(l, f.children, d), Ne(), os(l), Ie();
  }, H = (l, f, d, g, m, _, E, x, v = !1) => {
    const b = l && l.children, P = l ? l.shapeFlag : 0, y = f.children, { patchFlag: w, shapeFlag: A } = f;
    if (w > 0) {
      if (w & 128) {
        At(
          b,
          y,
          d,
          g,
          m,
          _,
          E,
          x,
          v
        );
        return;
      } else if (w & 256) {
        je(
          b,
          y,
          d,
          g,
          m,
          _,
          E,
          x,
          v
        );
        return;
      }
    }
    A & 8 ? (P & 16 && it(b, m, _), y !== b && a(d, y)) : P & 16 ? A & 16 ? At(
      b,
      y,
      d,
      g,
      m,
      _,
      E,
      x,
      v
    ) : it(b, m, _, !0) : (P & 8 && a(d, ""), A & 16 && Te(
      y,
      d,
      g,
      m,
      _,
      E,
      x,
      v
    ));
  }, je = (l, f, d, g, m, _, E, x, v) => {
    l = l || Xe, f = f || Xe;
    const b = l.length, P = f.length, y = Math.min(b, P);
    let w;
    for (w = 0; w < y; w++) {
      const A = f[w] = v ? Fe(f[w]) : Ee(f[w]);
      I(
        l[w],
        A,
        d,
        null,
        m,
        _,
        E,
        x,
        v
      );
    }
    b > P ? it(
      l,
      m,
      _,
      !0,
      !1,
      y
    ) : Te(
      f,
      d,
      g,
      m,
      _,
      E,
      x,
      v,
      y
    );
  }, At = (l, f, d, g, m, _, E, x, v) => {
    let b = 0;
    const P = f.length;
    let y = l.length - 1, w = P - 1;
    for (; b <= y && b <= w; ) {
      const A = l[b], N = f[b] = v ? Fe(f[b]) : Ee(f[b]);
      if (ct(A, N))
        I(
          A,
          N,
          d,
          null,
          m,
          _,
          E,
          x,
          v
        );
      else
        break;
      b++;
    }
    for (; b <= y && b <= w; ) {
      const A = l[y], N = f[w] = v ? Fe(f[w]) : Ee(f[w]);
      if (ct(A, N))
        I(
          A,
          N,
          d,
          null,
          m,
          _,
          E,
          x,
          v
        );
      else
        break;
      y--, w--;
    }
    if (b > y) {
      if (b <= w) {
        const A = w + 1, N = A < P ? f[A].el : g;
        for (; b <= w; )
          I(
            null,
            f[b] = v ? Fe(f[b]) : Ee(f[b]),
            d,
            N,
            m,
            _,
            E,
            x,
            v
          ), b++;
      }
    } else if (b > w)
      for (; b <= y; )
        _e(l[b], m, _, !0), b++;
    else {
      const A = b, N = b, V = /* @__PURE__ */ new Map();
      for (b = N; b <= w; b++) {
        const oe = f[b] = v ? Fe(f[b]) : Ee(f[b]);
        oe.key != null && V.set(oe.key, b);
      }
      let F, se = 0;
      const q = w - N + 1;
      let de = !1, ie = 0;
      const rt = new Array(q);
      for (b = 0; b < q; b++) rt[b] = 0;
      for (b = A; b <= y; b++) {
        const oe = l[b];
        if (se >= q) {
          _e(oe, m, _, !0);
          continue;
        }
        let ge;
        if (oe.key != null)
          ge = V.get(oe.key);
        else
          for (F = N; F <= w; F++)
            if (rt[F - N] === 0 && ct(oe, f[F])) {
              ge = F;
              break;
            }
        ge === void 0 ? _e(oe, m, _, !0) : (rt[ge - N] = b + 1, ge >= ie ? ie = ge : de = !0, I(
          oe,
          f[ge],
          d,
          null,
          m,
          _,
          E,
          x,
          v
        ), se++);
      }
      const Qn = de ? yr(rt) : Xe;
      for (F = Qn.length - 1, b = q - 1; b >= 0; b--) {
        const oe = N + b, ge = f[oe], es = oe + 1 < P ? f[oe + 1].el : g;
        rt[b] === 0 ? I(
          null,
          ge,
          d,
          es,
          m,
          _,
          E,
          x,
          v
        ) : de && (F < 0 || b !== Qn[F] ? Ue(ge, d, es, 2) : F--);
      }
    }
  }, Ue = (l, f, d, g, m = null) => {
    const { el: _, type: E, transition: x, children: v, shapeFlag: b } = l;
    if (b & 6) {
      Ue(l.component.subTree, f, d, g);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, d, g);
      return;
    }
    if (b & 64) {
      E.move(l, f, d, ot);
      return;
    }
    if (E === xe) {
      s(_, f, d);
      for (let y = 0; y < v.length; y++)
        Ue(v[y], f, d, g);
      s(l.anchor, f, d);
      return;
    }
    if (E === hn) {
      K(l, f, d);
      return;
    }
    if (g !== 2 && b & 1 && x)
      if (g === 0)
        x.beforeEnter(_), s(_, f, d), re(() => x.enter(_), m);
      else {
        const { leave: y, delayLeave: w, afterLeave: A } = x, N = () => s(_, f, d), V = () => {
          y(_, () => {
            N(), A && A();
          });
        };
        w ? w(_, N, V) : V();
      }
    else
      s(_, f, d);
  }, _e = (l, f, d, g = !1, m = !1) => {
    const {
      type: _,
      props: E,
      ref: x,
      children: v,
      dynamicChildren: b,
      shapeFlag: P,
      patchFlag: y,
      dirs: w,
      cacheIndex: A
    } = l;
    if (y === -2 && (m = !1), x != null && jt(x, null, d, l, !0), A != null && (f.renderCache[A] = void 0), P & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const N = P & 1 && w, V = !mt(l);
    let F;
    if (V && (F = E && E.onVnodeBeforeUnmount) && be(F, f, l), P & 6)
      Bi(l.component, d, g);
    else {
      if (P & 128) {
        l.suspense.unmount(d, g);
        return;
      }
      N && ze(l, null, f, "beforeUnmount"), P & 64 ? l.type.remove(
        l,
        f,
        d,
        ot,
        g
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== xe || y > 0 && y & 64) ? it(
        b,
        f,
        d,
        !1,
        !0
      ) : (_ === xe && y & 384 || !m && P & 16) && it(v, f, d), g && Jn(l);
    }
    (V && (F = E && E.onVnodeUnmounted) || N) && re(() => {
      F && be(F, f, l), N && ze(l, null, f, "unmounted");
    }, d);
  }, Jn = (l) => {
    const { type: f, el: d, anchor: g, transition: m } = l;
    if (f === xe) {
      Ki(d, g);
      return;
    }
    if (f === hn) {
      T(l);
      return;
    }
    const _ = () => {
      i(d), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: E, delayLeave: x } = m, v = () => E(d, _);
      x ? x(l.el, _, v) : v();
    } else
      _();
  }, Ki = (l, f) => {
    let d;
    for (; l !== f; )
      d = S(l), i(l), l = d;
    i(f);
  }, Bi = (l, f, d) => {
    const { bum: g, scope: m, job: _, subTree: E, um: x, m: v, a: b } = l;
    as(v), as(b), g && sn(g), m.stop(), _ && (_.flags |= 8, _e(E, l, f, d)), x && re(x, f), re(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, it = (l, f, d, g = !1, m = !1, _ = 0) => {
    for (let E = _; E < l.length; E++)
      _e(l[E], f, d, g, m);
  }, Ct = (l) => {
    if (l.shapeFlag & 6)
      return Ct(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = S(l.anchor || l.el), d = f && f[zo];
    return d ? S(d) : f;
  };
  let tn = !1;
  const Xn = (l, f, d) => {
    l == null ? f._vnode && _e(f._vnode, null, null, !0) : I(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), f._vnode = l, tn || (tn = !0, os(), ai(), tn = !1);
  }, ot = {
    p: I,
    um: _e,
    m: Ue,
    r: Jn,
    mt: en,
    mc: Te,
    pc: H,
    pbc: Ve,
    n: Ct,
    o: e
  };
  let qn, Zn;
  return {
    render: Xn,
    hydrate: qn,
    createApp: ar(Xn, qn)
  };
}
function an({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $e({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Er(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ci(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (C(s) && C(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let c = i[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[o] = Fe(i[o]), c.el = r.el), !n && c.patchFlag !== -2 && Ci(r, c)), c.type === Qt && (c.el = r.el);
    }
}
function yr(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const h = e[s];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        c = o + r >> 1, e[n[c]] < h ? o = c + 1 : r = c;
      h < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function Ri(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
function as(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Sr = Symbol.for("v-scx"), Or = () => Lt(Sr);
function gt(e, t, n) {
  return Ni(e, t, n);
}
function Ni(e, t, n = U) {
  const { immediate: s, deep: i, flush: o, once: r } = n, c = G({}, n), u = t && s || !t && o !== "post";
  let h;
  if (St) {
    if (o === "sync") {
      const O = Or();
      h = O.__watcherHandles || (O.__watcherHandles = []);
    } else if (!u) {
      const O = () => {
      };
      return O.stop = he, O.resume = he, O.pause = he, O;
    }
  }
  const a = J;
  c.call = (O, D, I) => we(O, a, D, I);
  let p = !1;
  o === "post" ? c.scheduler = (O) => {
    re(O, a && a.suspense);
  } : o !== "sync" && (p = !0, c.scheduler = (O, D) => {
    D ? O() : jn(O);
  }), c.augmentJob = (O) => {
    t && (O.flags |= 4), p && (O.flags |= 2, a && (O.id = a.uid, O.i = a));
  };
  const S = Io(e, t, c);
  return St && (h ? h.push(S) : u && S()), S;
}
function wr(e, t, n) {
  const s = this.proxy, i = k(e) ? e.includes(".") ? Ii(s, e) : () => s[e] : e.bind(s, s);
  let o;
  R(t) ? o = t : (o = t.handler, n = t);
  const r = Ot(this), c = Ni(i, o.bind(s), n);
  return r(), c;
}
function Ii(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Pr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${pe(t)}Modifiers`] || e[`${ae(t)}Modifiers`];
function Tr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || U;
  let i = n;
  const o = t.startsWith("update:"), r = o && Pr(s, t.slice(7));
  r && (r.trim && (i = n.map((a) => k(a) ? a.trim() : a)), r.number && (i = n.map(qi)));
  let c, u = s[c = nn(t)] || // also try camelCase event handler (#2249)
  s[c = nn(pe(t))];
  !u && o && (u = s[c = nn(ae(t))]), u && we(
    u,
    e,
    6,
    i
  );
  const h = s[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, we(
      h,
      e,
      6,
      i
    );
  }
}
function Di(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, c = !1;
  if (!R(e)) {
    const u = (h) => {
      const a = Di(h, t, !0);
      a && (c = !0, G(r, a));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (B(e) && s.set(e, null), null) : (C(o) ? o.forEach((u) => r[u] = null) : G(r, o), B(e) && s.set(e, r), r);
}
function Zt(e, t) {
  return !e || !$t(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, ae(t)) || L(e, t));
}
function dn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: c,
    emit: u,
    render: h,
    renderCache: a,
    props: p,
    data: S,
    setupState: O,
    ctx: D,
    inheritAttrs: I
  } = e, X = Vt(e);
  let W, $;
  try {
    if (n.shapeFlag & 4) {
      const T = i || s, Y = Le.NODE_ENV !== "production" && O.__isScriptSetup ? new Proxy(T, {
        get(Pe, ue, Te) {
          return Do(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Pe, ue, Te);
        }
      }) : T;
      W = Ee(
        h.call(
          Y,
          T,
          a,
          Le.NODE_ENV !== "production" ? It(p) : p,
          O,
          S,
          D
        )
      ), $ = c;
    } else {
      const T = t;
      Le.NODE_ENV, W = Ee(
        T.length > 1 ? T(
          Le.NODE_ENV !== "production" ? It(p) : p,
          Le.NODE_ENV !== "production" ? {
            get attrs() {
              return It(c);
            },
            slots: r,
            emit: u
          } : { attrs: c, slots: r, emit: u }
        ) : T(
          Le.NODE_ENV !== "production" ? It(p) : p,
          null
        )
      ), $ = t.props ? c : Ar(c);
    }
  } catch (T) {
    bt.length = 0, Xt(T, e, 1), W = Oe(ke);
  }
  let K = W;
  if ($ && I !== !1) {
    const T = Object.keys($), { shapeFlag: Y } = K;
    T.length && Y & 7 && (o && T.some(Cn) && ($ = Cr(
      $,
      o
    )), K = tt(K, $, !1, !0));
  }
  return n.dirs && (K = tt(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && Un(K, n.transition), W = K, Vt(X), W;
}
const Ar = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || $t(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cr = (e, t) => {
  const n = {};
  for (const s in e)
    (!Cn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Rr(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: c, patchFlag: u } = t, h = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? ds(s, r, h) : !!r;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const S = a[p];
        if (r[S] !== s[S] && !Zt(h, S))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : s === r ? !1 : s ? r ? ds(s, r, h) : !0 : !!r;
  return !1;
}
function ds(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !Zt(n, o))
      return !0;
  }
  return !1;
}
function Nr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Li = (e) => e.__isSuspense;
function Ir(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : jo(e);
}
const xe = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), hn = Symbol.for("v-stc"), bt = [];
let fe = null;
function wn(e = !1) {
  bt.push(fe = e ? null : []);
}
function Dr() {
  bt.pop(), fe = bt[bt.length - 1] || null;
}
let yt = 1;
function hs(e, t = !1) {
  yt += e, e < 0 && fe && t && (fe.hasOnce = !0);
}
function Mi(e) {
  return e.dynamicChildren = yt > 0 ? fe || Xe : null, Dr(), yt > 0 && fe && fe.push(e), e;
}
function ps(e, t, n, s, i, o) {
  return Mi(
    Kn(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function Lr(e, t, n, s, i) {
  return Mi(
    Oe(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Fi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ct(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wi = ({ key: e }) => e ?? null, Mt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || Q(e) || R(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function Kn(e, t = null, n = null, s = 0, i = null, o = e === xe ? 0 : 1, r = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wi(t),
    ref: t && Mt(t),
    scopeId: hi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return c ? (Bn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= k(n) ? 8 : 16), yt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fe.push(u), u;
}
const Oe = Mr;
function Mr(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === sr) && (e = ke), Fi(e)) {
    const c = tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Bn(c, n), yt > 0 && !o && fe && (c.shapeFlag & 6 ? fe[fe.indexOf(e)] = c : fe.push(c)), c.patchFlag = -2, c;
  }
  if (Jr(e) && (e = e.__vccOpts), t) {
    t = Fr(t);
    let { class: c, style: u } = t;
    c && !k(c) && (t.class = Dn(c)), B(u) && (Vn(u) && !C(u) && (u = G({}, u)), t.style = In(u));
  }
  const r = k(e) ? 1 : Li(e) ? 128 : $o(e) ? 64 : B(e) ? 4 : R(e) ? 2 : 0;
  return Kn(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function Fr(e) {
  return e ? Vn(e) || yi(e) ? G({}, e) : e : null;
}
function tt(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: c, transition: u } = e, h = t ? Hr(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Wi(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? C(o) ? o.concat(Mt(t)) : [o, Mt(t)] : Mt(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== xe ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && tt(e.ssContent),
    ssFallback: e.ssFallback && tt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && Un(
    a,
    u.clone(a)
  ), a;
}
function Hi(e = " ", t = 0) {
  return Oe(Qt, null, e, t);
}
function Wr(e = "", t = !1) {
  return t ? (wn(), Lr(ke, null, e)) : Oe(ke, null, e);
}
function Ee(e) {
  return e == null || typeof e == "boolean" ? Oe(ke) : C(e) ? Oe(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fi(e) ? Fe(e) : Oe(Qt, null, String(e));
}
function Fe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : tt(e);
}
function Bn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Bn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !yi(t) ? t._ctx = ye : i === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else R(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Hi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Dn([t.class, s.class]));
      else if (i === "style")
        t.style = In([t.style, s.style]);
      else if ($t(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(C(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function be(e, t, n, s = null) {
  we(e, t, 7, [
    n,
    s
  ]);
}
const Vr = vi();
let jr = 0;
function Ur(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Vr, o = {
    uid: jr++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new oo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Oi(s, i),
    emitsOptions: Di(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: U,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: U,
    data: U,
    props: U,
    attrs: U,
    slots: U,
    refs: U,
    setupState: U,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Tr.bind(null, o), e.ce && e.ce(o), o;
}
let J = null, zt, Pn;
{
  const e = kt(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  zt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => J = n
  ), Pn = t(
    "__VUE_SSR_SETTERS__",
    (n) => St = n
  );
}
const Ot = (e) => {
  const t = J;
  return zt(e), e.scope.on(), () => {
    e.scope.off(), zt(t);
  };
}, ms = () => {
  J && J.scope.off(), zt(null);
};
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function zr(e, t = !1, n = !1) {
  t && Pn(t);
  const { props: s, children: i } = e.vnode, o = Vi(e);
  hr(e, s, o, t), gr(e, i, n);
  const r = o ? $r(e, t) : void 0;
  return t && Pn(!1), r;
}
function $r(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ir);
  const { setup: s } = n;
  if (s) {
    Ne();
    const i = e.setupContext = s.length > 1 ? Br(e) : null, o = Ot(e), r = nt(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = Ds(r);
    if (Ie(), o(), (c || e.sp) && !mt(e) && pi(e), c) {
      if (r.then(ms, ms), t)
        return r.then((u) => {
          _s(e, u, t);
        }).catch((u) => {
          Xt(u, e, 0);
        });
      e.asyncDep = r;
    } else
      _s(e, r, t);
  } else
    ji(e, t);
}
function _s(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = ri(t)), ji(e, n);
}
let gs;
function ji(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && gs && !s.render) {
      const i = s.template || zn(e).template;
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, h = G(
          G(
            {
              isCustomElement: o,
              delimiters: c
            },
            r
          ),
          u
        );
        s.render = gs(i, h);
      }
    }
    e.render = s.render || he;
  }
  {
    const i = Ot(e);
    Ne();
    try {
      or(e);
    } finally {
      Ie(), i();
    }
  }
}
const Kr = {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Br(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Kr),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ri(To(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _t)
        return _t[n](e);
    },
    has(t, n) {
      return n in t || n in _t;
    }
  })) : e.proxy;
}
const Gr = /(?:^|[-_])(\w)/g, kr = (e) => e.replace(Gr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yr(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ui(e, t, n = !1) {
  let s = Yr(t);
  if (!s && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (s = i[1]);
  }
  if (!s && e && e.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === t)
          return r;
    };
    s = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return s ? kr(s) : n ? "App" : "Anonymous";
}
function Jr(e) {
  return R(e) && "__vccOpts" in e;
}
const Xr = (e, t) => Ro(e, t, St), qr = "3.5.13";
let Tn;
const bs = typeof window < "u" && window.trustedTypes;
if (bs)
  try {
    Tn = /* @__PURE__ */ bs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const zi = Tn ? (e) => Tn.createHTML(e) : (e) => e, Zr = "http://www.w3.org/2000/svg", Qr = "http://www.w3.org/1998/Math/MathML", Ce = typeof document < "u" ? document : null, vs = Ce && /* @__PURE__ */ Ce.createElement("template"), el = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Ce.createElementNS(Zr, e) : t === "mathml" ? Ce.createElementNS(Qr, e) : n ? Ce.createElement(e, { is: n }) : Ce.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Ce.createTextNode(e),
  createComment: (e) => Ce.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ce.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      vs.innerHTML = zi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = vs.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, tl = Symbol("_vtc");
function nl(e, t, n) {
  const s = e[tl];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xs = Symbol("_vod"), sl = Symbol("_vsh"), il = Symbol(""), ol = /(^|;)\s*display\s*:/;
function rl(e, t, n) {
  const s = e.style, i = k(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (k(t))
        for (const r of t.split(";")) {
          const c = r.slice(0, r.indexOf(":")).trim();
          n[c] == null && Ft(s, c, "");
        }
      else
        for (const r in t)
          n[r] == null && Ft(s, r, "");
    for (const r in n)
      r === "display" && (o = !0), Ft(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[il];
      r && (n += ";" + r), s.cssText = n, o = ol.test(n);
    }
  } else t && e.removeAttribute("style");
  xs in e && (e[xs] = o ? s.display : "", e[sl] && (s.display = "none"));
}
const Es = /\s*!important$/;
function Ft(e, t, n) {
  if (C(n))
    n.forEach((s) => Ft(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ll(e, t);
    Es.test(n) ? e.setProperty(
      ae(s),
      n.replace(Es, ""),
      "important"
    ) : e[s] = n;
  }
}
const ys = ["Webkit", "Moz", "ms"], pn = {};
function ll(e, t) {
  const n = pn[t];
  if (n)
    return n;
  let s = pe(t);
  if (s !== "filter" && s in e)
    return pn[t] = s;
  s = Ms(s);
  for (let i = 0; i < ys.length; i++) {
    const o = ys[i] + s;
    if (o in e)
      return pn[t] = o;
  }
  return t;
}
const Ss = "http://www.w3.org/1999/xlink";
function Os(e, t, n, s, i, o = so(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ss, t.slice(6, t.length)) : e.setAttributeNS(Ss, t, n) : n == null || o && !Ws(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : He(n) ? String(n) : n
  );
}
function ws(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zi(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const c = o === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Ws(n) : n == null && c === "string" ? (n = "", r = !0) : c === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(i || t);
}
function cl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function fl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ps = Symbol("_vei");
function ul(e, t, n, s, i = null) {
  const o = e[Ps] || (e[Ps] = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [c, u] = al(t);
    if (s) {
      const h = o[t] = pl(
        s,
        i
      );
      cl(e, c, h, u);
    } else r && (fl(e, c, r, u), o[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function al(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ts); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
let mn = 0;
const dl = /* @__PURE__ */ Promise.resolve(), hl = () => mn || (dl.then(() => mn = 0), mn = Date.now());
function pl(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    we(
      ml(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = hl(), n;
}
function ml(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const As = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _l = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? nl(e, s, r) : t === "style" ? rl(e, n, s) : $t(t) ? Cn(t) || ul(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gl(e, t, s, r)) ? (ws(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Os(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !k(s)) ? ws(e, pe(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Os(e, t, s, r));
};
function gl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && As(t) && R(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return As(t) && k(n) ? !1 : t in e;
}
const Cs = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bl(e, t, n) {
  const s = /* @__PURE__ */ Ko(e, t);
  Bt(s) && G(s, t);
  class i extends kn {
    constructor(r) {
      super(s, r, n);
    }
  }
  return i.def = s, i;
}
const vl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class kn extends vl {
  constructor(t, n = {}, s = Ns) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Ns ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof kn) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, fi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const i of s)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: r } = s;
      let c;
      if (o && !C(o))
        for (const u in o) {
          const h = o[u];
          (h === Number || h && h.type === Number) && (u in this._props && (this._props[u] = ts(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[pe(u)] = !0);
        }
      this._numberProps = c, i && this._resolveProps(s), this.shadowRoot && this._applyStyles(r), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (s) => t(this._def = s, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        L(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => oi(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = C(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(pe))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Cs;
    const i = pe(t);
    n && this._numberProps && this._numberProps[i] && (s = ts(s)), this._setProp(i, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (n === Cs ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ae(t), n + "") : n || this.removeAttribute(ae(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    El(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Oe(this._def, G(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            Bt(r[0]) ? G({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (o, ...r) => {
        i(o, r), ae(o) !== o && i(ae(o), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = document.createElement("style");
      s && o.setAttribute("nonce", s), o.textContent = t[i], this.shadowRoot.prepend(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], o = i.getAttribute("name") || "default", r = this._slots[o], c = i.parentNode;
      if (r)
        for (const u of r) {
          if (n && u.nodeType === 1) {
            const h = n + "-s", a = document.createTreeWalker(u, 1);
            u.setAttribute(h, "");
            let p;
            for (; p = a.nextNode(); )
              p.setAttribute(h, "");
          }
          c.insertBefore(u, i);
        }
      else
        for (; i.firstChild; ) c.insertBefore(i.firstChild, i);
      c.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const xl = /* @__PURE__ */ G({ patchProp: _l }, el);
let Rs;
function $i() {
  return Rs || (Rs = vr(xl));
}
const El = (...e) => {
  $i().render(...e);
}, Ns = (...e) => {
  const t = $i().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Sl(s);
    if (!i) return;
    const o = t._component;
    !R(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, yl(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function yl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sl(e) {
  return k(e) ? document.querySelector(e) : e;
}
const Ol = ["src"], wl = {
  __name: "WebComponent",
  props: {
    image: File,
    getFile: Boolean
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, s = t;
    return gt(() => n.image, (i) => {
      i && console.log("image", typeof i, i);
    }), gt(() => n.getFile, (i) => {
      i && s("change", n.image);
    }), (i, o) => (wn(), ps(xe, null, [
      o[0] || (o[0] = Kn("h2", null, "Test Component", -1)),
      Hi(" type of image = " + Vs(typeof e.image) + " (should be object) ", 1),
      e.image ? (wn(), ps("img", {
        key: 0,
        src: e.image,
        alt: "image"
      }, null, 8, Ol)) : Wr("", !0)
    ], 64));
  }
}, Pl = /* @__PURE__ */ bl(wl);
customElements.define("wc-image", Pl);
export {
  Pl as WebElement
};
