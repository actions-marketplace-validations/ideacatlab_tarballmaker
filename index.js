module.exports = (function (t, e) {
    "use strict";
    var s = {};
    function __webpack_require__(e) {
        if (s[e]) {
            return s[e].exports;
        }
        var i = (s[e] = { i: e, l: false, exports: {} });
        t[e].call(i.exports, i, i.exports, __webpack_require__);
        i.l = true;
        return i.exports;
    }
    __webpack_require__.ab = __dirname + "/";
    function startup() {
        return __webpack_require__(676);
    }
    return startup();
})({
    16: function (t) {
        t.exports = require("tls");
    },
    22: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(78));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function parse(t) {
            if (!(0, i.default)(t)) {
                throw TypeError("Invalid UUID");
            }
            let e;
            const s = new Uint8Array(16);
            s[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24;
            s[1] = (e >>> 16) & 255;
            s[2] = (e >>> 8) & 255;
            s[3] = e & 255;
            s[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8;
            s[5] = e & 255;
            s[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8;
            s[7] = e & 255;
            s[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8;
            s[9] = e & 255;
            s[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255;
            s[11] = (e / 4294967296) & 255;
            s[12] = (e >>> 24) & 255;
            s[13] = (e >>> 16) & 255;
            s[14] = (e >>> 8) & 255;
            s[15] = e & 255;
            return s;
        }
        var n = parse;
        e.default = n;
    },
    60: function (t, e, s) {
        const i = s(761).constants || { ZLIB_VERNUM: 4736 };
        t.exports = Object.freeze(
            Object.assign(
                Object.create(null),
                {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_MEM_ERROR: -4,
                    Z_BUF_ERROR: -5,
                    Z_VERSION_ERROR: -6,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    DEFLATE: 1,
                    INFLATE: 2,
                    GZIP: 3,
                    GUNZIP: 4,
                    DEFLATERAW: 5,
                    INFLATERAW: 6,
                    UNZIP: 7,
                    BROTLI_DECODE: 8,
                    BROTLI_ENCODE: 9,
                    Z_MIN_WINDOWBITS: 8,
                    Z_MAX_WINDOWBITS: 15,
                    Z_DEFAULT_WINDOWBITS: 15,
                    Z_MIN_CHUNK: 64,
                    Z_MAX_CHUNK: Infinity,
                    Z_DEFAULT_CHUNK: 16384,
                    Z_MIN_MEMLEVEL: 1,
                    Z_MAX_MEMLEVEL: 9,
                    Z_DEFAULT_MEMLEVEL: 8,
                    Z_MIN_LEVEL: -1,
                    Z_MAX_LEVEL: 9,
                    Z_DEFAULT_LEVEL: -1,
                    BROTLI_OPERATION_PROCESS: 0,
                    BROTLI_OPERATION_FLUSH: 1,
                    BROTLI_OPERATION_FINISH: 2,
                    BROTLI_OPERATION_EMIT_METADATA: 3,
                    BROTLI_MODE_GENERIC: 0,
                    BROTLI_MODE_TEXT: 1,
                    BROTLI_MODE_FONT: 2,
                    BROTLI_DEFAULT_MODE: 0,
                    BROTLI_MIN_QUALITY: 0,
                    BROTLI_MAX_QUALITY: 11,
                    BROTLI_DEFAULT_QUALITY: 11,
                    BROTLI_MIN_WINDOW_BITS: 10,
                    BROTLI_MAX_WINDOW_BITS: 24,
                    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
                    BROTLI_DEFAULT_WINDOW: 22,
                    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
                    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
                    BROTLI_PARAM_MODE: 0,
                    BROTLI_PARAM_QUALITY: 1,
                    BROTLI_PARAM_LGWIN: 2,
                    BROTLI_PARAM_LGBLOCK: 3,
                    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
                    BROTLI_PARAM_SIZE_HINT: 5,
                    BROTLI_PARAM_LARGE_WINDOW: 6,
                    BROTLI_PARAM_NPOSTFIX: 7,
                    BROTLI_PARAM_NDIRECT: 8,
                    BROTLI_DECODER_RESULT_ERROR: 0,
                    BROTLI_DECODER_RESULT_SUCCESS: 1,
                    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
                    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
                    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
                    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
                    BROTLI_DECODER_NO_ERROR: 0,
                    BROTLI_DECODER_SUCCESS: 1,
                    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
                    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
                    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
                    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
                    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
                    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
                    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
                    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
                    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
                    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
                    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
                    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
                    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
                    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
                    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
                    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
                    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
                    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
                    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
                    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
                    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
                    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
                    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
                    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
                    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
                    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
                    BROTLI_DECODER_ERROR_UNREACHABLE: -31,
                },
                i
            )
        );
    },
    62: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        Object.defineProperty(e, "v1", {
            enumerable: true,
            get: function () {
                return i.default;
            },
        });
        Object.defineProperty(e, "v3", {
            enumerable: true,
            get: function () {
                return n.default;
            },
        });
        Object.defineProperty(e, "v4", {
            enumerable: true,
            get: function () {
                return r.default;
            },
        });
        Object.defineProperty(e, "v5", {
            enumerable: true,
            get: function () {
                return o.default;
            },
        });
        Object.defineProperty(e, "NIL", {
            enumerable: true,
            get: function () {
                return a.default;
            },
        });
        Object.defineProperty(e, "version", {
            enumerable: true,
            get: function () {
                return l.default;
            },
        });
        Object.defineProperty(e, "validate", {
            enumerable: true,
            get: function () {
                return h.default;
            },
        });
        Object.defineProperty(e, "stringify", {
            enumerable: true,
            get: function () {
                return c.default;
            },
        });
        Object.defineProperty(e, "parse", {
            enumerable: true,
            get: function () {
                return u.default;
            },
        });
        var i = _interopRequireDefault(s(893));
        var n = _interopRequireDefault(s(209));
        var r = _interopRequireDefault(s(733));
        var o = _interopRequireDefault(s(384));
        var a = _interopRequireDefault(s(327));
        var l = _interopRequireDefault(s(695));
        var h = _interopRequireDefault(s(78));
        var c = _interopRequireDefault(s(411));
        var u = _interopRequireDefault(s(22));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
    },
    63: function (t, e, s) {
        "use strict";
        const i = s(357);
        const n = s(203);
        const r = s(747);
        const o = s(827);
        const a = s(622);
        const l = s(577);
        const h = s(478);
        const c = s(182);
        const u = s(657);
        const f = s(674);
        const d = s(224);
        const p = s(471);
        const m = Symbol("onEntry");
        const y = Symbol("checkFs");
        const b = Symbol("checkFs2");
        const g = Symbol("pruneCache");
        const w = Symbol("isReusable");
        const _ = Symbol("makeFs");
        const E = Symbol("file");
        const v = Symbol("directory");
        const R = Symbol("link");
        const S = Symbol("symlink");
        const O = Symbol("hardlink");
        const T = Symbol("unsupported");
        const k = Symbol("checkPath");
        const A = Symbol("mkdir");
        const C = Symbol("onError");
        const x = Symbol("pending");
        const D = Symbol("pend");
        const P = Symbol("unpend");
        const L = Symbol("ended");
        const I = Symbol("maybeClose");
        const N = Symbol("skip");
        const M = Symbol("doChown");
        const B = Symbol("uid");
        const U = Symbol("gid");
        const F = Symbol("checkedCwd");
        const j = s(417);
        const q = s(953);
        const H = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
        const z = H === "win32";
        const G = (t, e) => {
            if (!z) return r.unlink(t, e);
            const s = t + ".DELETE." + j.randomBytes(16).toString("hex");
            r.rename(t, s, (t) => {
                if (t) return e(t);
                r.unlink(s, e);
            });
        };
        const $ = (t) => {
            if (!z) return r.unlinkSync(t);
            const e = t + ".DELETE." + j.randomBytes(16).toString("hex");
            r.renameSync(t, e);
            r.unlinkSync(e);
        };
        const Y = (t, e, s) => (t === t >>> 0 ? t : e === e >>> 0 ? e : s);
        const V = (t) => p(d(f(t))).toLowerCase();
        const Z = (t, e) => {
            e = V(e);
            for (const s of t.keys()) {
                const i = V(s);
                if (i === e || i.indexOf(e + "/") === 0) t.delete(s);
            }
        };
        const W = (t) => {
            for (const e of t.keys()) t.delete(e);
        };
        class Unpack extends n {
            constructor(t) {
                if (!t) t = {};
                t.ondone = (t) => {
                    this[L] = true;
                    this[I]();
                };
                super(t);
                this[F] = false;
                this.reservations = c();
                this.transform =
                    typeof t.transform === "function" ? t.transform : null;
                this.writable = true;
                this.readable = false;
                this[x] = 0;
                this[L] = false;
                this.dirCache = t.dirCache || new Map();
                if (typeof t.uid === "number" || typeof t.gid === "number") {
                    if (typeof t.uid !== "number" || typeof t.gid !== "number")
                        throw new TypeError(
                            "cannot set owner without number uid and gid"
                        );
                    if (t.preserveOwner) {
                        throw new TypeError(
                            "cannot preserve owner in archive and also set owner explicitly"
                        );
                    }
                    this.uid = t.uid;
                    this.gid = t.gid;
                    this.setOwner = true;
                } else {
                    this.uid = null;
                    this.gid = null;
                    this.setOwner = false;
                }
                if (t.preserveOwner === undefined && typeof t.uid !== "number")
                    this.preserveOwner =
                        process.getuid && process.getuid() === 0;
                else this.preserveOwner = !!t.preserveOwner;
                this.processUid =
                    (this.preserveOwner || this.setOwner) && process.getuid
                        ? process.getuid()
                        : null;
                this.processGid =
                    (this.preserveOwner || this.setOwner) && process.getgid
                        ? process.getgid()
                        : null;
                this.forceChown = t.forceChown === true;
                this.win32 = !!t.win32 || z;
                this.newer = !!t.newer;
                this.keep = !!t.keep;
                this.noMtime = !!t.noMtime;
                this.preservePaths = !!t.preservePaths;
                this.unlink = !!t.unlink;
                this.cwd = f(a.resolve(t.cwd || process.cwd()));
                this.strip = +t.strip || 0;
                this.processUmask = t.noChmod ? 0 : process.umask();
                this.umask =
                    typeof t.umask === "number" ? t.umask : this.processUmask;
                this.dmode = t.dmode || 511 & ~this.umask;
                this.fmode = t.fmode || 438 & ~this.umask;
                this.on("entry", (t) => this[m](t));
            }
            warn(t, e, s = {}) {
                if (t === "TAR_BAD_ARCHIVE" || t === "TAR_ABORT")
                    s.recoverable = false;
                return super.warn(t, e, s);
            }
            [I]() {
                if (this[L] && this[x] === 0) {
                    this.emit("prefinish");
                    this.emit("finish");
                    this.emit("end");
                    this.emit("close");
                }
            }
            [k](t) {
                if (this.strip) {
                    const e = f(t.path).split("/");
                    if (e.length < this.strip) return false;
                    t.path = e.slice(this.strip).join("/");
                    if (t.type === "Link") {
                        const e = f(t.linkpath).split("/");
                        if (e.length >= this.strip)
                            t.linkpath = e.slice(this.strip).join("/");
                        else return false;
                    }
                }
                if (!this.preservePaths) {
                    const e = f(t.path);
                    const s = e.split("/");
                    if (s.includes("..") || (z && /^[a-z]:\.\.$/i.test(s[0]))) {
                        this.warn("TAR_ENTRY_ERROR", `path contains '..'`, {
                            entry: t,
                            path: e,
                        });
                        return false;
                    }
                    const [i, n] = u(e);
                    if (i) {
                        t.path = n;
                        this.warn(
                            "TAR_ENTRY_INFO",
                            `stripping ${i} from absolute path`,
                            { entry: t, path: e }
                        );
                    }
                }
                if (a.isAbsolute(t.path)) t.absolute = f(a.resolve(t.path));
                else t.absolute = f(a.resolve(this.cwd, t.path));
                if (
                    !this.preservePaths &&
                    t.absolute.indexOf(this.cwd + "/") !== 0 &&
                    t.absolute !== this.cwd
                ) {
                    this.warn(
                        "TAR_ENTRY_ERROR",
                        "path escaped extraction target",
                        {
                            entry: t,
                            path: f(t.path),
                            resolvedPath: t.absolute,
                            cwd: this.cwd,
                        }
                    );
                    return false;
                }
                if (
                    t.absolute === this.cwd &&
                    t.type !== "Directory" &&
                    t.type !== "GNUDumpDir"
                )
                    return false;
                if (this.win32) {
                    const { root: e } = a.win32.parse(t.absolute);
                    t.absolute = e + h.encode(t.absolute.substr(e.length));
                    const { root: s } = a.win32.parse(t.path);
                    t.path = s + h.encode(t.path.substr(s.length));
                }
                return true;
            }
            [m](t) {
                if (!this[k](t)) return t.resume();
                i.equal(typeof t.absolute, "string");
                switch (t.type) {
                    case "Directory":
                    case "GNUDumpDir":
                        if (t.mode) t.mode = t.mode | 448;
                    case "File":
                    case "OldFile":
                    case "ContiguousFile":
                    case "Link":
                    case "SymbolicLink":
                        return this[y](t);
                    case "CharacterDevice":
                    case "BlockDevice":
                    case "FIFO":
                    default:
                        return this[T](t);
                }
            }
            [C](t, e) {
                if (t.name === "CwdError") this.emit("error", t);
                else {
                    this.warn("TAR_ENTRY_ERROR", t, { entry: e });
                    this[P]();
                    e.resume();
                }
            }
            [A](t, e, s) {
                l(
                    f(t),
                    {
                        uid: this.uid,
                        gid: this.gid,
                        processUid: this.processUid,
                        processGid: this.processGid,
                        umask: this.processUmask,
                        preserve: this.preservePaths,
                        unlink: this.unlink,
                        cache: this.dirCache,
                        cwd: this.cwd,
                        mode: e,
                        noChmod: this.noChmod,
                    },
                    s
                );
            }
            [M](t) {
                return (
                    this.forceChown ||
                    (this.preserveOwner &&
                        ((typeof t.uid === "number" &&
                            t.uid !== this.processUid) ||
                            (typeof t.gid === "number" &&
                                t.gid !== this.processGid))) ||
                    (typeof this.uid === "number" &&
                        this.uid !== this.processUid) ||
                    (typeof this.gid === "number" &&
                        this.gid !== this.processGid)
                );
            }
            [B](t) {
                return Y(this.uid, t.uid, this.processUid);
            }
            [U](t) {
                return Y(this.gid, t.gid, this.processGid);
            }
            [E](t, e) {
                const s = t.mode & 4095 || this.fmode;
                const i = new o.WriteStream(t.absolute, {
                    flags: q(t.size),
                    mode: s,
                    autoClose: false,
                });
                i.on("error", (s) => {
                    if (i.fd) r.close(i.fd, () => {});
                    i.write = () => true;
                    this[C](s, t);
                    e();
                });
                let n = 1;
                const a = (s) => {
                    if (s) {
                        if (i.fd) r.close(i.fd, () => {});
                        this[C](s, t);
                        e();
                        return;
                    }
                    if (--n === 0) {
                        r.close(i.fd, (s) => {
                            if (s) this[C](s, t);
                            else this[P]();
                            e();
                        });
                    }
                };
                i.on("finish", (e) => {
                    const s = t.absolute;
                    const o = i.fd;
                    if (t.mtime && !this.noMtime) {
                        n++;
                        const e = t.atime || new Date();
                        const i = t.mtime;
                        r.futimes(o, e, i, (t) =>
                            t ? r.utimes(s, e, i, (e) => a(e && t)) : a()
                        );
                    }
                    if (this[M](t)) {
                        n++;
                        const e = this[B](t);
                        const i = this[U](t);
                        r.fchown(o, e, i, (t) =>
                            t ? r.chown(s, e, i, (e) => a(e && t)) : a()
                        );
                    }
                    a();
                });
                const l = this.transform ? this.transform(t) || t : t;
                if (l !== t) {
                    l.on("error", (s) => {
                        this[C](s, t);
                        e();
                    });
                    t.pipe(l);
                }
                l.pipe(i);
            }
            [v](t, e) {
                const s = t.mode & 4095 || this.dmode;
                this[A](t.absolute, s, (s) => {
                    if (s) {
                        this[C](s, t);
                        e();
                        return;
                    }
                    let i = 1;
                    const n = (s) => {
                        if (--i === 0) {
                            e();
                            this[P]();
                            t.resume();
                        }
                    };
                    if (t.mtime && !this.noMtime) {
                        i++;
                        r.utimes(t.absolute, t.atime || new Date(), t.mtime, n);
                    }
                    if (this[M](t)) {
                        i++;
                        r.chown(t.absolute, this[B](t), this[U](t), n);
                    }
                    n();
                });
            }
            [T](t) {
                t.unsupported = true;
                this.warn(
                    "TAR_ENTRY_UNSUPPORTED",
                    `unsupported entry type: ${t.type}`,
                    { entry: t }
                );
                t.resume();
            }
            [S](t, e) {
                this[R](t, t.linkpath, "symlink", e);
            }
            [O](t, e) {
                const s = f(a.resolve(this.cwd, t.linkpath));
                this[R](t, s, "link", e);
            }
            [D]() {
                this[x]++;
            }
            [P]() {
                this[x]--;
                this[I]();
            }
            [N](t) {
                this[P]();
                t.resume();
            }
            [w](t, e) {
                return (
                    t.type === "File" &&
                    !this.unlink &&
                    e.isFile() &&
                    e.nlink <= 1 &&
                    !z
                );
            }
            [y](t) {
                this[D]();
                const e = [t.path];
                if (t.linkpath) e.push(t.linkpath);
                this.reservations.reserve(e, (e) => this[b](t, e));
            }
            [g](t) {
                if (t.type === "SymbolicLink") W(this.dirCache);
                else if (t.type !== "Directory") Z(this.dirCache, t.absolute);
            }
            [b](t, e) {
                this[g](t);
                const s = (s) => {
                    this[g](t);
                    e(s);
                };
                const i = () => {
                    this[A](this.cwd, this.dmode, (e) => {
                        if (e) {
                            this[C](e, t);
                            s();
                            return;
                        }
                        this[F] = true;
                        n();
                    });
                };
                const n = () => {
                    if (t.absolute !== this.cwd) {
                        const e = f(a.dirname(t.absolute));
                        if (e !== this.cwd) {
                            return this[A](e, this.dmode, (e) => {
                                if (e) {
                                    this[C](e, t);
                                    s();
                                    return;
                                }
                                o();
                            });
                        }
                    }
                    o();
                };
                const o = () => {
                    r.lstat(t.absolute, (e, i) => {
                        if (
                            i &&
                            (this.keep || (this.newer && i.mtime > t.mtime))
                        ) {
                            this[N](t);
                            s();
                            return;
                        }
                        if (e || this[w](t, i)) return this[_](null, t, s);
                        if (i.isDirectory()) {
                            if (t.type === "Directory") {
                                const e =
                                    !this.noChmod &&
                                    t.mode &&
                                    (i.mode & 4095) !== t.mode;
                                const n = (e) => this[_](e, t, s);
                                if (!e) return n();
                                return r.chmod(t.absolute, t.mode, n);
                            }
                            if (t.absolute !== this.cwd) {
                                return r.rmdir(t.absolute, (e) =>
                                    this[_](e, t, s)
                                );
                            }
                        }
                        if (t.absolute === this.cwd) return this[_](null, t, s);
                        G(t.absolute, (e) => this[_](e, t, s));
                    });
                };
                if (this[F]) n();
                else i();
            }
            [_](t, e, s) {
                if (t) {
                    this[C](t, e);
                    s();
                    return;
                }
                switch (e.type) {
                    case "File":
                    case "OldFile":
                    case "ContiguousFile":
                        return this[E](e, s);
                    case "Link":
                        return this[O](e, s);
                    case "SymbolicLink":
                        return this[S](e, s);
                    case "Directory":
                    case "GNUDumpDir":
                        return this[v](e, s);
                }
            }
            [R](t, e, s, i) {
                r[s](e, t.absolute, (e) => {
                    if (e) this[C](e, t);
                    else {
                        this[P]();
                        t.resume();
                    }
                    i();
                });
            }
        }
        const K = (t) => {
            try {
                return [null, t()];
            } catch (t) {
                return [t, null];
            }
        };
        class UnpackSync extends Unpack {
            [_](t, e) {
                return super[_](t, e, () => {});
            }
            [y](t) {
                this[g](t);
                if (!this[F]) {
                    const e = this[A](this.cwd, this.dmode);
                    if (e) return this[C](e, t);
                    this[F] = true;
                }
                if (t.absolute !== this.cwd) {
                    const e = f(a.dirname(t.absolute));
                    if (e !== this.cwd) {
                        const s = this[A](e, this.dmode);
                        if (s) return this[C](s, t);
                    }
                }
                const [e, s] = K(() => r.lstatSync(t.absolute));
                if (s && (this.keep || (this.newer && s.mtime > t.mtime)))
                    return this[N](t);
                if (e || this[w](t, s)) return this[_](null, t);
                if (s.isDirectory()) {
                    if (t.type === "Directory") {
                        const e =
                            !this.noChmod &&
                            t.mode &&
                            (s.mode & 4095) !== t.mode;
                        const [i] = e
                            ? K(() => {
                                  r.chmodSync(t.absolute, t.mode);
                              })
                            : [];
                        return this[_](i, t);
                    }
                    const [e] = K(() => r.rmdirSync(t.absolute));
                    this[_](e, t);
                }
                const [i] =
                    t.absolute === this.cwd ? [] : K(() => $(t.absolute));
                this[_](i, t);
            }
            [E](t, e) {
                const s = t.mode & 4095 || this.fmode;
                const i = (s) => {
                    let i;
                    try {
                        r.closeSync(n);
                    } catch (t) {
                        i = t;
                    }
                    if (s || i) this[C](s || i, t);
                    e();
                };
                let n;
                try {
                    n = r.openSync(t.absolute, q(t.size), s);
                } catch (t) {
                    return i(t);
                }
                const o = this.transform ? this.transform(t) || t : t;
                if (o !== t) {
                    o.on("error", (e) => this[C](e, t));
                    t.pipe(o);
                }
                o.on("data", (t) => {
                    try {
                        r.writeSync(n, t, 0, t.length);
                    } catch (t) {
                        i(t);
                    }
                });
                o.on("end", (e) => {
                    let s = null;
                    if (t.mtime && !this.noMtime) {
                        const e = t.atime || new Date();
                        const i = t.mtime;
                        try {
                            r.futimesSync(n, e, i);
                        } catch (n) {
                            try {
                                r.utimesSync(t.absolute, e, i);
                            } catch (t) {
                                s = n;
                            }
                        }
                    }
                    if (this[M](t)) {
                        const e = this[B](t);
                        const i = this[U](t);
                        try {
                            r.fchownSync(n, e, i);
                        } catch (n) {
                            try {
                                r.chownSync(t.absolute, e, i);
                            } catch (t) {
                                s = s || n;
                            }
                        }
                    }
                    i(s);
                });
            }
            [v](t, e) {
                const s = t.mode & 4095 || this.dmode;
                const i = this[A](t.absolute, s);
                if (i) {
                    this[C](i, t);
                    e();
                    return;
                }
                if (t.mtime && !this.noMtime) {
                    try {
                        r.utimesSync(
                            t.absolute,
                            t.atime || new Date(),
                            t.mtime
                        );
                    } catch (i) {}
                }
                if (this[M](t)) {
                    try {
                        r.chownSync(t.absolute, this[B](t), this[U](t));
                    } catch (i) {}
                }
                e();
                t.resume();
            }
            [A](t, e) {
                try {
                    return l.sync(f(t), {
                        uid: this.uid,
                        gid: this.gid,
                        processUid: this.processUid,
                        processGid: this.processGid,
                        umask: this.processUmask,
                        preserve: this.preservePaths,
                        unlink: this.unlink,
                        cache: this.dirCache,
                        cwd: this.cwd,
                        mode: e,
                    });
                } catch (t) {
                    return t;
                }
            }
            [R](t, e, s, i) {
                try {
                    r[s + "Sync"](e, t.absolute);
                    i();
                    t.resume();
                } catch (e) {
                    return this[C](e, t);
                }
            }
        }
        Unpack.Sync = UnpackSync;
        t.exports = Unpack;
    },
    78: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(456));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function validate(t) {
            return typeof t === "string" && i.default.test(t);
        }
        var n = validate;
        e.default = n;
    },
    82: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.toCommandProperties = e.toCommandValue = void 0;
        function toCommandValue(t) {
            if (t === null || t === undefined) {
                return "";
            } else if (typeof t === "string" || t instanceof String) {
                return t;
            }
            return JSON.stringify(t);
        }
        e.toCommandValue = toCommandValue;
        function toCommandProperties(t) {
            if (!Object.keys(t).length) {
                return {};
            }
            return {
                title: t.title,
                file: t.file,
                line: t.startLine,
                endLine: t.endLine,
                col: t.startColumn,
                endColumn: t.endColumn,
            };
        }
        e.toCommandProperties = toCommandProperties;
    },
    87: function (t) {
        t.exports = require("os");
    },
    92: function (t, e, s) {
        const { dirname: i } = s(622);
        const n = (t, e, s = undefined) => {
            if (s === e) return Promise.resolve();
            return t.statAsync(e).then(
                (t) => (t.isDirectory() ? s : undefined),
                (s) => (s.code === "ENOENT" ? n(t, i(e), e) : undefined)
            );
        };
        const r = (t, e, s = undefined) => {
            if (s === e) return undefined;
            try {
                return t.statSync(e).isDirectory() ? s : undefined;
            } catch (s) {
                return s.code === "ENOENT" ? r(t, i(e), e) : undefined;
            }
        };
        t.exports = { findMade: n, findMadeSync: r };
    },
    95: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.checkBypass = e.getProxyUrl = void 0;
        function getProxyUrl(t) {
            const e = t.protocol === "https:";
            if (checkBypass(t)) {
                return undefined;
            }
            const s = (() => {
                if (e) {
                    return (
                        process.env["https_proxy"] || process.env["HTTPS_PROXY"]
                    );
                } else {
                    return (
                        process.env["http_proxy"] || process.env["HTTP_PROXY"]
                    );
                }
            })();
            if (s) {
                return new URL(s);
            } else {
                return undefined;
            }
        }
        e.getProxyUrl = getProxyUrl;
        function checkBypass(t) {
            if (!t.hostname) {
                return false;
            }
            const e = process.env["no_proxy"] || process.env["NO_PROXY"] || "";
            if (!e) {
                return false;
            }
            let s;
            if (t.port) {
                s = Number(t.port);
            } else if (t.protocol === "http:") {
                s = 80;
            } else if (t.protocol === "https:") {
                s = 443;
            }
            const i = [t.hostname.toUpperCase()];
            if (typeof s === "number") {
                i.push(`${i[0]}:${s}`);
            }
            for (const t of e
                .split(",")
                .map((t) => t.trim().toUpperCase())
                .filter((t) => t)) {
                if (i.some((e) => e === t)) {
                    return true;
                }
            }
            return false;
        }
        e.checkBypass = checkBypass;
    },
    102: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
                ? function (t, e, s, i) {
                      if (i === undefined) i = s;
                      Object.defineProperty(t, i, {
                          enumerable: true,
                          get: function () {
                              return e[s];
                          },
                      });
                  }
                : function (t, e, s, i) {
                      if (i === undefined) i = s;
                      t[i] = e[s];
                  });
        var n =
            (this && this.__setModuleDefault) ||
            (Object.create
                ? function (t, e) {
                      Object.defineProperty(t, "default", {
                          enumerable: true,
                          value: e,
                      });
                  }
                : function (t, e) {
                      t["default"] = e;
                  });
        var r =
            (this && this.__importStar) ||
            function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (t != null)
                    for (var s in t)
                        if (s !== "default" && Object.hasOwnProperty.call(t, s))
                            i(e, t, s);
                n(e, t);
                return e;
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.prepareKeyValueMessage = e.issueFileCommand = void 0;
        const o = r(s(747));
        const a = r(s(87));
        const l = s(62);
        const h = s(82);
        function issueFileCommand(t, e) {
            const s = process.env[`GITHUB_${t}`];
            if (!s) {
                throw new Error(
                    `Unable to find environment variable for file command ${t}`
                );
            }
            if (!o.existsSync(s)) {
                throw new Error(`Missing file at path: ${s}`);
            }
            o.appendFileSync(s, `${h.toCommandValue(e)}${a.EOL}`, {
                encoding: "utf8",
            });
        }
        e.issueFileCommand = issueFileCommand;
        function prepareKeyValueMessage(t, e) {
            const s = `ghadelimiter_${l.v4()}`;
            const i = h.toCommandValue(e);
            if (t.includes(s)) {
                throw new Error(
                    `Unexpected input: name should not contain the delimiter "${s}"`
                );
            }
            if (i.includes(s)) {
                throw new Error(
                    `Unexpected input: value should not contain the delimiter "${s}"`
                );
            }
            return `${t}<<${s}${a.EOL}${i}${a.EOL}${s}`;
        }
        e.prepareKeyValueMessage = prepareKeyValueMessage;
    },
    133: function (t, e, s) {
        "use strict";
        const i = s(357);
        const n = s(293).Buffer;
        const r = s(761);
        const o = (e.constants = s(60));
        const a = s(720);
        const l = n.concat;
        const h = Symbol("_superWrite");
        class ZlibError extends Error {
            constructor(t) {
                super("zlib: " + t.message);
                this.code = t.code;
                this.errno = t.errno;
                if (!this.code) this.code = "ZLIB_ERROR";
                this.message = "zlib: " + t.message;
                Error.captureStackTrace(this, this.constructor);
            }
            get name() {
                return "ZlibError";
            }
        }
        const c = Symbol("opts");
        const u = Symbol("flushFlag");
        const f = Symbol("finishFlushFlag");
        const d = Symbol("fullFlushFlag");
        const p = Symbol("handle");
        const m = Symbol("onError");
        const y = Symbol("sawError");
        const b = Symbol("level");
        const g = Symbol("strategy");
        const w = Symbol("ended");
        const _ = Symbol("_defaultFullFlush");
        class ZlibBase extends a {
            constructor(t, e) {
                if (!t || typeof t !== "object")
                    throw new TypeError(
                        "invalid options for ZlibBase constructor"
                    );
                super(t);
                this[y] = false;
                this[w] = false;
                this[c] = t;
                this[u] = t.flush;
                this[f] = t.finishFlush;
                try {
                    this[p] = new r[e](t);
                } catch (t) {
                    throw new ZlibError(t);
                }
                this[m] = (t) => {
                    if (this[y]) return;
                    this[y] = true;
                    this.close();
                    this.emit("error", t);
                };
                this[p].on("error", (t) => this[m](new ZlibError(t)));
                this.once("end", () => this.close);
            }
            close() {
                if (this[p]) {
                    this[p].close();
                    this[p] = null;
                    this.emit("close");
                }
            }
            reset() {
                if (!this[y]) {
                    i(this[p], "zlib binding closed");
                    return this[p].reset();
                }
            }
            flush(t) {
                if (this.ended) return;
                if (typeof t !== "number") t = this[d];
                this.write(Object.assign(n.alloc(0), { [u]: t }));
            }
            end(t, e, s) {
                if (t) this.write(t, e);
                this.flush(this[f]);
                this[w] = true;
                return super.end(null, null, s);
            }
            get ended() {
                return this[w];
            }
            write(t, e, s) {
                if (typeof e === "function") (s = e), (e = "utf8");
                if (typeof t === "string") t = n.from(t, e);
                if (this[y]) return;
                i(this[p], "zlib binding closed");
                const r = this[p]._handle;
                const o = r.close;
                r.close = () => {};
                const a = this[p].close;
                this[p].close = () => {};
                n.concat = (t) => t;
                let c;
                try {
                    const e = typeof t[u] === "number" ? t[u] : this[u];
                    c = this[p]._processChunk(t, e);
                    n.concat = l;
                } catch (t) {
                    n.concat = l;
                    this[m](new ZlibError(t));
                } finally {
                    if (this[p]) {
                        this[p]._handle = r;
                        r.close = o;
                        this[p].close = a;
                        this[p].removeAllListeners("error");
                    }
                }
                if (this[p])
                    this[p].on("error", (t) => this[m](new ZlibError(t)));
                let f;
                if (c) {
                    if (Array.isArray(c) && c.length > 0) {
                        f = this[h](n.from(c[0]));
                        for (let t = 1; t < c.length; t++) {
                            f = this[h](c[t]);
                        }
                    } else {
                        f = this[h](n.from(c));
                    }
                }
                if (s) s();
                return f;
            }
            [h](t) {
                return super.write(t);
            }
        }
        class Zlib extends ZlibBase {
            constructor(t, e) {
                t = t || {};
                t.flush = t.flush || o.Z_NO_FLUSH;
                t.finishFlush = t.finishFlush || o.Z_FINISH;
                super(t, e);
                this[d] = o.Z_FULL_FLUSH;
                this[b] = t.level;
                this[g] = t.strategy;
            }
            params(t, e) {
                if (this[y]) return;
                if (!this[p])
                    throw new Error(
                        "cannot switch params when binding is closed"
                    );
                if (!this[p].params)
                    throw new Error("not supported in this implementation");
                if (this[b] !== t || this[g] !== e) {
                    this.flush(o.Z_SYNC_FLUSH);
                    i(this[p], "zlib binding closed");
                    const s = this[p].flush;
                    this[p].flush = (t, e) => {
                        this.flush(t);
                        e();
                    };
                    try {
                        this[p].params(t, e);
                    } finally {
                        this[p].flush = s;
                    }
                    if (this[p]) {
                        this[b] = t;
                        this[g] = e;
                    }
                }
            }
        }
        class Deflate extends Zlib {
            constructor(t) {
                super(t, "Deflate");
            }
        }
        class Inflate extends Zlib {
            constructor(t) {
                super(t, "Inflate");
            }
        }
        const E = Symbol("_portable");
        class Gzip extends Zlib {
            constructor(t) {
                super(t, "Gzip");
                this[E] = t && !!t.portable;
            }
            [h](t) {
                if (!this[E]) return super[h](t);
                this[E] = false;
                t[9] = 255;
                return super[h](t);
            }
        }
        class Gunzip extends Zlib {
            constructor(t) {
                super(t, "Gunzip");
            }
        }
        class DeflateRaw extends Zlib {
            constructor(t) {
                super(t, "DeflateRaw");
            }
        }
        class InflateRaw extends Zlib {
            constructor(t) {
                super(t, "InflateRaw");
            }
        }
        class Unzip extends Zlib {
            constructor(t) {
                super(t, "Unzip");
            }
        }
        class Brotli extends ZlibBase {
            constructor(t, e) {
                t = t || {};
                t.flush = t.flush || o.BROTLI_OPERATION_PROCESS;
                t.finishFlush = t.finishFlush || o.BROTLI_OPERATION_FINISH;
                super(t, e);
                this[d] = o.BROTLI_OPERATION_FLUSH;
            }
        }
        class BrotliCompress extends Brotli {
            constructor(t) {
                super(t, "BrotliCompress");
            }
        }
        class BrotliDecompress extends Brotli {
            constructor(t) {
                super(t, "BrotliDecompress");
            }
        }
        e.Deflate = Deflate;
        e.Inflate = Inflate;
        e.Gzip = Gzip;
        e.Gunzip = Gunzip;
        e.DeflateRaw = DeflateRaw;
        e.InflateRaw = InflateRaw;
        e.Unzip = Unzip;
        if (typeof r.BrotliCompress === "function") {
            e.BrotliCompress = BrotliCompress;
            e.BrotliDecompress = BrotliDecompress;
        } else {
            e.BrotliCompress = e.BrotliDecompress = class {
                constructor() {
                    throw new Error(
                        "Brotli is not supported in this version of Node.js"
                    );
                }
            };
        }
    },
    141: function (t, e, s) {
        "use strict";
        var i = s(631);
        var n = s(16);
        var r = s(605);
        var o = s(211);
        var a = s(614);
        var l = s(357);
        var h = s(669);
        e.httpOverHttp = httpOverHttp;
        e.httpsOverHttp = httpsOverHttp;
        e.httpOverHttps = httpOverHttps;
        e.httpsOverHttps = httpsOverHttps;
        function httpOverHttp(t) {
            var e = new TunnelingAgent(t);
            e.request = r.request;
            return e;
        }
        function httpsOverHttp(t) {
            var e = new TunnelingAgent(t);
            e.request = r.request;
            e.createSocket = createSecureSocket;
            e.defaultPort = 443;
            return e;
        }
        function httpOverHttps(t) {
            var e = new TunnelingAgent(t);
            e.request = o.request;
            return e;
        }
        function httpsOverHttps(t) {
            var e = new TunnelingAgent(t);
            e.request = o.request;
            e.createSocket = createSecureSocket;
            e.defaultPort = 443;
            return e;
        }
        function TunnelingAgent(t) {
            var e = this;
            e.options = t || {};
            e.proxyOptions = e.options.proxy || {};
            e.maxSockets = e.options.maxSockets || r.Agent.defaultMaxSockets;
            e.requests = [];
            e.sockets = [];
            e.on("free", function onFree(t, s, i, n) {
                var r = toOptions(s, i, n);
                for (var o = 0, a = e.requests.length; o < a; ++o) {
                    var l = e.requests[o];
                    if (l.host === r.host && l.port === r.port) {
                        e.requests.splice(o, 1);
                        l.request.onSocket(t);
                        return;
                    }
                }
                t.destroy();
                e.removeSocket(t);
            });
        }
        h.inherits(TunnelingAgent, a.EventEmitter);
        TunnelingAgent.prototype.addRequest = function addRequest(t, e, s, i) {
            var n = this;
            var r = mergeOptions({ request: t }, n.options, toOptions(e, s, i));
            if (n.sockets.length >= this.maxSockets) {
                n.requests.push(r);
                return;
            }
            n.createSocket(r, function (e) {
                e.on("free", onFree);
                e.on("close", onCloseOrRemove);
                e.on("agentRemove", onCloseOrRemove);
                t.onSocket(e);
                function onFree() {
                    n.emit("free", e, r);
                }
                function onCloseOrRemove(t) {
                    n.removeSocket(e);
                    e.removeListener("free", onFree);
                    e.removeListener("close", onCloseOrRemove);
                    e.removeListener("agentRemove", onCloseOrRemove);
                }
            });
        };
        TunnelingAgent.prototype.createSocket = function createSocket(t, e) {
            var s = this;
            var i = {};
            s.sockets.push(i);
            var n = mergeOptions({}, s.proxyOptions, {
                method: "CONNECT",
                path: t.host + ":" + t.port,
                agent: false,
                headers: { host: t.host + ":" + t.port },
            });
            if (t.localAddress) {
                n.localAddress = t.localAddress;
            }
            if (n.proxyAuth) {
                n.headers = n.headers || {};
                n.headers["Proxy-Authorization"] =
                    "Basic " + new Buffer(n.proxyAuth).toString("base64");
            }
            c("making CONNECT request");
            var r = s.request(n);
            r.useChunkedEncodingByDefault = false;
            r.once("response", onResponse);
            r.once("upgrade", onUpgrade);
            r.once("connect", onConnect);
            r.once("error", onError);
            r.end();
            function onResponse(t) {
                t.upgrade = true;
            }
            function onUpgrade(t, e, s) {
                process.nextTick(function () {
                    onConnect(t, e, s);
                });
            }
            function onConnect(n, o, a) {
                r.removeAllListeners();
                o.removeAllListeners();
                if (n.statusCode !== 200) {
                    c(
                        "tunneling socket could not be established, statusCode=%d",
                        n.statusCode
                    );
                    o.destroy();
                    var l = new Error(
                        "tunneling socket could not be established, " +
                            "statusCode=" +
                            n.statusCode
                    );
                    l.code = "ECONNRESET";
                    t.request.emit("error", l);
                    s.removeSocket(i);
                    return;
                }
                if (a.length > 0) {
                    c("got illegal response body from proxy");
                    o.destroy();
                    var l = new Error("got illegal response body from proxy");
                    l.code = "ECONNRESET";
                    t.request.emit("error", l);
                    s.removeSocket(i);
                    return;
                }
                c("tunneling connection has established");
                s.sockets[s.sockets.indexOf(i)] = o;
                return e(o);
            }
            function onError(e) {
                r.removeAllListeners();
                c(
                    "tunneling socket could not be established, cause=%s\n",
                    e.message,
                    e.stack
                );
                var n = new Error(
                    "tunneling socket could not be established, " +
                        "cause=" +
                        e.message
                );
                n.code = "ECONNRESET";
                t.request.emit("error", n);
                s.removeSocket(i);
            }
        };
        TunnelingAgent.prototype.removeSocket = function removeSocket(t) {
            var e = this.sockets.indexOf(t);
            if (e === -1) {
                return;
            }
            this.sockets.splice(e, 1);
            var s = this.requests.shift();
            if (s) {
                this.createSocket(s, function (t) {
                    s.request.onSocket(t);
                });
            }
        };
        function createSecureSocket(t, e) {
            var s = this;
            TunnelingAgent.prototype.createSocket.call(s, t, function (i) {
                var r = t.request.getHeader("host");
                var o = mergeOptions({}, s.options, {
                    socket: i,
                    servername: r ? r.replace(/:.*$/, "") : t.host,
                });
                var a = n.connect(0, o);
                s.sockets[s.sockets.indexOf(i)] = a;
                e(a);
            });
        }
        function toOptions(t, e, s) {
            if (typeof t === "string") {
                return { host: t, port: e, localAddress: s };
            }
            return t;
        }
        function mergeOptions(t) {
            for (var e = 1, s = arguments.length; e < s; ++e) {
                var i = arguments[e];
                if (typeof i === "object") {
                    var n = Object.keys(i);
                    for (var r = 0, o = n.length; r < o; ++r) {
                        var a = n[r];
                        if (i[a] !== undefined) {
                            t[a] = i[a];
                        }
                    }
                }
            }
            return t;
        }
        var c;
        if (
            process.env.NODE_DEBUG &&
            /\btunnel\b/.test(process.env.NODE_DEBUG)
        ) {
            c = function () {
                var t = Array.prototype.slice.call(arguments);
                if (typeof t[0] === "string") {
                    t[0] = "TUNNEL: " + t[0];
                } else {
                    t.unshift("TUNNEL:");
                }
                console.error.apply(console, t);
            };
        } else {
            c = function () {};
        }
        e.debug = c;
    },
    159: function (t, e, s) {
        "use strict";
        const i = s(891);
        const n = s(726);
        const r = s(827);
        const o = s(381);
        const a = s(622);
        t.exports = (t, e, s) => {
            if (typeof e === "function") s = e;
            if (Array.isArray(t)) (e = t), (t = {});
            if (!e || !Array.isArray(e) || !e.length)
                throw new TypeError("no files or directories specified");
            e = Array.from(e);
            const n = i(t);
            if (n.sync && typeof s === "function")
                throw new TypeError(
                    "callback not supported for sync tar functions"
                );
            if (!n.file && typeof s === "function")
                throw new TypeError("callback only supported with file option");
            return n.file && n.sync
                ? l(n, e)
                : n.file
                ? h(n, e, s)
                : n.sync
                ? f(n, e)
                : d(n, e);
        };
        const l = (t, e) => {
            const s = new n.Sync(t);
            const i = new r.WriteStreamSync(t.file, { mode: t.mode || 438 });
            s.pipe(i);
            c(s, e);
        };
        const h = (t, e, s) => {
            const i = new n(t);
            const o = new r.WriteStream(t.file, { mode: t.mode || 438 });
            i.pipe(o);
            const a = new Promise((t, e) => {
                o.on("error", e);
                o.on("close", t);
                i.on("error", e);
            });
            u(i, e);
            return s ? a.then(s, s) : a;
        };
        const c = (t, e) => {
            e.forEach((e) => {
                if (e.charAt(0) === "@") {
                    o({
                        file: a.resolve(t.cwd, e.substr(1)),
                        sync: true,
                        noResume: true,
                        onentry: (e) => t.add(e),
                    });
                } else t.add(e);
            });
            t.end();
        };
        const u = (t, e) => {
            while (e.length) {
                const s = e.shift();
                if (s.charAt(0) === "@") {
                    return o({
                        file: a.resolve(t.cwd, s.substr(1)),
                        noResume: true,
                        onentry: (e) => t.add(e),
                    }).then((s) => u(t, e));
                } else t.add(s);
            }
            t.end();
        };
        const f = (t, e) => {
            const s = new n.Sync(t);
            c(s, e);
            return s;
        };
        const d = (t, e) => {
            const s = new n(t);
            u(s, e);
            return s;
        };
    },
    182: function (t, e, s) {
        const i = s(357);
        const n = s(471);
        const r = s(224);
        const { join: o } = s(622);
        const a = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
        const l = a === "win32";
        t.exports = () => {
            const t = new Map();
            const e = new Map();
            const s = (t) => {
                const e = t
                    .split("/")
                    .slice(0, -1)
                    .reduce((t, e) => {
                        if (t.length) e = o(t[t.length - 1], e);
                        t.push(e || "/");
                        return t;
                    }, []);
                return e;
            };
            const a = new Set();
            const h = (s) => {
                const i = e.get(s);
                if (!i)
                    throw new Error(
                        "function does not have any path reservations"
                    );
                return {
                    paths: i.paths.map((e) => t.get(e)),
                    dirs: [...i.dirs].map((e) => t.get(e)),
                };
            };
            const c = (t) => {
                const { paths: e, dirs: s } = h(t);
                return (
                    e.every((e) => e[0] === t) &&
                    s.every((e) => e[0] instanceof Set && e[0].has(t))
                );
            };
            const u = (t) => {
                if (a.has(t) || !c(t)) return false;
                a.add(t);
                t(() => f(t));
                return true;
            };
            const f = (s) => {
                if (!a.has(s)) return false;
                const { paths: n, dirs: r } = e.get(s);
                const o = new Set();
                n.forEach((e) => {
                    const n = t.get(e);
                    i.equal(n[0], s);
                    if (n.length === 1) t.delete(e);
                    else {
                        n.shift();
                        if (typeof n[0] === "function") o.add(n[0]);
                        else n[0].forEach((t) => o.add(t));
                    }
                });
                r.forEach((e) => {
                    const n = t.get(e);
                    i(n[0] instanceof Set);
                    if (n[0].size === 1 && n.length === 1) t.delete(e);
                    else if (n[0].size === 1) {
                        n.shift();
                        o.add(n[0]);
                    } else n[0].delete(s);
                });
                a.delete(s);
                o.forEach((t) => u(t));
                return true;
            };
            const d = (i, a) => {
                i = l
                    ? ["win32 parallelization disabled"]
                    : i.map((t) => {
                          return n(r(o(t))).toLowerCase();
                      });
                const h = new Set(
                    i.map((t) => s(t)).reduce((t, e) => t.concat(e))
                );
                e.set(a, { dirs: h, paths: i });
                i.forEach((e) => {
                    const s = t.get(e);
                    if (!s) t.set(e, [a]);
                    else s.push(a);
                });
                h.forEach((e) => {
                    const s = t.get(e);
                    if (!s) t.set(e, [new Set([a])]);
                    else if (s[s.length - 1] instanceof Set)
                        s[s.length - 1].add(a);
                    else s.push(new Set([a]));
                });
                return u(a);
            };
            return { check: c, reserve: d };
        };
    },
    203: function (t, e, s) {
        "use strict";
        const i = s(796);
        const n = s(232);
        const r = s(614);
        const o = s(612);
        const a = 1024 * 1024;
        const l = s(662);
        const h = s(582);
        const c = s(133);
        const u = Buffer.from([31, 139]);
        const f = Symbol("state");
        const d = Symbol("writeEntry");
        const p = Symbol("readEntry");
        const m = Symbol("nextEntry");
        const y = Symbol("processEntry");
        const b = Symbol("extendedHeader");
        const g = Symbol("globalExtendedHeader");
        const w = Symbol("meta");
        const _ = Symbol("emitMeta");
        const E = Symbol("buffer");
        const v = Symbol("queue");
        const R = Symbol("ended");
        const S = Symbol("emittedEnd");
        const O = Symbol("emit");
        const T = Symbol("unzip");
        const k = Symbol("consumeChunk");
        const A = Symbol("consumeChunkSub");
        const C = Symbol("consumeBody");
        const x = Symbol("consumeMeta");
        const D = Symbol("consumeHeader");
        const P = Symbol("consuming");
        const L = Symbol("bufferConcat");
        const I = Symbol("maybeEnd");
        const N = Symbol("writing");
        const M = Symbol("aborted");
        const B = Symbol("onDone");
        const U = Symbol("sawValidEntry");
        const F = Symbol("sawNullBlock");
        const j = Symbol("sawEOF");
        const q = (t) => true;
        t.exports = i(
            class Parser extends r {
                constructor(t) {
                    t = t || {};
                    super(t);
                    this.file = t.file || "";
                    this[U] = null;
                    this.on(B, (t) => {
                        if (this[f] === "begin" || this[U] === false) {
                            this.warn(
                                "TAR_BAD_ARCHIVE",
                                "Unrecognized archive format"
                            );
                        }
                    });
                    if (t.ondone) this.on(B, t.ondone);
                    else {
                        this.on(B, (t) => {
                            this.emit("prefinish");
                            this.emit("finish");
                            this.emit("end");
                            this.emit("close");
                        });
                    }
                    this.strict = !!t.strict;
                    this.maxMetaEntrySize = t.maxMetaEntrySize || a;
                    this.filter = typeof t.filter === "function" ? t.filter : q;
                    this.writable = true;
                    this.readable = false;
                    this[v] = new o();
                    this[E] = null;
                    this[p] = null;
                    this[d] = null;
                    this[f] = "begin";
                    this[w] = "";
                    this[b] = null;
                    this[g] = null;
                    this[R] = false;
                    this[T] = null;
                    this[M] = false;
                    this[F] = false;
                    this[j] = false;
                    if (typeof t.onwarn === "function")
                        this.on("warn", t.onwarn);
                    if (typeof t.onentry === "function")
                        this.on("entry", t.onentry);
                }
                [D](t, e) {
                    if (this[U] === null) this[U] = false;
                    let s;
                    try {
                        s = new n(t, e, this[b], this[g]);
                    } catch (t) {
                        return this.warn("TAR_ENTRY_INVALID", t);
                    }
                    if (s.nullBlock) {
                        if (this[F]) {
                            this[j] = true;
                            if (this[f] === "begin") this[f] = "header";
                            this[O]("eof");
                        } else {
                            this[F] = true;
                            this[O]("nullBlock");
                        }
                    } else {
                        this[F] = false;
                        if (!s.cksumValid)
                            this.warn("TAR_ENTRY_INVALID", "checksum failure", {
                                header: s,
                            });
                        else if (!s.path)
                            this.warn("TAR_ENTRY_INVALID", "path is required", {
                                header: s,
                            });
                        else {
                            const t = s.type;
                            if (/^(Symbolic)?Link$/.test(t) && !s.linkpath)
                                this.warn(
                                    "TAR_ENTRY_INVALID",
                                    "linkpath required",
                                    { header: s }
                                );
                            else if (!/^(Symbolic)?Link$/.test(t) && s.linkpath)
                                this.warn(
                                    "TAR_ENTRY_INVALID",
                                    "linkpath forbidden",
                                    { header: s }
                                );
                            else {
                                const t = (this[d] = new l(
                                    s,
                                    this[b],
                                    this[g]
                                ));
                                if (!this[U]) {
                                    if (t.remain) {
                                        const e = () => {
                                            if (!t.invalid) this[U] = true;
                                        };
                                        t.on("end", e);
                                    } else this[U] = true;
                                }
                                if (t.meta) {
                                    if (t.size > this.maxMetaEntrySize) {
                                        t.ignore = true;
                                        this[O]("ignoredEntry", t);
                                        this[f] = "ignore";
                                        t.resume();
                                    } else if (t.size > 0) {
                                        this[w] = "";
                                        t.on("data", (t) => (this[w] += t));
                                        this[f] = "meta";
                                    }
                                } else {
                                    this[b] = null;
                                    t.ignore =
                                        t.ignore || !this.filter(t.path, t);
                                    if (t.ignore) {
                                        this[O]("ignoredEntry", t);
                                        this[f] = t.remain
                                            ? "ignore"
                                            : "header";
                                        t.resume();
                                    } else {
                                        if (t.remain) this[f] = "body";
                                        else {
                                            this[f] = "header";
                                            t.end();
                                        }
                                        if (!this[p]) {
                                            this[v].push(t);
                                            this[m]();
                                        } else this[v].push(t);
                                    }
                                }
                            }
                        }
                    }
                }
                [y](t) {
                    let e = true;
                    if (!t) {
                        this[p] = null;
                        e = false;
                    } else if (Array.isArray(t)) this.emit.apply(this, t);
                    else {
                        this[p] = t;
                        this.emit("entry", t);
                        if (!t.emittedEnd) {
                            t.on("end", (t) => this[m]());
                            e = false;
                        }
                    }
                    return e;
                }
                [m]() {
                    do {} while (this[y](this[v].shift()));
                    if (!this[v].length) {
                        const t = this[p];
                        const e = !t || t.flowing || t.size === t.remain;
                        if (e) {
                            if (!this[N]) this.emit("drain");
                        } else t.once("drain", (t) => this.emit("drain"));
                    }
                }
                [C](t, e) {
                    const s = this[d];
                    const i = s.blockRemain;
                    const n = i >= t.length && e === 0 ? t : t.slice(e, e + i);
                    s.write(n);
                    if (!s.blockRemain) {
                        this[f] = "header";
                        this[d] = null;
                        s.end();
                    }
                    return n.length;
                }
                [x](t, e) {
                    const s = this[d];
                    const i = this[C](t, e);
                    if (!this[d]) this[_](s);
                    return i;
                }
                [O](t, e, s) {
                    if (!this[v].length && !this[p]) this.emit(t, e, s);
                    else this[v].push([t, e, s]);
                }
                [_](t) {
                    this[O]("meta", this[w]);
                    switch (t.type) {
                        case "ExtendedHeader":
                        case "OldExtendedHeader":
                            this[b] = h.parse(this[w], this[b], false);
                            break;
                        case "GlobalExtendedHeader":
                            this[g] = h.parse(this[w], this[g], true);
                            break;
                        case "NextFileHasLongPath":
                        case "OldGnuLongPath":
                            this[b] = this[b] || Object.create(null);
                            this[b].path = this[w].replace(/\0.*/, "");
                            break;
                        case "NextFileHasLongLinkpath":
                            this[b] = this[b] || Object.create(null);
                            this[b].linkpath = this[w].replace(/\0.*/, "");
                            break;
                        default:
                            throw new Error("unknown meta: " + t.type);
                    }
                }
                abort(t) {
                    this[M] = true;
                    this.emit("abort", t);
                    this.warn("TAR_ABORT", t, { recoverable: false });
                }
                write(t) {
                    if (this[M]) return;
                    if (this[T] === null && t) {
                        if (this[E]) {
                            t = Buffer.concat([this[E], t]);
                            this[E] = null;
                        }
                        if (t.length < u.length) {
                            this[E] = t;
                            return true;
                        }
                        for (let e = 0; this[T] === null && e < u.length; e++) {
                            if (t[e] !== u[e]) this[T] = false;
                        }
                        if (this[T] === null) {
                            const e = this[R];
                            this[R] = false;
                            this[T] = new c.Unzip();
                            this[T].on("data", (t) => this[k](t));
                            this[T].on("error", (t) => this.abort(t));
                            this[T].on("end", (t) => {
                                this[R] = true;
                                this[k]();
                            });
                            this[N] = true;
                            const s = this[T][e ? "end" : "write"](t);
                            this[N] = false;
                            return s;
                        }
                    }
                    this[N] = true;
                    if (this[T]) this[T].write(t);
                    else this[k](t);
                    this[N] = false;
                    const e = this[v].length
                        ? false
                        : this[p]
                        ? this[p].flowing
                        : true;
                    if (!e && !this[v].length)
                        this[p].once("drain", (t) => this.emit("drain"));
                    return e;
                }
                [L](t) {
                    if (t && !this[M])
                        this[E] = this[E] ? Buffer.concat([this[E], t]) : t;
                }
                [I]() {
                    if (this[R] && !this[S] && !this[M] && !this[P]) {
                        this[S] = true;
                        const t = this[d];
                        if (t && t.blockRemain) {
                            const e = this[E] ? this[E].length : 0;
                            this.warn(
                                "TAR_BAD_ARCHIVE",
                                `Truncated input (needed ${t.blockRemain} more bytes, only ${e} available)`,
                                { entry: t }
                            );
                            if (this[E]) t.write(this[E]);
                            t.end();
                        }
                        this[O](B);
                    }
                }
                [k](t) {
                    if (this[P]) this[L](t);
                    else if (!t && !this[E]) this[I]();
                    else {
                        this[P] = true;
                        if (this[E]) {
                            this[L](t);
                            const e = this[E];
                            this[E] = null;
                            this[A](e);
                        } else this[A](t);
                        while (
                            this[E] &&
                            this[E].length >= 512 &&
                            !this[M] &&
                            !this[j]
                        ) {
                            const t = this[E];
                            this[E] = null;
                            this[A](t);
                        }
                        this[P] = false;
                    }
                    if (!this[E] || this[R]) this[I]();
                }
                [A](t) {
                    let e = 0;
                    const s = t.length;
                    while (e + 512 <= s && !this[M] && !this[j]) {
                        switch (this[f]) {
                            case "begin":
                            case "header":
                                this[D](t, e);
                                e += 512;
                                break;
                            case "ignore":
                            case "body":
                                e += this[C](t, e);
                                break;
                            case "meta":
                                e += this[x](t, e);
                                break;
                            default:
                                throw new Error("invalid state: " + this[f]);
                        }
                    }
                    if (e < s) {
                        if (this[E])
                            this[E] = Buffer.concat([t.slice(e), this[E]]);
                        else this[E] = t.slice(e);
                    }
                }
                end(t) {
                    if (!this[M]) {
                        if (this[T]) this[T].end(t);
                        else {
                            this[R] = true;
                            this.write(t);
                        }
                    }
                }
            }
        );
    },
    209: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(212));
        var n = _interopRequireDefault(s(803));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        const r = (0, i.default)("v3", 48, n.default);
        var o = r;
        e.default = o;
    },
    211: function (t) {
        t.exports = require("https");
    },
    212: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = _default;
        e.URL = e.DNS = void 0;
        var i = _interopRequireDefault(s(411));
        var n = _interopRequireDefault(s(22));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function stringToBytes(t) {
            t = unescape(encodeURIComponent(t));
            const e = [];
            for (let s = 0; s < t.length; ++s) {
                e.push(t.charCodeAt(s));
            }
            return e;
        }
        const r = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        e.DNS = r;
        const o = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        e.URL = o;
        function _default(t, e, s) {
            function generateUUID(t, r, o, a) {
                if (typeof t === "string") {
                    t = stringToBytes(t);
                }
                if (typeof r === "string") {
                    r = (0, n.default)(r);
                }
                if (r.length !== 16) {
                    throw TypeError(
                        "Namespace must be array-like (16 iterable integer values, 0-255)"
                    );
                }
                let l = new Uint8Array(16 + t.length);
                l.set(r);
                l.set(t, r.length);
                l = s(l);
                l[6] = (l[6] & 15) | e;
                l[8] = (l[8] & 63) | 128;
                if (o) {
                    a = a || 0;
                    for (let t = 0; t < 16; ++t) {
                        o[a + t] = l[t];
                    }
                    return o;
                }
                return (0, i.default)(l);
            }
            try {
                generateUUID.name = t;
            } catch (t) {}
            generateUUID.DNS = r;
            generateUUID.URL = o;
            return generateUUID;
        }
    },
    224: function (t) {
        t.exports = (t) => {
            let e = t.length - 1;
            let s = -1;
            while (e > -1 && t.charAt(e) === "/") {
                s = e;
                e--;
            }
            return s === -1 ? t : t.slice(0, s);
        };
    },
    232: function (t, e, s) {
        "use strict";
        const i = s(554);
        const n = s(622).posix;
        const r = s(858);
        const o = Symbol("slurp");
        const a = Symbol("type");
        class Header {
            constructor(t, e, s, i) {
                this.cksumValid = false;
                this.needPax = false;
                this.nullBlock = false;
                this.block = null;
                this.path = null;
                this.mode = null;
                this.uid = null;
                this.gid = null;
                this.size = null;
                this.mtime = null;
                this.cksum = null;
                this[a] = "0";
                this.linkpath = null;
                this.uname = null;
                this.gname = null;
                this.devmaj = 0;
                this.devmin = 0;
                this.atime = null;
                this.ctime = null;
                if (Buffer.isBuffer(t)) this.decode(t, e || 0, s, i);
                else if (t) this.set(t);
            }
            decode(t, e, s, i) {
                if (!e) e = 0;
                if (!t || !(t.length >= e + 512))
                    throw new Error("need 512 bytes for header");
                this.path = h(t, e, 100);
                this.mode = f(t, e + 100, 8);
                this.uid = f(t, e + 108, 8);
                this.gid = f(t, e + 116, 8);
                this.size = f(t, e + 124, 12);
                this.mtime = c(t, e + 136, 12);
                this.cksum = f(t, e + 148, 12);
                this[o](s);
                this[o](i, true);
                this[a] = h(t, e + 156, 1);
                if (this[a] === "") this[a] = "0";
                if (this[a] === "0" && this.path.substr(-1) === "/")
                    this[a] = "5";
                if (this[a] === "5") this.size = 0;
                this.linkpath = h(t, e + 157, 100);
                if (t.slice(e + 257, e + 265).toString() === "ustar\x0000") {
                    this.uname = h(t, e + 265, 32);
                    this.gname = h(t, e + 297, 32);
                    this.devmaj = f(t, e + 329, 8);
                    this.devmin = f(t, e + 337, 8);
                    if (t[e + 475] !== 0) {
                        const s = h(t, e + 345, 155);
                        this.path = s + "/" + this.path;
                    } else {
                        const s = h(t, e + 345, 130);
                        if (s) this.path = s + "/" + this.path;
                        this.atime = c(t, e + 476, 12);
                        this.ctime = c(t, e + 488, 12);
                    }
                }
                let n = 8 * 32;
                for (let s = e; s < e + 148; s++) n += t[s];
                for (let s = e + 156; s < e + 512; s++) n += t[s];
                this.cksumValid = n === this.cksum;
                if (this.cksum === null && n === 8 * 32) this.nullBlock = true;
            }
            [o](t, e) {
                for (const s in t) {
                    if (
                        t[s] !== null &&
                        t[s] !== undefined &&
                        !(e && s === "path")
                    )
                        this[s] = t[s];
                }
            }
            encode(t, e) {
                if (!t) {
                    t = this.block = Buffer.alloc(512);
                    e = 0;
                }
                if (!e) e = 0;
                if (!(t.length >= e + 512))
                    throw new Error("need 512 bytes for header");
                const s = this.ctime || this.atime ? 130 : 155;
                const i = l(this.path || "", s);
                const n = i[0];
                const r = i[1];
                this.needPax = i[2];
                this.needPax = v(t, e, 100, n) || this.needPax;
                this.needPax = y(t, e + 100, 8, this.mode) || this.needPax;
                this.needPax = y(t, e + 108, 8, this.uid) || this.needPax;
                this.needPax = y(t, e + 116, 8, this.gid) || this.needPax;
                this.needPax = y(t, e + 124, 12, this.size) || this.needPax;
                this.needPax = _(t, e + 136, 12, this.mtime) || this.needPax;
                t[e + 156] = this[a].charCodeAt(0);
                this.needPax =
                    v(t, e + 157, 100, this.linkpath) || this.needPax;
                t.write("ustar\x0000", e + 257, 8);
                this.needPax = v(t, e + 265, 32, this.uname) || this.needPax;
                this.needPax = v(t, e + 297, 32, this.gname) || this.needPax;
                this.needPax = y(t, e + 329, 8, this.devmaj) || this.needPax;
                this.needPax = y(t, e + 337, 8, this.devmin) || this.needPax;
                this.needPax = v(t, e + 345, s, r) || this.needPax;
                if (t[e + 475] !== 0)
                    this.needPax = v(t, e + 345, 155, r) || this.needPax;
                else {
                    this.needPax = v(t, e + 345, 130, r) || this.needPax;
                    this.needPax =
                        _(t, e + 476, 12, this.atime) || this.needPax;
                    this.needPax =
                        _(t, e + 488, 12, this.ctime) || this.needPax;
                }
                let o = 8 * 32;
                for (let s = e; s < e + 148; s++) o += t[s];
                for (let s = e + 156; s < e + 512; s++) o += t[s];
                this.cksum = o;
                y(t, e + 148, 8, this.cksum);
                this.cksumValid = true;
                return this.needPax;
            }
            set(t) {
                for (const e in t) {
                    if (t[e] !== null && t[e] !== undefined) this[e] = t[e];
                }
            }
            get type() {
                return i.name.get(this[a]) || this[a];
            }
            get typeKey() {
                return this[a];
            }
            set type(t) {
                if (i.code.has(t)) this[a] = i.code.get(t);
                else this[a] = t;
            }
        }
        const l = (t, e) => {
            const s = 100;
            let i = t;
            let r = "";
            let o;
            const a = n.parse(t).root || ".";
            if (Buffer.byteLength(i) < s) o = [i, r, false];
            else {
                r = n.dirname(i);
                i = n.basename(i);
                do {
                    if (Buffer.byteLength(i) <= s && Buffer.byteLength(r) <= e)
                        o = [i, r, false];
                    else if (
                        Buffer.byteLength(i) > s &&
                        Buffer.byteLength(r) <= e
                    )
                        o = [i.substr(0, s - 1), r, true];
                    else {
                        i = n.join(n.basename(r), i);
                        r = n.dirname(r);
                    }
                } while (r !== a && !o);
                if (!o) o = [t.substr(0, s - 1), "", true];
            }
            return o;
        };
        const h = (t, e, s) =>
            t
                .slice(e, e + s)
                .toString("utf8")
                .replace(/\0.*/, "");
        const c = (t, e, s) => u(f(t, e, s));
        const u = (t) => (t === null ? null : new Date(t * 1e3));
        const f = (t, e, s) =>
            t[e] & 128 ? r.parse(t.slice(e, e + s)) : p(t, e, s);
        const d = (t) => (isNaN(t) ? null : t);
        const p = (t, e, s) =>
            d(
                parseInt(
                    t
                        .slice(e, e + s)
                        .toString("utf8")
                        .replace(/\0.*$/, "")
                        .trim(),
                    8
                )
            );
        const m = { 12: 8589934591, 8: 2097151 };
        const y = (t, e, s, i) =>
            i === null
                ? false
                : i > m[s] || i < 0
                ? (r.encode(i, t.slice(e, e + s)), true)
                : (b(t, e, s, i), false);
        const b = (t, e, s, i) => t.write(g(i, s), e, s, "ascii");
        const g = (t, e) => w(Math.floor(t).toString(8), e);
        const w = (t, e) =>
            (t.length === e - 1
                ? t
                : new Array(e - t.length - 1).join("0") + t + " ") + "\0";
        const _ = (t, e, s, i) =>
            i === null ? false : y(t, e, s, i.getTime() / 1e3);
        const E = new Array(156).join("\0");
        const v = (t, e, s, i) =>
            i === null
                ? false
                : (t.write(i + E, e, s, "utf8"),
                  i.length !== Buffer.byteLength(i) || i.length > s);
        t.exports = Header;
    },
    293: function (t) {
        t.exports = require("buffer");
    },
    303: function (t, e, s) {
        "use strict";
        const i = s(720);
        const n = s(582);
        const r = s(232);
        const o = s(747);
        const a = s(622);
        const l = s(674);
        const h = s(224);
        const c = (t, e) => {
            if (!e) return l(t);
            t = l(t).replace(/^\.(\/|$)/, "");
            return h(e) + "/" + t;
        };
        const u = 16 * 1024 * 1024;
        const f = Symbol("process");
        const d = Symbol("file");
        const p = Symbol("directory");
        const m = Symbol("symlink");
        const y = Symbol("hardlink");
        const b = Symbol("header");
        const g = Symbol("read");
        const w = Symbol("lstat");
        const _ = Symbol("onlstat");
        const E = Symbol("onread");
        const v = Symbol("onreadlink");
        const R = Symbol("openfile");
        const S = Symbol("onopenfile");
        const O = Symbol("close");
        const T = Symbol("mode");
        const k = Symbol("awaitDrain");
        const A = Symbol("ondrain");
        const C = Symbol("prefix");
        const x = Symbol("hadError");
        const D = s(796);
        const P = s(478);
        const L = s(657);
        const I = s(904);
        const N = D(
            class WriteEntry extends i {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    if (typeof t !== "string")
                        throw new TypeError("path is required");
                    this.path = l(t);
                    this.portable = !!e.portable;
                    this.myuid = (process.getuid && process.getuid()) || 0;
                    this.myuser = process.env.USER || "";
                    this.maxReadSize = e.maxReadSize || u;
                    this.linkCache = e.linkCache || new Map();
                    this.statCache = e.statCache || new Map();
                    this.preservePaths = !!e.preservePaths;
                    this.cwd = l(e.cwd || process.cwd());
                    this.strict = !!e.strict;
                    this.noPax = !!e.noPax;
                    this.noMtime = !!e.noMtime;
                    this.mtime = e.mtime || null;
                    this.prefix = e.prefix ? l(e.prefix) : null;
                    this.fd = null;
                    this.blockLen = null;
                    this.blockRemain = null;
                    this.buf = null;
                    this.offset = null;
                    this.length = null;
                    this.pos = null;
                    this.remain = null;
                    if (typeof e.onwarn === "function")
                        this.on("warn", e.onwarn);
                    let s = false;
                    if (!this.preservePaths) {
                        const [t, e] = L(this.path);
                        if (t) {
                            this.path = e;
                            s = t;
                        }
                    }
                    this.win32 = !!e.win32 || process.platform === "win32";
                    if (this.win32) {
                        this.path = P.decode(this.path.replace(/\\/g, "/"));
                        t = t.replace(/\\/g, "/");
                    }
                    this.absolute = l(e.absolute || a.resolve(this.cwd, t));
                    if (this.path === "") this.path = "./";
                    if (s) {
                        this.warn(
                            "TAR_ENTRY_INFO",
                            `stripping ${s} from absolute path`,
                            { entry: this, path: s + this.path }
                        );
                    }
                    if (this.statCache.has(this.absolute))
                        this[_](this.statCache.get(this.absolute));
                    else this[w]();
                }
                emit(t, ...e) {
                    if (t === "error") this[x] = true;
                    return super.emit(t, ...e);
                }
                [w]() {
                    o.lstat(this.absolute, (t, e) => {
                        if (t) return this.emit("error", t);
                        this[_](e);
                    });
                }
                [_](t) {
                    this.statCache.set(this.absolute, t);
                    this.stat = t;
                    if (!t.isFile()) t.size = 0;
                    this.type = B(t);
                    this.emit("stat", t);
                    this[f]();
                }
                [f]() {
                    switch (this.type) {
                        case "File":
                            return this[d]();
                        case "Directory":
                            return this[p]();
                        case "SymbolicLink":
                            return this[m]();
                        default:
                            return this.end();
                    }
                }
                [T](t) {
                    return I(t, this.type === "Directory", this.portable);
                }
                [C](t) {
                    return c(t, this.prefix);
                }
                [b]() {
                    if (this.type === "Directory" && this.portable)
                        this.noMtime = true;
                    this.header = new r({
                        path: this[C](this.path),
                        linkpath:
                            this.type === "Link"
                                ? this[C](this.linkpath)
                                : this.linkpath,
                        mode: this[T](this.stat.mode),
                        uid: this.portable ? null : this.stat.uid,
                        gid: this.portable ? null : this.stat.gid,
                        size: this.stat.size,
                        mtime: this.noMtime
                            ? null
                            : this.mtime || this.stat.mtime,
                        type: this.type,
                        uname: this.portable
                            ? null
                            : this.stat.uid === this.myuid
                            ? this.myuser
                            : "",
                        atime: this.portable ? null : this.stat.atime,
                        ctime: this.portable ? null : this.stat.ctime,
                    });
                    if (this.header.encode() && !this.noPax) {
                        super.write(
                            new n({
                                atime: this.portable ? null : this.header.atime,
                                ctime: this.portable ? null : this.header.ctime,
                                gid: this.portable ? null : this.header.gid,
                                mtime: this.noMtime
                                    ? null
                                    : this.mtime || this.header.mtime,
                                path: this[C](this.path),
                                linkpath:
                                    this.type === "Link"
                                        ? this[C](this.linkpath)
                                        : this.linkpath,
                                size: this.header.size,
                                uid: this.portable ? null : this.header.uid,
                                uname: this.portable ? null : this.header.uname,
                                dev: this.portable ? null : this.stat.dev,
                                ino: this.portable ? null : this.stat.ino,
                                nlink: this.portable ? null : this.stat.nlink,
                            }).encode()
                        );
                    }
                    super.write(this.header.block);
                }
                [p]() {
                    if (this.path.substr(-1) !== "/") this.path += "/";
                    this.stat.size = 0;
                    this[b]();
                    this.end();
                }
                [m]() {
                    o.readlink(this.absolute, (t, e) => {
                        if (t) return this.emit("error", t);
                        this[v](e);
                    });
                }
                [v](t) {
                    this.linkpath = l(t);
                    this[b]();
                    this.end();
                }
                [y](t) {
                    this.type = "Link";
                    this.linkpath = l(a.relative(this.cwd, t));
                    this.stat.size = 0;
                    this[b]();
                    this.end();
                }
                [d]() {
                    if (this.stat.nlink > 1) {
                        const t = this.stat.dev + ":" + this.stat.ino;
                        if (this.linkCache.has(t)) {
                            const e = this.linkCache.get(t);
                            if (e.indexOf(this.cwd) === 0) return this[y](e);
                        }
                        this.linkCache.set(t, this.absolute);
                    }
                    this[b]();
                    if (this.stat.size === 0) return this.end();
                    this[R]();
                }
                [R]() {
                    o.open(this.absolute, "r", (t, e) => {
                        if (t) return this.emit("error", t);
                        this[S](e);
                    });
                }
                [S](t) {
                    this.fd = t;
                    if (this[x]) return this[O]();
                    this.blockLen = 512 * Math.ceil(this.stat.size / 512);
                    this.blockRemain = this.blockLen;
                    const e = Math.min(this.blockLen, this.maxReadSize);
                    this.buf = Buffer.allocUnsafe(e);
                    this.offset = 0;
                    this.pos = 0;
                    this.remain = this.stat.size;
                    this.length = this.buf.length;
                    this[g]();
                }
                [g]() {
                    const {
                        fd: t,
                        buf: e,
                        offset: s,
                        length: i,
                        pos: n,
                    } = this;
                    o.read(t, e, s, i, n, (t, e) => {
                        if (t) {
                            return this[O](() => this.emit("error", t));
                        }
                        this[E](e);
                    });
                }
                [O](t) {
                    o.close(this.fd, t);
                }
                [E](t) {
                    if (t <= 0 && this.remain > 0) {
                        const t = new Error("encountered unexpected EOF");
                        t.path = this.absolute;
                        t.syscall = "read";
                        t.code = "EOF";
                        return this[O](() => this.emit("error", t));
                    }
                    if (t > this.remain) {
                        const t = new Error("did not encounter expected EOF");
                        t.path = this.absolute;
                        t.syscall = "read";
                        t.code = "EOF";
                        return this[O](() => this.emit("error", t));
                    }
                    if (t === this.remain) {
                        for (
                            let e = t;
                            e < this.length && t < this.blockRemain;
                            e++
                        ) {
                            this.buf[e + this.offset] = 0;
                            t++;
                            this.remain++;
                        }
                    }
                    const e =
                        this.offset === 0 && t === this.buf.length
                            ? this.buf
                            : this.buf.slice(this.offset, this.offset + t);
                    const s = this.write(e);
                    if (!s) this[k](() => this[A]());
                    else this[A]();
                }
                [k](t) {
                    this.once("drain", t);
                }
                write(t) {
                    if (this.blockRemain < t.length) {
                        const t = new Error("writing more data than expected");
                        t.path = this.absolute;
                        return this.emit("error", t);
                    }
                    this.remain -= t.length;
                    this.blockRemain -= t.length;
                    this.pos += t.length;
                    this.offset += t.length;
                    return super.write(t);
                }
                [A]() {
                    if (!this.remain) {
                        if (this.blockRemain)
                            super.write(Buffer.alloc(this.blockRemain));
                        return this[O]((t) =>
                            t ? this.emit("error", t) : this.end()
                        );
                    }
                    if (this.offset >= this.length) {
                        this.buf = Buffer.allocUnsafe(
                            Math.min(this.blockRemain, this.buf.length)
                        );
                        this.offset = 0;
                    }
                    this.length = this.buf.length - this.offset;
                    this[g]();
                }
            }
        );
        class WriteEntrySync extends N {
            [w]() {
                this[_](o.lstatSync(this.absolute));
            }
            [m]() {
                this[v](o.readlinkSync(this.absolute));
            }
            [R]() {
                this[S](o.openSync(this.absolute, "r"));
            }
            [g]() {
                let t = true;
                try {
                    const {
                        fd: e,
                        buf: s,
                        offset: i,
                        length: n,
                        pos: r,
                    } = this;
                    const a = o.readSync(e, s, i, n, r);
                    this[E](a);
                    t = false;
                } finally {
                    if (t) {
                        try {
                            this[O](() => {});
                        } catch (t) {}
                    }
                }
            }
            [k](t) {
                t();
            }
            [O](t) {
                o.closeSync(this.fd);
                t();
            }
        }
        const M = D(
            class WriteEntryTar extends i {
                constructor(t, e) {
                    e = e || {};
                    super(e);
                    this.preservePaths = !!e.preservePaths;
                    this.portable = !!e.portable;
                    this.strict = !!e.strict;
                    this.noPax = !!e.noPax;
                    this.noMtime = !!e.noMtime;
                    this.readEntry = t;
                    this.type = t.type;
                    if (this.type === "Directory" && this.portable)
                        this.noMtime = true;
                    this.prefix = e.prefix || null;
                    this.path = l(t.path);
                    this.mode = this[T](t.mode);
                    this.uid = this.portable ? null : t.uid;
                    this.gid = this.portable ? null : t.gid;
                    this.uname = this.portable ? null : t.uname;
                    this.gname = this.portable ? null : t.gname;
                    this.size = t.size;
                    this.mtime = this.noMtime ? null : e.mtime || t.mtime;
                    this.atime = this.portable ? null : t.atime;
                    this.ctime = this.portable ? null : t.ctime;
                    this.linkpath = l(t.linkpath);
                    if (typeof e.onwarn === "function")
                        this.on("warn", e.onwarn);
                    let s = false;
                    if (!this.preservePaths) {
                        const [t, e] = L(this.path);
                        if (t) {
                            this.path = e;
                            s = t;
                        }
                    }
                    this.remain = t.size;
                    this.blockRemain = t.startBlockSize;
                    this.header = new r({
                        path: this[C](this.path),
                        linkpath:
                            this.type === "Link"
                                ? this[C](this.linkpath)
                                : this.linkpath,
                        mode: this.mode,
                        uid: this.portable ? null : this.uid,
                        gid: this.portable ? null : this.gid,
                        size: this.size,
                        mtime: this.noMtime ? null : this.mtime,
                        type: this.type,
                        uname: this.portable ? null : this.uname,
                        atime: this.portable ? null : this.atime,
                        ctime: this.portable ? null : this.ctime,
                    });
                    if (s) {
                        this.warn(
                            "TAR_ENTRY_INFO",
                            `stripping ${s} from absolute path`,
                            { entry: this, path: s + this.path }
                        );
                    }
                    if (this.header.encode() && !this.noPax) {
                        super.write(
                            new n({
                                atime: this.portable ? null : this.atime,
                                ctime: this.portable ? null : this.ctime,
                                gid: this.portable ? null : this.gid,
                                mtime: this.noMtime ? null : this.mtime,
                                path: this[C](this.path),
                                linkpath:
                                    this.type === "Link"
                                        ? this[C](this.linkpath)
                                        : this.linkpath,
                                size: this.size,
                                uid: this.portable ? null : this.uid,
                                uname: this.portable ? null : this.uname,
                                dev: this.portable ? null : this.readEntry.dev,
                                ino: this.portable ? null : this.readEntry.ino,
                                nlink: this.portable
                                    ? null
                                    : this.readEntry.nlink,
                            }).encode()
                        );
                    }
                    super.write(this.header.block);
                    t.pipe(this);
                }
                [C](t) {
                    return c(t, this.prefix);
                }
                [T](t) {
                    return I(t, this.type === "Directory", this.portable);
                }
                write(t) {
                    const e = t.length;
                    if (e > this.blockRemain)
                        throw new Error(
                            "writing more to entry than is appropriate"
                        );
                    this.blockRemain -= e;
                    return super.write(t);
                }
                end() {
                    if (this.blockRemain)
                        super.write(Buffer.alloc(this.blockRemain));
                    return super.end();
                }
            }
        );
        N.Sync = WriteEntrySync;
        N.Tar = M;
        const B = (t) =>
            t.isFile()
                ? "File"
                : t.isDirectory()
                ? "Directory"
                : t.isSymbolicLink()
                ? "SymbolicLink"
                : "Unsupported";
        t.exports = N;
    },
    304: function (t) {
        t.exports = require("string_decoder");
    },
    327: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var s = "00000000-0000-0000-0000-000000000000";
        e.default = s;
    },
    336: function (t, e, s) {
        const i = s(747);
        const n =
            process.env.__TESTING_MKDIRP_NODE_VERSION__ || process.version;
        const r = n.replace(/^v/, "").split(".");
        const o = +r[0] > 10 || (+r[0] === 10 && +r[1] >= 12);
        const a = !o ? () => false : (t) => t.mkdir === i.mkdir;
        const l = !o ? () => false : (t) => t.mkdirSync === i.mkdirSync;
        t.exports = { useNative: a, useNativeSync: l };
    },
    357: function (t) {
        t.exports = require("assert");
    },
    363: function (t, e) {
        "use strict";
        var s =
            (this && this.__awaiter) ||
            function (t, e, s, i) {
                function adopt(t) {
                    return t instanceof s
                        ? t
                        : new s(function (e) {
                              e(t);
                          });
                }
                return new (s || (s = Promise))(function (s, n) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(i["throw"](t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function step(t) {
                        t.done
                            ? s(t.value)
                            : adopt(t.value).then(fulfilled, rejected);
                    }
                    step((i = i.apply(t, e || [])).next());
                });
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.PersonalAccessTokenCredentialHandler =
            e.BearerCredentialHandler =
            e.BasicCredentialHandler =
                void 0;
        class BasicCredentialHandler {
            constructor(t, e) {
                this.username = t;
                this.password = e;
            }
            prepareRequest(t) {
                if (!t.headers) {
                    throw Error("The request has no headers");
                }
                t.headers["Authorization"] = `Basic ${Buffer.from(
                    `${this.username}:${this.password}`
                ).toString("base64")}`;
            }
            canHandleAuthentication() {
                return false;
            }
            handleAuthentication() {
                return s(this, void 0, void 0, function* () {
                    throw new Error("not implemented");
                });
            }
        }
        e.BasicCredentialHandler = BasicCredentialHandler;
        class BearerCredentialHandler {
            constructor(t) {
                this.token = t;
            }
            prepareRequest(t) {
                if (!t.headers) {
                    throw Error("The request has no headers");
                }
                t.headers["Authorization"] = `Bearer ${this.token}`;
            }
            canHandleAuthentication() {
                return false;
            }
            handleAuthentication() {
                return s(this, void 0, void 0, function* () {
                    throw new Error("not implemented");
                });
            }
        }
        e.BearerCredentialHandler = BearerCredentialHandler;
        class PersonalAccessTokenCredentialHandler {
            constructor(t) {
                this.token = t;
            }
            prepareRequest(t) {
                if (!t.headers) {
                    throw Error("The request has no headers");
                }
                t.headers["Authorization"] = `Basic ${Buffer.from(
                    `PAT:${this.token}`
                ).toString("base64")}`;
            }
            canHandleAuthentication() {
                return false;
            }
            handleAuthentication() {
                return s(this, void 0, void 0, function* () {
                    throw new Error("not implemented");
                });
            }
        }
        e.PersonalAccessTokenCredentialHandler =
            PersonalAccessTokenCredentialHandler;
    },
    381: function (t, e, s) {
        "use strict";
        const i = s(891);
        const n = s(203);
        const r = s(747);
        const o = s(827);
        const a = s(622);
        const l = s(224);
        t.exports = (t, e, s) => {
            if (typeof t === "function") (s = t), (e = null), (t = {});
            else if (Array.isArray(t)) (e = t), (t = {});
            if (typeof e === "function") (s = e), (e = null);
            if (!e) e = [];
            else e = Array.from(e);
            const n = i(t);
            if (n.sync && typeof s === "function")
                throw new TypeError(
                    "callback not supported for sync tar functions"
                );
            if (!n.file && typeof s === "function")
                throw new TypeError("callback only supported with file option");
            if (e.length) c(n, e);
            if (!n.noResume) h(n);
            return n.file && n.sync ? u(n) : n.file ? f(n, s) : d(n);
        };
        const h = (t) => {
            const e = t.onentry;
            t.onentry = e
                ? (t) => {
                      e(t);
                      t.resume();
                  }
                : (t) => t.resume();
        };
        const c = (t, e) => {
            const s = new Map(e.map((t) => [l(t), true]));
            const i = t.filter;
            const n = (t, e) => {
                const i = e || a.parse(t).root || ".";
                const r =
                    t === i ? false : s.has(t) ? s.get(t) : n(a.dirname(t), i);
                s.set(t, r);
                return r;
            };
            t.filter = i ? (t, e) => i(t, e) && n(l(t)) : (t) => n(l(t));
        };
        const u = (t) => {
            const e = d(t);
            const s = t.file;
            let i = true;
            let n;
            try {
                const o = r.statSync(s);
                const a = t.maxReadSize || 16 * 1024 * 1024;
                if (o.size < a) e.end(r.readFileSync(s));
                else {
                    let t = 0;
                    const i = Buffer.allocUnsafe(a);
                    n = r.openSync(s, "r");
                    while (t < o.size) {
                        const s = r.readSync(n, i, 0, a, t);
                        t += s;
                        e.write(i.slice(0, s));
                    }
                    e.end();
                }
                i = false;
            } finally {
                if (i && n) {
                    try {
                        r.closeSync(n);
                    } catch (t) {}
                }
            }
        };
        const f = (t, e) => {
            const s = new n(t);
            const i = t.maxReadSize || 16 * 1024 * 1024;
            const a = t.file;
            const l = new Promise((t, e) => {
                s.on("error", e);
                s.on("end", t);
                r.stat(a, (t, n) => {
                    if (t) e(t);
                    else {
                        const t = new o.ReadStream(a, {
                            readSize: i,
                            size: n.size,
                        });
                        t.on("error", e);
                        t.pipe(s);
                    }
                });
            });
            return e ? l.then(e, e) : l;
        };
        const d = (t) => new n(t);
    },
    384: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(212));
        var n = _interopRequireDefault(s(498));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        const r = (0, i.default)("v5", 80, n.default);
        var o = r;
        e.default = o;
    },
    396: function (t) {
        "use strict";
        t.exports = function (t) {
            t.prototype[Symbol.iterator] = function* () {
                for (let t = this.head; t; t = t.next) {
                    yield t.value;
                }
            };
        };
    },
    411: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(78));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        const n = [];
        for (let t = 0; t < 256; ++t) {
            n.push((t + 256).toString(16).substr(1));
        }
        function stringify(t, e = 0) {
            const s = (
                n[t[e + 0]] +
                n[t[e + 1]] +
                n[t[e + 2]] +
                n[t[e + 3]] +
                "-" +
                n[t[e + 4]] +
                n[t[e + 5]] +
                "-" +
                n[t[e + 6]] +
                n[t[e + 7]] +
                "-" +
                n[t[e + 8]] +
                n[t[e + 9]] +
                "-" +
                n[t[e + 10]] +
                n[t[e + 11]] +
                n[t[e + 12]] +
                n[t[e + 13]] +
                n[t[e + 14]] +
                n[t[e + 15]]
            ).toLowerCase();
            if (!(0, i.default)(s)) {
                throw TypeError("Stringified UUID is invalid");
            }
            return s;
        }
        var r = stringify;
        e.default = r;
    },
    413: function (t, e, s) {
        t.exports = s(141);
    },
    417: function (t) {
        t.exports = require("crypto");
    },
    431: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
                ? function (t, e, s, i) {
                      if (i === undefined) i = s;
                      Object.defineProperty(t, i, {
                          enumerable: true,
                          get: function () {
                              return e[s];
                          },
                      });
                  }
                : function (t, e, s, i) {
                      if (i === undefined) i = s;
                      t[i] = e[s];
                  });
        var n =
            (this && this.__setModuleDefault) ||
            (Object.create
                ? function (t, e) {
                      Object.defineProperty(t, "default", {
                          enumerable: true,
                          value: e,
                      });
                  }
                : function (t, e) {
                      t["default"] = e;
                  });
        var r =
            (this && this.__importStar) ||
            function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (t != null)
                    for (var s in t)
                        if (s !== "default" && Object.hasOwnProperty.call(t, s))
                            i(e, t, s);
                n(e, t);
                return e;
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.issue = e.issueCommand = void 0;
        const o = r(s(87));
        const a = s(82);
        function issueCommand(t, e, s) {
            const i = new Command(t, e, s);
            process.stdout.write(i.toString() + o.EOL);
        }
        e.issueCommand = issueCommand;
        function issue(t, e = "") {
            issueCommand(t, {}, e);
        }
        e.issue = issue;
        const l = "::";
        class Command {
            constructor(t, e, s) {
                if (!t) {
                    t = "missing.command";
                }
                this.command = t;
                this.properties = e;
                this.message = s;
            }
            toString() {
                let t = l + this.command;
                if (
                    this.properties &&
                    Object.keys(this.properties).length > 0
                ) {
                    t += " ";
                    let e = true;
                    for (const s in this.properties) {
                        if (this.properties.hasOwnProperty(s)) {
                            const i = this.properties[s];
                            if (i) {
                                if (e) {
                                    e = false;
                                } else {
                                    t += ",";
                                }
                                t += `${s}=${escapeProperty(i)}`;
                            }
                        }
                    }
                }
                t += `${l}${escapeData(this.message)}`;
                return t;
            }
        }
        function escapeData(t) {
            return a
                .toCommandValue(t)
                .replace(/%/g, "%25")
                .replace(/\r/g, "%0D")
                .replace(/\n/g, "%0A");
        }
        function escapeProperty(t) {
            return a
                .toCommandValue(t)
                .replace(/%/g, "%25")
                .replace(/\r/g, "%0D")
                .replace(/\n/g, "%0A")
                .replace(/:/g, "%3A")
                .replace(/,/g, "%2C");
        }
    },
    456: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var s =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        e.default = s;
    },
    470: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
                ? function (t, e, s, i) {
                      if (i === undefined) i = s;
                      Object.defineProperty(t, i, {
                          enumerable: true,
                          get: function () {
                              return e[s];
                          },
                      });
                  }
                : function (t, e, s, i) {
                      if (i === undefined) i = s;
                      t[i] = e[s];
                  });
        var n =
            (this && this.__setModuleDefault) ||
            (Object.create
                ? function (t, e) {
                      Object.defineProperty(t, "default", {
                          enumerable: true,
                          value: e,
                      });
                  }
                : function (t, e) {
                      t["default"] = e;
                  });
        var r =
            (this && this.__importStar) ||
            function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (t != null)
                    for (var s in t)
                        if (s !== "default" && Object.hasOwnProperty.call(t, s))
                            i(e, t, s);
                n(e, t);
                return e;
            };
        var o =
            (this && this.__awaiter) ||
            function (t, e, s, i) {
                function adopt(t) {
                    return t instanceof s
                        ? t
                        : new s(function (e) {
                              e(t);
                          });
                }
                return new (s || (s = Promise))(function (s, n) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(i["throw"](t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function step(t) {
                        t.done
                            ? s(t.value)
                            : adopt(t.value).then(fulfilled, rejected);
                    }
                    step((i = i.apply(t, e || [])).next());
                });
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.getIDToken =
            e.getState =
            e.saveState =
            e.group =
            e.endGroup =
            e.startGroup =
            e.info =
            e.notice =
            e.warning =
            e.error =
            e.debug =
            e.isDebug =
            e.setFailed =
            e.setCommandEcho =
            e.setOutput =
            e.getBooleanInput =
            e.getMultilineInput =
            e.getInput =
            e.addPath =
            e.setSecret =
            e.exportVariable =
            e.ExitCode =
                void 0;
        const a = s(431);
        const l = s(102);
        const h = s(82);
        const c = r(s(87));
        const u = r(s(622));
        const f = s(742);
        var d;
        (function (t) {
            t[(t["Success"] = 0)] = "Success";
            t[(t["Failure"] = 1)] = "Failure";
        })((d = e.ExitCode || (e.ExitCode = {})));
        function exportVariable(t, e) {
            const s = h.toCommandValue(e);
            process.env[t] = s;
            const i = process.env["GITHUB_ENV"] || "";
            if (i) {
                return l.issueFileCommand(
                    "ENV",
                    l.prepareKeyValueMessage(t, e)
                );
            }
            a.issueCommand("set-env", { name: t }, s);
        }
        e.exportVariable = exportVariable;
        function setSecret(t) {
            a.issueCommand("add-mask", {}, t);
        }
        e.setSecret = setSecret;
        function addPath(t) {
            const e = process.env["GITHUB_PATH"] || "";
            if (e) {
                l.issueFileCommand("PATH", t);
            } else {
                a.issueCommand("add-path", {}, t);
            }
            process.env["PATH"] = `${t}${u.delimiter}${process.env["PATH"]}`;
        }
        e.addPath = addPath;
        function getInput(t, e) {
            const s =
                process.env[`INPUT_${t.replace(/ /g, "_").toUpperCase()}`] ||
                "";
            if (e && e.required && !s) {
                throw new Error(`Input required and not supplied: ${t}`);
            }
            if (e && e.trimWhitespace === false) {
                return s;
            }
            return s.trim();
        }
        e.getInput = getInput;
        function getMultilineInput(t, e) {
            const s = getInput(t, e)
                .split("\n")
                .filter((t) => t !== "");
            if (e && e.trimWhitespace === false) {
                return s;
            }
            return s.map((t) => t.trim());
        }
        e.getMultilineInput = getMultilineInput;
        function getBooleanInput(t, e) {
            const s = ["true", "True", "TRUE"];
            const i = ["false", "False", "FALSE"];
            const n = getInput(t, e);
            if (s.includes(n)) return true;
            if (i.includes(n)) return false;
            throw new TypeError(
                `Input does not meet YAML 1.2 "Core Schema" specification: ${t}\n` +
                    `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
            );
        }
        e.getBooleanInput = getBooleanInput;
        function setOutput(t, e) {
            const s = process.env["GITHUB_OUTPUT"] || "";
            if (s) {
                return l.issueFileCommand(
                    "OUTPUT",
                    l.prepareKeyValueMessage(t, e)
                );
            }
            process.stdout.write(c.EOL);
            a.issueCommand("set-output", { name: t }, h.toCommandValue(e));
        }
        e.setOutput = setOutput;
        function setCommandEcho(t) {
            a.issue("echo", t ? "on" : "off");
        }
        e.setCommandEcho = setCommandEcho;
        function setFailed(t) {
            process.exitCode = d.Failure;
            error(t);
        }
        e.setFailed = setFailed;
        function isDebug() {
            return process.env["RUNNER_DEBUG"] === "1";
        }
        e.isDebug = isDebug;
        function debug(t) {
            a.issueCommand("debug", {}, t);
        }
        e.debug = debug;
        function error(t, e = {}) {
            a.issueCommand(
                "error",
                h.toCommandProperties(e),
                t instanceof Error ? t.toString() : t
            );
        }
        e.error = error;
        function warning(t, e = {}) {
            a.issueCommand(
                "warning",
                h.toCommandProperties(e),
                t instanceof Error ? t.toString() : t
            );
        }
        e.warning = warning;
        function notice(t, e = {}) {
            a.issueCommand(
                "notice",
                h.toCommandProperties(e),
                t instanceof Error ? t.toString() : t
            );
        }
        e.notice = notice;
        function info(t) {
            process.stdout.write(t + c.EOL);
        }
        e.info = info;
        function startGroup(t) {
            a.issue("group", t);
        }
        e.startGroup = startGroup;
        function endGroup() {
            a.issue("endgroup");
        }
        e.endGroup = endGroup;
        function group(t, e) {
            return o(this, void 0, void 0, function* () {
                startGroup(t);
                let s;
                try {
                    s = yield e();
                } finally {
                    endGroup();
                }
                return s;
            });
        }
        e.group = group;
        function saveState(t, e) {
            const s = process.env["GITHUB_STATE"] || "";
            if (s) {
                return l.issueFileCommand(
                    "STATE",
                    l.prepareKeyValueMessage(t, e)
                );
            }
            a.issueCommand("save-state", { name: t }, h.toCommandValue(e));
        }
        e.saveState = saveState;
        function getState(t) {
            return process.env[`STATE_${t}`] || "";
        }
        e.getState = getState;
        function getIDToken(t) {
            return o(this, void 0, void 0, function* () {
                return yield f.OidcClient.getIDToken(t);
            });
        }
        e.getIDToken = getIDToken;
        var p = s(665);
        Object.defineProperty(e, "summary", {
            enumerable: true,
            get: function () {
                return p.summary;
            },
        });
        var m = s(665);
        Object.defineProperty(e, "markdownSummary", {
            enumerable: true,
            get: function () {
                return m.markdownSummary;
            },
        });
        var y = s(573);
        Object.defineProperty(e, "toPosixPath", {
            enumerable: true,
            get: function () {
                return y.toPosixPath;
            },
        });
        Object.defineProperty(e, "toWin32Path", {
            enumerable: true,
            get: function () {
                return y.toWin32Path;
            },
        });
        Object.defineProperty(e, "toPlatformPath", {
            enumerable: true,
            get: function () {
                return y.toPlatformPath;
            },
        });
    },
    471: function (t) {
        const e = Object.create(null);
        const { hasOwnProperty: s } = Object.prototype;
        t.exports = (t) => {
            if (!s.call(e, t)) e[t] = t.normalize("NFKD");
            return e[t];
        };
    },
    478: function (t) {
        "use strict";
        const e = ["|", "<", ">", "?", ":"];
        const s = e.map((t) => String.fromCharCode(61440 + t.charCodeAt(0)));
        const i = new Map(e.map((t, e) => [t, s[e]]));
        const n = new Map(s.map((t, s) => [t, e[s]]));
        t.exports = {
            encode: (t) => e.reduce((t, e) => t.split(e).join(i.get(e)), t),
            decode: (t) => s.reduce((t, e) => t.split(e).join(n.get(e)), t),
        };
    },
    498: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(417));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function sha1(t) {
            if (Array.isArray(t)) {
                t = Buffer.from(t);
            } else if (typeof t === "string") {
                t = Buffer.from(t, "utf8");
            }
            return i.default.createHash("sha1").update(t).digest();
        }
        var n = sha1;
        e.default = n;
    },
    554: function (t, e) {
        "use strict";
        e.name = new Map([
            ["0", "File"],
            ["", "OldFile"],
            ["1", "Link"],
            ["2", "SymbolicLink"],
            ["3", "CharacterDevice"],
            ["4", "BlockDevice"],
            ["5", "Directory"],
            ["6", "FIFO"],
            ["7", "ContiguousFile"],
            ["g", "GlobalExtendedHeader"],
            ["x", "ExtendedHeader"],
            ["A", "SolarisACL"],
            ["D", "GNUDumpDir"],
            ["I", "Inode"],
            ["K", "NextFileHasLongLinkpath"],
            ["L", "NextFileHasLongPath"],
            ["M", "ContinuationFile"],
            ["N", "OldGnuLongPath"],
            ["S", "SparseFile"],
            ["V", "TapeVolumeHeader"],
            ["X", "OldExtendedHeader"],
        ]);
        e.code = new Map(Array.from(e.name).map((t) => [t[1], t[0]]));
    },
    561: function (t, e, s) {
        const { dirname: i } = s(622);
        const { findMade: n, findMadeSync: r } = s(92);
        const { mkdirpManual: o, mkdirpManualSync: a } = s(806);
        const l = (t, e) => {
            e.recursive = true;
            const s = i(t);
            if (s === t) return e.mkdirAsync(t, e);
            return n(e, t).then((s) =>
                e
                    .mkdirAsync(t, e)
                    .then(() => s)
                    .catch((s) => {
                        if (s.code === "ENOENT") return o(t, e);
                        else throw s;
                    })
            );
        };
        const h = (t, e) => {
            e.recursive = true;
            const s = i(t);
            if (s === t) return e.mkdirSync(t, e);
            const n = r(e, t);
            try {
                e.mkdirSync(t, e);
                return n;
            } catch (s) {
                if (s.code === "ENOENT") return a(t, e);
                else throw s;
            }
        };
        t.exports = { mkdirpNative: l, mkdirpNativeSync: h };
    },
    573: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
                ? function (t, e, s, i) {
                      if (i === undefined) i = s;
                      Object.defineProperty(t, i, {
                          enumerable: true,
                          get: function () {
                              return e[s];
                          },
                      });
                  }
                : function (t, e, s, i) {
                      if (i === undefined) i = s;
                      t[i] = e[s];
                  });
        var n =
            (this && this.__setModuleDefault) ||
            (Object.create
                ? function (t, e) {
                      Object.defineProperty(t, "default", {
                          enumerable: true,
                          value: e,
                      });
                  }
                : function (t, e) {
                      t["default"] = e;
                  });
        var r =
            (this && this.__importStar) ||
            function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (t != null)
                    for (var s in t)
                        if (s !== "default" && Object.hasOwnProperty.call(t, s))
                            i(e, t, s);
                n(e, t);
                return e;
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.toPlatformPath = e.toWin32Path = e.toPosixPath = void 0;
        const o = r(s(622));
        function toPosixPath(t) {
            return t.replace(/[\\]/g, "/");
        }
        e.toPosixPath = toPosixPath;
        function toWin32Path(t) {
            return t.replace(/[/]/g, "\\");
        }
        e.toWin32Path = toWin32Path;
        function toPlatformPath(t) {
            return t.replace(/[/\\]/g, o.sep);
        }
        e.toPlatformPath = toPlatformPath;
    },
    577: function (t, e, s) {
        "use strict";
        const i = s(626);
        const n = s(747);
        const r = s(622);
        const o = s(941);
        const a = s(674);
        class SymlinkError extends Error {
            constructor(t, e) {
                super("Cannot extract through symbolic link");
                this.path = e;
                this.symlink = t;
            }
            get name() {
                return "SylinkError";
            }
        }
        class CwdError extends Error {
            constructor(t, e) {
                super(e + ": Cannot cd into '" + t + "'");
                this.path = t;
                this.code = e;
            }
            get name() {
                return "CwdError";
            }
        }
        const l = (t, e) => t.get(a(e));
        const h = (t, e, s) => t.set(a(e), s);
        const c = (t, e) => {
            n.stat(t, (s, i) => {
                if (s || !i.isDirectory())
                    s = new CwdError(t, (s && s.code) || "ENOTDIR");
                e(s);
            });
        };
        t.exports = (t, e, s) => {
            t = a(t);
            const f = e.umask;
            const d = e.mode | 448;
            const p = (d & f) !== 0;
            const m = e.uid;
            const y = e.gid;
            const b =
                typeof m === "number" &&
                typeof y === "number" &&
                (m !== e.processUid || y !== e.processGid);
            const g = e.preserve;
            const w = e.unlink;
            const _ = e.cache;
            const E = a(e.cwd);
            const v = (e, i) => {
                if (e) s(e);
                else {
                    h(_, t, true);
                    if (i && b) o(i, m, y, (t) => v(t));
                    else if (p) n.chmod(t, d, s);
                    else s();
                }
            };
            if (_ && l(_, t) === true) return v();
            if (t === E) return c(t, v);
            if (g) return i(t, { mode: d }).then((t) => v(null, t), v);
            const R = a(r.relative(E, t));
            const S = R.split("/");
            u(E, S, d, _, w, E, null, v);
        };
        const u = (t, e, s, i, o, h, c, d) => {
            if (!e.length) return d(null, c);
            const p = e.shift();
            const m = a(r.resolve(t + "/" + p));
            if (l(i, m)) return u(m, e, s, i, o, h, c, d);
            n.mkdir(m, s, f(m, e, s, i, o, h, c, d));
        };
        const f = (t, e, s, i, r, o, l, h) => (c) => {
            if (c) {
                n.lstat(t, (d, p) => {
                    if (d) {
                        d.path = d.path && a(d.path);
                        h(d);
                    } else if (p.isDirectory()) u(t, e, s, i, r, o, l, h);
                    else if (r) {
                        n.unlink(t, (a) => {
                            if (a) return h(a);
                            n.mkdir(t, s, f(t, e, s, i, r, o, l, h));
                        });
                    } else if (p.isSymbolicLink())
                        return h(new SymlinkError(t, t + "/" + e.join("/")));
                    else h(c);
                });
            } else {
                l = l || t;
                u(t, e, s, i, r, o, l, h);
            }
        };
        const d = (t) => {
            let e = false;
            let s = "ENOTDIR";
            try {
                e = n.statSync(t).isDirectory();
            } catch (t) {
                s = t.code;
            } finally {
                if (!e) throw new CwdError(t, s);
            }
        };
        t.exports.sync = (t, e) => {
            t = a(t);
            const s = e.umask;
            const c = e.mode | 448;
            const u = (c & s) !== 0;
            const f = e.uid;
            const p = e.gid;
            const m =
                typeof f === "number" &&
                typeof p === "number" &&
                (f !== e.processUid || p !== e.processGid);
            const y = e.preserve;
            const b = e.unlink;
            const g = e.cache;
            const w = a(e.cwd);
            const _ = (e) => {
                h(g, t, true);
                if (e && m) o.sync(e, f, p);
                if (u) n.chmodSync(t, c);
            };
            if (g && l(g, t) === true) return _();
            if (t === w) {
                d(w);
                return _();
            }
            if (y) return _(i.sync(t, c));
            const E = a(r.relative(w, t));
            const v = E.split("/");
            let R = null;
            for (let t = v.shift(), e = w; t && (e += "/" + t); t = v.shift()) {
                e = a(r.resolve(e));
                if (l(g, e)) continue;
                try {
                    n.mkdirSync(e, c);
                    R = R || e;
                    h(g, e, true);
                } catch (t) {
                    const s = n.lstatSync(e);
                    if (s.isDirectory()) {
                        h(g, e, true);
                        continue;
                    } else if (b) {
                        n.unlinkSync(e);
                        n.mkdirSync(e, c);
                        R = R || e;
                        h(g, e, true);
                        continue;
                    } else if (s.isSymbolicLink())
                        return new SymlinkError(e, e + "/" + v.join("/"));
                }
            }
            return _(R);
        };
    },
    582: function (t, e, s) {
        "use strict";
        const i = s(232);
        const n = s(622);
        class Pax {
            constructor(t, e) {
                this.atime = t.atime || null;
                this.charset = t.charset || null;
                this.comment = t.comment || null;
                this.ctime = t.ctime || null;
                this.gid = t.gid || null;
                this.gname = t.gname || null;
                this.linkpath = t.linkpath || null;
                this.mtime = t.mtime || null;
                this.path = t.path || null;
                this.size = t.size || null;
                this.uid = t.uid || null;
                this.uname = t.uname || null;
                this.dev = t.dev || null;
                this.ino = t.ino || null;
                this.nlink = t.nlink || null;
                this.global = e || false;
            }
            encode() {
                const t = this.encodeBody();
                if (t === "") return null;
                const e = Buffer.byteLength(t);
                const s = 512 * Math.ceil(1 + e / 512);
                const r = Buffer.allocUnsafe(s);
                for (let t = 0; t < 512; t++) r[t] = 0;
                new i({
                    path: ("PaxHeader/" + n.basename(this.path)).slice(0, 99),
                    mode: this.mode || 420,
                    uid: this.uid || null,
                    gid: this.gid || null,
                    size: e,
                    mtime: this.mtime || null,
                    type: this.global
                        ? "GlobalExtendedHeader"
                        : "ExtendedHeader",
                    linkpath: "",
                    uname: this.uname || "",
                    gname: this.gname || "",
                    devmaj: 0,
                    devmin: 0,
                    atime: this.atime || null,
                    ctime: this.ctime || null,
                }).encode(r);
                r.write(t, 512, e, "utf8");
                for (let t = e + 512; t < r.length; t++) r[t] = 0;
                return r;
            }
            encodeBody() {
                return (
                    this.encodeField("path") +
                    this.encodeField("ctime") +
                    this.encodeField("atime") +
                    this.encodeField("dev") +
                    this.encodeField("ino") +
                    this.encodeField("nlink") +
                    this.encodeField("charset") +
                    this.encodeField("comment") +
                    this.encodeField("gid") +
                    this.encodeField("gname") +
                    this.encodeField("linkpath") +
                    this.encodeField("mtime") +
                    this.encodeField("size") +
                    this.encodeField("uid") +
                    this.encodeField("uname")
                );
            }
            encodeField(t) {
                if (this[t] === null || this[t] === undefined) return "";
                const e =
                    this[t] instanceof Date ? this[t].getTime() / 1e3 : this[t];
                const s =
                    " " +
                    (t === "dev" || t === "ino" || t === "nlink"
                        ? "SCHILY."
                        : "") +
                    t +
                    "=" +
                    e +
                    "\n";
                const i = Buffer.byteLength(s);
                let n = Math.floor(Math.log(i) / Math.log(10)) + 1;
                if (i + n >= Math.pow(10, n)) n += 1;
                const r = n + i;
                return r + s;
            }
        }
        Pax.parse = (t, e, s) => new Pax(r(o(t), e), s);
        const r = (t, e) =>
            e ? Object.keys(t).reduce((e, s) => ((e[s] = t[s]), e), e) : t;
        const o = (t) =>
            t.replace(/\n$/, "").split("\n").reduce(a, Object.create(null));
        const a = (t, e) => {
            const s = parseInt(e, 10);
            if (s !== Buffer.byteLength(e) + 1) return t;
            e = e.substr((s + " ").length);
            const i = e.split("=");
            const n = i.shift().replace(/^SCHILY\.(dev|ino|nlink)/, "$1");
            if (!n) return t;
            const r = i.join("=");
            t[n] = /^([A-Z]+\.)?([mac]|birth|creation)time$/.test(n)
                ? new Date(r * 1e3)
                : /^[0-9]+$/.test(r)
                ? +r
                : r;
            return t;
        };
        t.exports = Pax;
    },
    605: function (t) {
        t.exports = require("http");
    },
    612: function (t, e, s) {
        "use strict";
        t.exports = Yallist;
        Yallist.Node = Node;
        Yallist.create = Yallist;
        function Yallist(t) {
            var e = this;
            if (!(e instanceof Yallist)) {
                e = new Yallist();
            }
            e.tail = null;
            e.head = null;
            e.length = 0;
            if (t && typeof t.forEach === "function") {
                t.forEach(function (t) {
                    e.push(t);
                });
            } else if (arguments.length > 0) {
                for (var s = 0, i = arguments.length; s < i; s++) {
                    e.push(arguments[s]);
                }
            }
            return e;
        }
        Yallist.prototype.removeNode = function (t) {
            if (t.list !== this) {
                throw new Error(
                    "removing node which does not belong to this list"
                );
            }
            var e = t.next;
            var s = t.prev;
            if (e) {
                e.prev = s;
            }
            if (s) {
                s.next = e;
            }
            if (t === this.head) {
                this.head = e;
            }
            if (t === this.tail) {
                this.tail = s;
            }
            t.list.length--;
            t.next = null;
            t.prev = null;
            t.list = null;
            return e;
        };
        Yallist.prototype.unshiftNode = function (t) {
            if (t === this.head) {
                return;
            }
            if (t.list) {
                t.list.removeNode(t);
            }
            var e = this.head;
            t.list = this;
            t.next = e;
            if (e) {
                e.prev = t;
            }
            this.head = t;
            if (!this.tail) {
                this.tail = t;
            }
            this.length++;
        };
        Yallist.prototype.pushNode = function (t) {
            if (t === this.tail) {
                return;
            }
            if (t.list) {
                t.list.removeNode(t);
            }
            var e = this.tail;
            t.list = this;
            t.prev = e;
            if (e) {
                e.next = t;
            }
            this.tail = t;
            if (!this.head) {
                this.head = t;
            }
            this.length++;
        };
        Yallist.prototype.push = function () {
            for (var t = 0, e = arguments.length; t < e; t++) {
                push(this, arguments[t]);
            }
            return this.length;
        };
        Yallist.prototype.unshift = function () {
            for (var t = 0, e = arguments.length; t < e; t++) {
                unshift(this, arguments[t]);
            }
            return this.length;
        };
        Yallist.prototype.pop = function () {
            if (!this.tail) {
                return undefined;
            }
            var t = this.tail.value;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
            this.length--;
            return t;
        };
        Yallist.prototype.shift = function () {
            if (!this.head) {
                return undefined;
            }
            var t = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.length--;
            return t;
        };
        Yallist.prototype.forEach = function (t, e) {
            e = e || this;
            for (var s = this.head, i = 0; s !== null; i++) {
                t.call(e, s.value, i, this);
                s = s.next;
            }
        };
        Yallist.prototype.forEachReverse = function (t, e) {
            e = e || this;
            for (var s = this.tail, i = this.length - 1; s !== null; i--) {
                t.call(e, s.value, i, this);
                s = s.prev;
            }
        };
        Yallist.prototype.get = function (t) {
            for (var e = 0, s = this.head; s !== null && e < t; e++) {
                s = s.next;
            }
            if (e === t && s !== null) {
                return s.value;
            }
        };
        Yallist.prototype.getReverse = function (t) {
            for (var e = 0, s = this.tail; s !== null && e < t; e++) {
                s = s.prev;
            }
            if (e === t && s !== null) {
                return s.value;
            }
        };
        Yallist.prototype.map = function (t, e) {
            e = e || this;
            var s = new Yallist();
            for (var i = this.head; i !== null; ) {
                s.push(t.call(e, i.value, this));
                i = i.next;
            }
            return s;
        };
        Yallist.prototype.mapReverse = function (t, e) {
            e = e || this;
            var s = new Yallist();
            for (var i = this.tail; i !== null; ) {
                s.push(t.call(e, i.value, this));
                i = i.prev;
            }
            return s;
        };
        Yallist.prototype.reduce = function (t, e) {
            var s;
            var i = this.head;
            if (arguments.length > 1) {
                s = e;
            } else if (this.head) {
                i = this.head.next;
                s = this.head.value;
            } else {
                throw new TypeError(
                    "Reduce of empty list with no initial value"
                );
            }
            for (var n = 0; i !== null; n++) {
                s = t(s, i.value, n);
                i = i.next;
            }
            return s;
        };
        Yallist.prototype.reduceReverse = function (t, e) {
            var s;
            var i = this.tail;
            if (arguments.length > 1) {
                s = e;
            } else if (this.tail) {
                i = this.tail.prev;
                s = this.tail.value;
            } else {
                throw new TypeError(
                    "Reduce of empty list with no initial value"
                );
            }
            for (var n = this.length - 1; i !== null; n--) {
                s = t(s, i.value, n);
                i = i.prev;
            }
            return s;
        };
        Yallist.prototype.toArray = function () {
            var t = new Array(this.length);
            for (var e = 0, s = this.head; s !== null; e++) {
                t[e] = s.value;
                s = s.next;
            }
            return t;
        };
        Yallist.prototype.toArrayReverse = function () {
            var t = new Array(this.length);
            for (var e = 0, s = this.tail; s !== null; e++) {
                t[e] = s.value;
                s = s.prev;
            }
            return t;
        };
        Yallist.prototype.slice = function (t, e) {
            e = e || this.length;
            if (e < 0) {
                e += this.length;
            }
            t = t || 0;
            if (t < 0) {
                t += this.length;
            }
            var s = new Yallist();
            if (e < t || e < 0) {
                return s;
            }
            if (t < 0) {
                t = 0;
            }
            if (e > this.length) {
                e = this.length;
            }
            for (var i = 0, n = this.head; n !== null && i < t; i++) {
                n = n.next;
            }
            for (; n !== null && i < e; i++, n = n.next) {
                s.push(n.value);
            }
            return s;
        };
        Yallist.prototype.sliceReverse = function (t, e) {
            e = e || this.length;
            if (e < 0) {
                e += this.length;
            }
            t = t || 0;
            if (t < 0) {
                t += this.length;
            }
            var s = new Yallist();
            if (e < t || e < 0) {
                return s;
            }
            if (t < 0) {
                t = 0;
            }
            if (e > this.length) {
                e = this.length;
            }
            for (var i = this.length, n = this.tail; n !== null && i > e; i--) {
                n = n.prev;
            }
            for (; n !== null && i > t; i--, n = n.prev) {
                s.push(n.value);
            }
            return s;
        };
        Yallist.prototype.splice = function (t, e, ...s) {
            if (t > this.length) {
                t = this.length - 1;
            }
            if (t < 0) {
                t = this.length + t;
            }
            for (var i = 0, n = this.head; n !== null && i < t; i++) {
                n = n.next;
            }
            var r = [];
            for (var i = 0; n && i < e; i++) {
                r.push(n.value);
                n = this.removeNode(n);
            }
            if (n === null) {
                n = this.tail;
            }
            if (n !== this.head && n !== this.tail) {
                n = n.prev;
            }
            for (var i = 0; i < s.length; i++) {
                n = insert(this, n, s[i]);
            }
            return r;
        };
        Yallist.prototype.reverse = function () {
            var t = this.head;
            var e = this.tail;
            for (var s = t; s !== null; s = s.prev) {
                var i = s.prev;
                s.prev = s.next;
                s.next = i;
            }
            this.head = e;
            this.tail = t;
            return this;
        };
        function insert(t, e, s) {
            var i =
                e === t.head
                    ? new Node(s, null, e, t)
                    : new Node(s, e, e.next, t);
            if (i.next === null) {
                t.tail = i;
            }
            if (i.prev === null) {
                t.head = i;
            }
            t.length++;
            return i;
        }
        function push(t, e) {
            t.tail = new Node(e, t.tail, null, t);
            if (!t.head) {
                t.head = t.tail;
            }
            t.length++;
        }
        function unshift(t, e) {
            t.head = new Node(e, null, t.head, t);
            if (!t.tail) {
                t.tail = t.head;
            }
            t.length++;
        }
        function Node(t, e, s, i) {
            if (!(this instanceof Node)) {
                return new Node(t, e, s, i);
            }
            this.list = i;
            this.value = t;
            if (e) {
                e.next = this;
                this.prev = e;
            } else {
                this.prev = null;
            }
            if (s) {
                s.prev = this;
                this.next = s;
            } else {
                this.next = null;
            }
        }
        try {
            s(396)(Yallist);
        } catch (t) {}
    },
    614: function (t) {
        t.exports = require("events");
    },
    622: function (t) {
        t.exports = require("path");
    },
    626: function (t, e, s) {
        const i = s(795);
        const n = s(870);
        const { mkdirpNative: r, mkdirpNativeSync: o } = s(561);
        const { mkdirpManual: a, mkdirpManualSync: l } = s(806);
        const { useNative: h, useNativeSync: c } = s(336);
        const u = (t, e) => {
            t = n(t);
            e = i(e);
            return h(e) ? r(t, e) : a(t, e);
        };
        const f = (t, e) => {
            t = n(t);
            e = i(e);
            return c(e) ? o(t, e) : l(t, e);
        };
        u.sync = f;
        u.native = (t, e) => r(n(t), i(e));
        u.manual = (t, e) => a(n(t), i(e));
        u.nativeSync = (t, e) => o(n(t), i(e));
        u.manualSync = (t, e) => l(n(t), i(e));
        t.exports = u;
    },
    630: function (t, e, s) {
        "use strict";
        const i = s(891);
        const n = s(726);
        const r = s(747);
        const o = s(827);
        const a = s(381);
        const l = s(622);
        const h = s(232);
        t.exports = (t, e, s) => {
            const n = i(t);
            if (!n.file) throw new TypeError("file is required");
            if (n.gzip)
                throw new TypeError("cannot append to compressed archives");
            if (!e || !Array.isArray(e) || !e.length)
                throw new TypeError("no files or directories specified");
            e = Array.from(e);
            return n.sync ? c(n, e) : f(n, e, s);
        };
        const c = (t, e) => {
            const s = new n.Sync(t);
            let i = true;
            let o;
            let a;
            try {
                try {
                    o = r.openSync(t.file, "r+");
                } catch (e) {
                    if (e.code === "ENOENT") o = r.openSync(t.file, "w+");
                    else throw e;
                }
                const n = r.fstatSync(o);
                const l = Buffer.alloc(512);
                t: for (a = 0; a < n.size; a += 512) {
                    for (let t = 0, e = 0; t < 512; t += e) {
                        e = r.readSync(o, l, t, l.length - t, a + t);
                        if (a === 0 && l[0] === 31 && l[1] === 139)
                            throw new Error(
                                "cannot append to compressed archives"
                            );
                        if (!e) break t;
                    }
                    const e = new h(l);
                    if (!e.cksumValid) break;
                    const s = 512 * Math.ceil(e.size / 512);
                    if (a + s + 512 > n.size) break;
                    a += s;
                    if (t.mtimeCache) t.mtimeCache.set(e.path, e.mtime);
                }
                i = false;
                u(t, s, a, o, e);
            } finally {
                if (i) {
                    try {
                        r.closeSync(o);
                    } catch (t) {}
                }
            }
        };
        const u = (t, e, s, i, n) => {
            const r = new o.WriteStreamSync(t.file, { fd: i, start: s });
            e.pipe(r);
            d(e, n);
        };
        const f = (t, e, s) => {
            e = Array.from(e);
            const i = new n(t);
            const a = (e, s, i) => {
                const n = (t, s) => {
                    if (t) r.close(e, (e) => i(t));
                    else i(null, s);
                };
                let o = 0;
                if (s === 0) return n(null, 0);
                let a = 0;
                const l = Buffer.alloc(512);
                const c = (i, u) => {
                    if (i) return n(i);
                    a += u;
                    if (a < 512 && u) {
                        return r.read(e, l, a, l.length - a, o + a, c);
                    }
                    if (o === 0 && l[0] === 31 && l[1] === 139)
                        return n(
                            new Error("cannot append to compressed archives")
                        );
                    if (a < 512) return n(null, o);
                    const f = new h(l);
                    if (!f.cksumValid) return n(null, o);
                    const d = 512 * Math.ceil(f.size / 512);
                    if (o + d + 512 > s) return n(null, o);
                    o += d + 512;
                    if (o >= s) return n(null, o);
                    if (t.mtimeCache) t.mtimeCache.set(f.path, f.mtime);
                    a = 0;
                    r.read(e, l, 0, 512, o, c);
                };
                r.read(e, l, 0, 512, o, c);
            };
            const l = new Promise((s, n) => {
                i.on("error", n);
                let l = "r+";
                const h = (c, u) => {
                    if (c && c.code === "ENOENT" && l === "r+") {
                        l = "w+";
                        return r.open(t.file, l, h);
                    }
                    if (c) return n(c);
                    r.fstat(u, (l, h) => {
                        if (l) return r.close(u, () => n(l));
                        a(u, h.size, (r, a) => {
                            if (r) return n(r);
                            const l = new o.WriteStream(t.file, {
                                fd: u,
                                start: a,
                            });
                            i.pipe(l);
                            l.on("error", n);
                            l.on("close", s);
                            p(i, e);
                        });
                    });
                };
                r.open(t.file, l, h);
            });
            return s ? l.then(s, s) : l;
        };
        const d = (t, e) => {
            e.forEach((e) => {
                if (e.charAt(0) === "@") {
                    a({
                        file: l.resolve(t.cwd, e.substr(1)),
                        sync: true,
                        noResume: true,
                        onentry: (e) => t.add(e),
                    });
                } else t.add(e);
            });
            t.end();
        };
        const p = (t, e) => {
            while (e.length) {
                const s = e.shift();
                if (s.charAt(0) === "@") {
                    return a({
                        file: l.resolve(t.cwd, s.substr(1)),
                        noResume: true,
                        onentry: (e) => t.add(e),
                    }).then((s) => p(t, e));
                } else t.add(s);
            }
            t.end();
        };
    },
    631: function (t) {
        t.exports = require("net");
    },
    656: function (t, e, s) {
        "use strict";
        const i = s(891);
        const n = s(63);
        const r = s(747);
        const o = s(827);
        const a = s(622);
        const l = s(224);
        t.exports = (t, e, s) => {
            if (typeof t === "function") (s = t), (e = null), (t = {});
            else if (Array.isArray(t)) (e = t), (t = {});
            if (typeof e === "function") (s = e), (e = null);
            if (!e) e = [];
            else e = Array.from(e);
            const n = i(t);
            if (n.sync && typeof s === "function")
                throw new TypeError(
                    "callback not supported for sync tar functions"
                );
            if (!n.file && typeof s === "function")
                throw new TypeError("callback only supported with file option");
            if (e.length) h(n, e);
            return n.file && n.sync
                ? c(n)
                : n.file
                ? u(n, s)
                : n.sync
                ? f(n)
                : d(n);
        };
        const h = (t, e) => {
            const s = new Map(e.map((t) => [l(t), true]));
            const i = t.filter;
            const n = (t, e) => {
                const i = e || a.parse(t).root || ".";
                const r =
                    t === i ? false : s.has(t) ? s.get(t) : n(a.dirname(t), i);
                s.set(t, r);
                return r;
            };
            t.filter = i ? (t, e) => i(t, e) && n(l(t)) : (t) => n(l(t));
        };
        const c = (t) => {
            const e = new n.Sync(t);
            const s = t.file;
            const i = r.statSync(s);
            const a = t.maxReadSize || 16 * 1024 * 1024;
            const l = new o.ReadStreamSync(s, { readSize: a, size: i.size });
            l.pipe(e);
        };
        const u = (t, e) => {
            const s = new n(t);
            const i = t.maxReadSize || 16 * 1024 * 1024;
            const a = t.file;
            const l = new Promise((t, e) => {
                s.on("error", e);
                s.on("close", t);
                r.stat(a, (t, n) => {
                    if (t) e(t);
                    else {
                        const t = new o.ReadStream(a, {
                            readSize: i,
                            size: n.size,
                        });
                        t.on("error", e);
                        t.pipe(s);
                    }
                });
            });
            return e ? l.then(e, e) : l;
        };
        const f = (t) => new n.Sync(t);
        const d = (t) => new n(t);
    },
    657: function (t, e, s) {
        const { isAbsolute: i, parse: n } = s(622).win32;
        t.exports = (t) => {
            let e = "";
            let s = n(t);
            while (i(t) || s.root) {
                const i =
                    t.charAt(0) === "/" && t.slice(0, 4) !== "//?/"
                        ? "/"
                        : s.root;
                t = t.substr(i.length);
                e += i;
                s = n(t);
            }
            return [e, t];
        };
    },
    662: function (t, e, s) {
        "use strict";
        const i = s(720);
        const n = s(674);
        const r = Symbol("slurp");
        t.exports = class ReadEntry extends i {
            constructor(t, e, s) {
                super();
                this.pause();
                this.extended = e;
                this.globalExtended = s;
                this.header = t;
                this.startBlockSize = 512 * Math.ceil(t.size / 512);
                this.blockRemain = this.startBlockSize;
                this.remain = t.size;
                this.type = t.type;
                this.meta = false;
                this.ignore = false;
                switch (this.type) {
                    case "File":
                    case "OldFile":
                    case "Link":
                    case "SymbolicLink":
                    case "CharacterDevice":
                    case "BlockDevice":
                    case "Directory":
                    case "FIFO":
                    case "ContiguousFile":
                    case "GNUDumpDir":
                        break;
                    case "NextFileHasLongLinkpath":
                    case "NextFileHasLongPath":
                    case "OldGnuLongPath":
                    case "GlobalExtendedHeader":
                    case "ExtendedHeader":
                    case "OldExtendedHeader":
                        this.meta = true;
                        break;
                    default:
                        this.ignore = true;
                }
                this.path = n(t.path);
                this.mode = t.mode;
                if (this.mode) this.mode = this.mode & 4095;
                this.uid = t.uid;
                this.gid = t.gid;
                this.uname = t.uname;
                this.gname = t.gname;
                this.size = t.size;
                this.mtime = t.mtime;
                this.atime = t.atime;
                this.ctime = t.ctime;
                this.linkpath = n(t.linkpath);
                this.uname = t.uname;
                this.gname = t.gname;
                if (e) this[r](e);
                if (s) this[r](s, true);
            }
            write(t) {
                const e = t.length;
                if (e > this.blockRemain)
                    throw new Error(
                        "writing more to entry than is appropriate"
                    );
                const s = this.remain;
                const i = this.blockRemain;
                this.remain = Math.max(0, s - e);
                this.blockRemain = Math.max(0, i - e);
                if (this.ignore) return true;
                if (s >= e) return super.write(t);
                return super.write(t.slice(0, s));
            }
            [r](t, e) {
                for (const s in t) {
                    if (
                        t[s] !== null &&
                        t[s] !== undefined &&
                        !(e && s === "path")
                    )
                        this[s] =
                            s === "path" || s === "linkpath" ? n(t[s]) : t[s];
                }
            }
        };
    },
    665: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (t, e, s, i) {
                function adopt(t) {
                    return t instanceof s
                        ? t
                        : new s(function (e) {
                              e(t);
                          });
                }
                return new (s || (s = Promise))(function (s, n) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(i["throw"](t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function step(t) {
                        t.done
                            ? s(t.value)
                            : adopt(t.value).then(fulfilled, rejected);
                    }
                    step((i = i.apply(t, e || [])).next());
                });
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.summary =
            e.markdownSummary =
            e.SUMMARY_DOCS_URL =
            e.SUMMARY_ENV_VAR =
                void 0;
        const n = s(87);
        const r = s(747);
        const { access: o, appendFile: a, writeFile: l } = r.promises;
        e.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
        e.SUMMARY_DOCS_URL =
            "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
        class Summary {
            constructor() {
                this._buffer = "";
            }
            filePath() {
                return i(this, void 0, void 0, function* () {
                    if (this._filePath) {
                        return this._filePath;
                    }
                    const t = process.env[e.SUMMARY_ENV_VAR];
                    if (!t) {
                        throw new Error(
                            `Unable to find environment variable for $${e.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`
                        );
                    }
                    try {
                        yield o(t, r.constants.R_OK | r.constants.W_OK);
                    } catch (e) {
                        throw new Error(
                            `Unable to access summary file: '${t}'. Check if the file has correct read/write permissions.`
                        );
                    }
                    this._filePath = t;
                    return this._filePath;
                });
            }
            wrap(t, e, s = {}) {
                const i = Object.entries(s)
                    .map(([t, e]) => ` ${t}="${e}"`)
                    .join("");
                if (!e) {
                    return `<${t}${i}>`;
                }
                return `<${t}${i}>${e}</${t}>`;
            }
            write(t) {
                return i(this, void 0, void 0, function* () {
                    const e = !!(t === null || t === void 0
                        ? void 0
                        : t.overwrite);
                    const s = yield this.filePath();
                    const i = e ? l : a;
                    yield i(s, this._buffer, { encoding: "utf8" });
                    return this.emptyBuffer();
                });
            }
            clear() {
                return i(this, void 0, void 0, function* () {
                    return this.emptyBuffer().write({ overwrite: true });
                });
            }
            stringify() {
                return this._buffer;
            }
            isEmptyBuffer() {
                return this._buffer.length === 0;
            }
            emptyBuffer() {
                this._buffer = "";
                return this;
            }
            addRaw(t, e = false) {
                this._buffer += t;
                return e ? this.addEOL() : this;
            }
            addEOL() {
                return this.addRaw(n.EOL);
            }
            addCodeBlock(t, e) {
                const s = Object.assign({}, e && { lang: e });
                const i = this.wrap("pre", this.wrap("code", t), s);
                return this.addRaw(i).addEOL();
            }
            addList(t, e = false) {
                const s = e ? "ol" : "ul";
                const i = t.map((t) => this.wrap("li", t)).join("");
                const n = this.wrap(s, i);
                return this.addRaw(n).addEOL();
            }
            addTable(t) {
                const e = t
                    .map((t) => {
                        const e = t
                            .map((t) => {
                                if (typeof t === "string") {
                                    return this.wrap("td", t);
                                }
                                const {
                                    header: e,
                                    data: s,
                                    colspan: i,
                                    rowspan: n,
                                } = t;
                                const r = e ? "th" : "td";
                                const o = Object.assign(
                                    Object.assign({}, i && { colspan: i }),
                                    n && { rowspan: n }
                                );
                                return this.wrap(r, s, o);
                            })
                            .join("");
                        return this.wrap("tr", e);
                    })
                    .join("");
                const s = this.wrap("table", e);
                return this.addRaw(s).addEOL();
            }
            addDetails(t, e) {
                const s = this.wrap("details", this.wrap("summary", t) + e);
                return this.addRaw(s).addEOL();
            }
            addImage(t, e, s) {
                const { width: i, height: n } = s || {};
                const r = Object.assign(
                    Object.assign({}, i && { width: i }),
                    n && { height: n }
                );
                const o = this.wrap(
                    "img",
                    null,
                    Object.assign({ src: t, alt: e }, r)
                );
                return this.addRaw(o).addEOL();
            }
            addHeading(t, e) {
                const s = `h${e}`;
                const i = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(s)
                    ? s
                    : "h1";
                const n = this.wrap(i, t);
                return this.addRaw(n).addEOL();
            }
            addSeparator() {
                const t = this.wrap("hr", null);
                return this.addRaw(t).addEOL();
            }
            addBreak() {
                const t = this.wrap("br", null);
                return this.addRaw(t).addEOL();
            }
            addQuote(t, e) {
                const s = Object.assign({}, e && { cite: e });
                const i = this.wrap("blockquote", t, s);
                return this.addRaw(i).addEOL();
            }
            addLink(t, e) {
                const s = this.wrap("a", t, { href: e });
                return this.addRaw(s).addEOL();
            }
        }
        const h = new Summary();
        e.markdownSummary = h;
        e.summary = h;
    },
    669: function (t) {
        t.exports = require("util");
    },
    674: function (t) {
        const e = process.env.TESTING_TAR_FAKE_PLATFORM || process.platform;
        t.exports =
            e !== "win32" ? (t) => t : (t) => t && t.replace(/\\/g, "/");
    },
    676: function (t, e, s) {
        const i = s(470);
        const n = s(885);
        const r = s(747);
        try {
            const t = i.getInput("cwd");
            const e = i.getInput("command", { required: true });
            const s = i
                .getInput("files", { required: true })
                .split("\n")
                .filter((t) => t !== "");
            const o = i.getInput("outPath");
            const a = Array.isArray(s) ? s : [s];
            switch (e) {
                case "c": {
                    if (!o) throw new Error("Please specify an out path");
                    n.c({ cwd: t, gzip: true, sync: true }, a).pipe(
                        r.createWriteStream(o)
                    );
                    break;
                }
                case "x": {
                    if (s.length !== 1)
                        throw new Error("Only one file can be extracted");
                    n.x({ C: t, sync: true, file: s[0] });
                    break;
                }
                default:
                    throw new Error(`Unsupported command: ${e}`);
            }
            i.setOutput("done", true);
        } catch (t) {
            i.setFailed(t.message);
        }
    },
    695: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(78));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function version(t) {
            if (!(0, i.default)(t)) {
                throw TypeError("Invalid UUID");
            }
            return parseInt(t.substr(14, 1), 16);
        }
        var n = version;
        e.default = n;
    },
    720: function (t, e, s) {
        "use strict";
        const i =
            typeof process === "object" && process
                ? process
                : { stdout: null, stderr: null };
        const n = s(614);
        const r = s(794);
        const o = s(612);
        const a = s(304).StringDecoder;
        const l = Symbol("EOF");
        const h = Symbol("maybeEmitEnd");
        const c = Symbol("emittedEnd");
        const u = Symbol("emittingEnd");
        const f = Symbol("emittedError");
        const d = Symbol("closed");
        const p = Symbol("read");
        const m = Symbol("flush");
        const y = Symbol("flushChunk");
        const b = Symbol("encoding");
        const g = Symbol("decoder");
        const w = Symbol("flowing");
        const _ = Symbol("paused");
        const E = Symbol("resume");
        const v = Symbol("bufferLength");
        const R = Symbol("bufferPush");
        const S = Symbol("bufferShift");
        const O = Symbol("objectMode");
        const T = Symbol("destroyed");
        const k = global._MP_NO_ITERATOR_SYMBOLS_ !== "1";
        const A =
            (k && Symbol.asyncIterator) ||
            Symbol("asyncIterator not implemented");
        const C = (k && Symbol.iterator) || Symbol("iterator not implemented");
        const x = (t) => t === "end" || t === "finish" || t === "prefinish";
        const D = (t) =>
            t instanceof ArrayBuffer ||
            (typeof t === "object" &&
                t.constructor &&
                t.constructor.name === "ArrayBuffer" &&
                t.byteLength >= 0);
        const P = (t) => !Buffer.isBuffer(t) && ArrayBuffer.isView(t);
        t.exports = class Minipass extends r {
            constructor(t) {
                super();
                this[w] = false;
                this[_] = false;
                this.pipes = new o();
                this.buffer = new o();
                this[O] = (t && t.objectMode) || false;
                if (this[O]) this[b] = null;
                else this[b] = (t && t.encoding) || null;
                if (this[b] === "buffer") this[b] = null;
                this[g] = this[b] ? new a(this[b]) : null;
                this[l] = false;
                this[c] = false;
                this[u] = false;
                this[d] = false;
                this[f] = null;
                this.writable = true;
                this.readable = true;
                this[v] = 0;
                this[T] = false;
            }
            get bufferLength() {
                return this[v];
            }
            get encoding() {
                return this[b];
            }
            set encoding(t) {
                if (this[O])
                    throw new Error("cannot set encoding in objectMode");
                if (
                    this[b] &&
                    t !== this[b] &&
                    ((this[g] && this[g].lastNeed) || this[v])
                )
                    throw new Error("cannot change encoding");
                if (this[b] !== t) {
                    this[g] = t ? new a(t) : null;
                    if (this.buffer.length)
                        this.buffer = this.buffer.map((t) => this[g].write(t));
                }
                this[b] = t;
            }
            setEncoding(t) {
                this.encoding = t;
            }
            get objectMode() {
                return this[O];
            }
            set objectMode(t) {
                this[O] = this[O] || !!t;
            }
            write(t, e, s) {
                if (this[l]) throw new Error("write after end");
                if (this[T]) {
                    this.emit(
                        "error",
                        Object.assign(
                            new Error(
                                "Cannot call write after a stream was destroyed"
                            ),
                            { code: "ERR_STREAM_DESTROYED" }
                        )
                    );
                    return true;
                }
                if (typeof e === "function") (s = e), (e = "utf8");
                if (!e) e = "utf8";
                if (!this[O] && !Buffer.isBuffer(t)) {
                    if (P(t))
                        t = Buffer.from(t.buffer, t.byteOffset, t.byteLength);
                    else if (D(t)) t = Buffer.from(t);
                    else if (typeof t !== "string") this.objectMode = true;
                }
                if (!this.objectMode && !t.length) {
                    if (this[v] !== 0) this.emit("readable");
                    if (s) s();
                    return this.flowing;
                }
                if (
                    typeof t === "string" &&
                    !this[O] &&
                    !(e === this[b] && !this[g].lastNeed)
                ) {
                    t = Buffer.from(t, e);
                }
                if (Buffer.isBuffer(t) && this[b]) t = this[g].write(t);
                if (this.flowing) {
                    if (this[v] !== 0) this[m](true);
                    this.flowing ? this.emit("data", t) : this[R](t);
                } else this[R](t);
                if (this[v] !== 0) this.emit("readable");
                if (s) s();
                return this.flowing;
            }
            read(t) {
                if (this[T]) return null;
                try {
                    if (this[v] === 0 || t === 0 || t > this[v]) return null;
                    if (this[O]) t = null;
                    if (this.buffer.length > 1 && !this[O]) {
                        if (this.encoding)
                            this.buffer = new o([
                                Array.from(this.buffer).join(""),
                            ]);
                        else
                            this.buffer = new o([
                                Buffer.concat(Array.from(this.buffer), this[v]),
                            ]);
                    }
                    return this[p](t || null, this.buffer.head.value);
                } finally {
                    this[h]();
                }
            }
            [p](t, e) {
                if (t === e.length || t === null) this[S]();
                else {
                    this.buffer.head.value = e.slice(t);
                    e = e.slice(0, t);
                    this[v] -= t;
                }
                this.emit("data", e);
                if (!this.buffer.length && !this[l]) this.emit("drain");
                return e;
            }
            end(t, e, s) {
                if (typeof t === "function") (s = t), (t = null);
                if (typeof e === "function") (s = e), (e = "utf8");
                if (t) this.write(t, e);
                if (s) this.once("end", s);
                this[l] = true;
                this.writable = false;
                if (this.flowing || !this[_]) this[h]();
                return this;
            }
            [E]() {
                if (this[T]) return;
                this[_] = false;
                this[w] = true;
                this.emit("resume");
                if (this.buffer.length) this[m]();
                else if (this[l]) this[h]();
                else this.emit("drain");
            }
            resume() {
                return this[E]();
            }
            pause() {
                this[w] = false;
                this[_] = true;
            }
            get destroyed() {
                return this[T];
            }
            get flowing() {
                return this[w];
            }
            get paused() {
                return this[_];
            }
            [R](t) {
                if (this[O]) this[v] += 1;
                else this[v] += t.length;
                return this.buffer.push(t);
            }
            [S]() {
                if (this.buffer.length) {
                    if (this[O]) this[v] -= 1;
                    else this[v] -= this.buffer.head.value.length;
                }
                return this.buffer.shift();
            }
            [m](t) {
                do {} while (this[y](this[S]()));
                if (!t && !this.buffer.length && !this[l]) this.emit("drain");
            }
            [y](t) {
                return t ? (this.emit("data", t), this.flowing) : false;
            }
            pipe(t, e) {
                if (this[T]) return;
                const s = this[c];
                e = e || {};
                if (t === i.stdout || t === i.stderr) e.end = false;
                else e.end = e.end !== false;
                const n = { dest: t, opts: e, ondrain: (t) => this[E]() };
                this.pipes.push(n);
                t.on("drain", n.ondrain);
                this[E]();
                if (s && n.opts.end) n.dest.end();
                return t;
            }
            addListener(t, e) {
                return this.on(t, e);
            }
            on(t, e) {
                try {
                    return super.on(t, e);
                } finally {
                    if (t === "data" && !this.pipes.length && !this.flowing)
                        this[E]();
                    else if (x(t) && this[c]) {
                        super.emit(t);
                        this.removeAllListeners(t);
                    } else if (t === "error" && this[f]) {
                        e.call(this, this[f]);
                    }
                }
            }
            get emittedEnd() {
                return this[c];
            }
            [h]() {
                if (
                    !this[u] &&
                    !this[c] &&
                    !this[T] &&
                    this.buffer.length === 0 &&
                    this[l]
                ) {
                    this[u] = true;
                    this.emit("end");
                    this.emit("prefinish");
                    this.emit("finish");
                    if (this[d]) this.emit("close");
                    this[u] = false;
                }
            }
            emit(t, e) {
                if (t !== "error" && t !== "close" && t !== T && this[T])
                    return;
                else if (t === "data") {
                    if (!e) return;
                    if (this.pipes.length)
                        this.pipes.forEach(
                            (t) => t.dest.write(e) === false && this.pause()
                        );
                } else if (t === "end") {
                    if (this[c] === true) return;
                    this[c] = true;
                    this.readable = false;
                    if (this[g]) {
                        e = this[g].end();
                        if (e) {
                            this.pipes.forEach((t) => t.dest.write(e));
                            super.emit("data", e);
                        }
                    }
                    this.pipes.forEach((t) => {
                        t.dest.removeListener("drain", t.ondrain);
                        if (t.opts.end) t.dest.end();
                    });
                } else if (t === "close") {
                    this[d] = true;
                    if (!this[c] && !this[T]) return;
                } else if (t === "error") {
                    this[f] = e;
                }
                const s = new Array(arguments.length);
                s[0] = t;
                s[1] = e;
                if (arguments.length > 2) {
                    for (let t = 2; t < arguments.length; t++) {
                        s[t] = arguments[t];
                    }
                }
                try {
                    return super.emit.apply(this, s);
                } finally {
                    if (!x(t)) this[h]();
                    else this.removeAllListeners(t);
                }
            }
            collect() {
                const t = [];
                if (!this[O]) t.dataLength = 0;
                const e = this.promise();
                this.on("data", (e) => {
                    t.push(e);
                    if (!this[O]) t.dataLength += e.length;
                });
                return e.then(() => t);
            }
            concat() {
                return this[O]
                    ? Promise.reject(new Error("cannot concat in objectMode"))
                    : this.collect().then((t) =>
                          this[O]
                              ? Promise.reject(
                                    new Error("cannot concat in objectMode")
                                )
                              : this[b]
                              ? t.join("")
                              : Buffer.concat(t, t.dataLength)
                      );
            }
            promise() {
                return new Promise((t, e) => {
                    this.on(T, () => e(new Error("stream destroyed")));
                    this.on("error", (t) => e(t));
                    this.on("end", () => t());
                });
            }
            [A]() {
                const t = () => {
                    const t = this.read();
                    if (t !== null)
                        return Promise.resolve({ done: false, value: t });
                    if (this[l]) return Promise.resolve({ done: true });
                    let e = null;
                    let s = null;
                    const i = (t) => {
                        this.removeListener("data", n);
                        this.removeListener("end", r);
                        s(t);
                    };
                    const n = (t) => {
                        this.removeListener("error", i);
                        this.removeListener("end", r);
                        this.pause();
                        e({ value: t, done: !!this[l] });
                    };
                    const r = () => {
                        this.removeListener("error", i);
                        this.removeListener("data", n);
                        e({ done: true });
                    };
                    const o = () => i(new Error("stream destroyed"));
                    return new Promise((t, a) => {
                        s = a;
                        e = t;
                        this.once(T, o);
                        this.once("error", i);
                        this.once("end", r);
                        this.once("data", n);
                    });
                };
                return { next: t };
            }
            [C]() {
                const t = () => {
                    const t = this.read();
                    const e = t === null;
                    return { value: t, done: e };
                };
                return { next: t };
            }
            destroy(t) {
                if (this[T]) {
                    if (t) this.emit("error", t);
                    else this.emit(T);
                    return this;
                }
                this[T] = true;
                this.buffer = new o();
                this[v] = 0;
                if (typeof this.close === "function" && !this[d]) this.close();
                if (t) this.emit("error", t);
                else this.emit(T);
                return this;
            }
            static isStream(t) {
                return (
                    !!t &&
                    (t instanceof Minipass ||
                        t instanceof r ||
                        (t instanceof n &&
                            (typeof t.pipe === "function" ||
                                (typeof t.write === "function" &&
                                    typeof t.end === "function"))))
                );
            }
        };
    },
    726: function (t, e, s) {
        "use strict";
        class PackJob {
            constructor(t, e) {
                this.path = t || "./";
                this.absolute = e;
                this.entry = null;
                this.stat = null;
                this.readdir = null;
                this.pending = false;
                this.ignore = false;
                this.piped = false;
            }
        }
        const i = s(720);
        const n = s(133);
        const r = s(662);
        const o = s(303);
        const a = o.Sync;
        const l = o.Tar;
        const h = s(612);
        const c = Buffer.alloc(1024);
        const u = Symbol("onStat");
        const f = Symbol("ended");
        const d = Symbol("queue");
        const p = Symbol("current");
        const m = Symbol("process");
        const y = Symbol("processing");
        const b = Symbol("processJob");
        const g = Symbol("jobs");
        const w = Symbol("jobDone");
        const _ = Symbol("addFSEntry");
        const E = Symbol("addTarEntry");
        const v = Symbol("stat");
        const R = Symbol("readdir");
        const S = Symbol("onreaddir");
        const O = Symbol("pipe");
        const T = Symbol("entry");
        const k = Symbol("entryOpt");
        const A = Symbol("writeEntryClass");
        const C = Symbol("write");
        const x = Symbol("ondrain");
        const D = s(747);
        const P = s(622);
        const L = s(796);
        const I = s(674);
        const N = L(
            class Pack extends i {
                constructor(t) {
                    super(t);
                    t = t || Object.create(null);
                    this.opt = t;
                    this.file = t.file || "";
                    this.cwd = t.cwd || process.cwd();
                    this.maxReadSize = t.maxReadSize;
                    this.preservePaths = !!t.preservePaths;
                    this.strict = !!t.strict;
                    this.noPax = !!t.noPax;
                    this.prefix = I(t.prefix || "");
                    this.linkCache = t.linkCache || new Map();
                    this.statCache = t.statCache || new Map();
                    this.readdirCache = t.readdirCache || new Map();
                    this[A] = o;
                    if (typeof t.onwarn === "function")
                        this.on("warn", t.onwarn);
                    this.portable = !!t.portable;
                    this.zip = null;
                    if (t.gzip) {
                        if (typeof t.gzip !== "object") t.gzip = {};
                        if (this.portable) t.gzip.portable = true;
                        this.zip = new n.Gzip(t.gzip);
                        this.zip.on("data", (t) => super.write(t));
                        this.zip.on("end", (t) => super.end());
                        this.zip.on("drain", (t) => this[x]());
                        this.on("resume", (t) => this.zip.resume());
                    } else this.on("drain", this[x]);
                    this.noDirRecurse = !!t.noDirRecurse;
                    this.follow = !!t.follow;
                    this.noMtime = !!t.noMtime;
                    this.mtime = t.mtime || null;
                    this.filter =
                        typeof t.filter === "function" ? t.filter : (t) => true;
                    this[d] = new h();
                    this[g] = 0;
                    this.jobs = +t.jobs || 4;
                    this[y] = false;
                    this[f] = false;
                }
                [C](t) {
                    return super.write(t);
                }
                add(t) {
                    this.write(t);
                    return this;
                }
                end(t) {
                    if (t) this.write(t);
                    this[f] = true;
                    this[m]();
                    return this;
                }
                write(t) {
                    if (this[f]) throw new Error("write after end");
                    if (t instanceof r) this[E](t);
                    else this[_](t);
                    return this.flowing;
                }
                [E](t) {
                    const e = I(P.resolve(this.cwd, t.path));
                    if (!this.filter(t.path, t)) t.resume();
                    else {
                        const s = new PackJob(t.path, e, false);
                        s.entry = new l(t, this[k](s));
                        s.entry.on("end", (t) => this[w](s));
                        this[g] += 1;
                        this[d].push(s);
                    }
                    this[m]();
                }
                [_](t) {
                    const e = I(P.resolve(this.cwd, t));
                    this[d].push(new PackJob(t, e));
                    this[m]();
                }
                [v](t) {
                    t.pending = true;
                    this[g] += 1;
                    const e = this.follow ? "stat" : "lstat";
                    D[e](t.absolute, (e, s) => {
                        t.pending = false;
                        this[g] -= 1;
                        if (e) this.emit("error", e);
                        else this[u](t, s);
                    });
                }
                [u](t, e) {
                    this.statCache.set(t.absolute, e);
                    t.stat = e;
                    if (!this.filter(t.path, e)) t.ignore = true;
                    this[m]();
                }
                [R](t) {
                    t.pending = true;
                    this[g] += 1;
                    D.readdir(t.absolute, (e, s) => {
                        t.pending = false;
                        this[g] -= 1;
                        if (e) return this.emit("error", e);
                        this[S](t, s);
                    });
                }
                [S](t, e) {
                    this.readdirCache.set(t.absolute, e);
                    t.readdir = e;
                    this[m]();
                }
                [m]() {
                    if (this[y]) return;
                    this[y] = true;
                    for (
                        let t = this[d].head;
                        t !== null && this[g] < this.jobs;
                        t = t.next
                    ) {
                        this[b](t.value);
                        if (t.value.ignore) {
                            const e = t.next;
                            this[d].removeNode(t);
                            t.next = e;
                        }
                    }
                    this[y] = false;
                    if (this[f] && !this[d].length && this[g] === 0) {
                        if (this.zip) this.zip.end(c);
                        else {
                            super.write(c);
                            super.end();
                        }
                    }
                }
                get [p]() {
                    return this[d] && this[d].head && this[d].head.value;
                }
                [w](t) {
                    this[d].shift();
                    this[g] -= 1;
                    this[m]();
                }
                [b](t) {
                    if (t.pending) return;
                    if (t.entry) {
                        if (t === this[p] && !t.piped) this[O](t);
                        return;
                    }
                    if (!t.stat) {
                        if (this.statCache.has(t.absolute))
                            this[u](t, this.statCache.get(t.absolute));
                        else this[v](t);
                    }
                    if (!t.stat) return;
                    if (t.ignore) return;
                    if (
                        !this.noDirRecurse &&
                        t.stat.isDirectory() &&
                        !t.readdir
                    ) {
                        if (this.readdirCache.has(t.absolute))
                            this[S](t, this.readdirCache.get(t.absolute));
                        else this[R](t);
                        if (!t.readdir) return;
                    }
                    t.entry = this[T](t);
                    if (!t.entry) {
                        t.ignore = true;
                        return;
                    }
                    if (t === this[p] && !t.piped) this[O](t);
                }
                [k](t) {
                    return {
                        onwarn: (t, e, s) => this.warn(t, e, s),
                        noPax: this.noPax,
                        cwd: this.cwd,
                        absolute: t.absolute,
                        preservePaths: this.preservePaths,
                        maxReadSize: this.maxReadSize,
                        strict: this.strict,
                        portable: this.portable,
                        linkCache: this.linkCache,
                        statCache: this.statCache,
                        noMtime: this.noMtime,
                        mtime: this.mtime,
                        prefix: this.prefix,
                    };
                }
                [T](t) {
                    this[g] += 1;
                    try {
                        return new this[A](t.path, this[k](t))
                            .on("end", () => this[w](t))
                            .on("error", (t) => this.emit("error", t));
                    } catch (t) {
                        this.emit("error", t);
                    }
                }
                [x]() {
                    if (this[p] && this[p].entry) this[p].entry.resume();
                }
                [O](t) {
                    t.piped = true;
                    if (t.readdir) {
                        t.readdir.forEach((e) => {
                            const s = t.path;
                            const i = s === "./" ? "" : s.replace(/\/*$/, "/");
                            this[_](i + e);
                        });
                    }
                    const e = t.entry;
                    const s = this.zip;
                    if (s) {
                        e.on("data", (t) => {
                            if (!s.write(t)) e.pause();
                        });
                    } else {
                        e.on("data", (t) => {
                            if (!super.write(t)) e.pause();
                        });
                    }
                }
                pause() {
                    if (this.zip) this.zip.pause();
                    return super.pause();
                }
            }
        );
        class PackSync extends N {
            constructor(t) {
                super(t);
                this[A] = a;
            }
            pause() {}
            resume() {}
            [v](t) {
                const e = this.follow ? "statSync" : "lstatSync";
                this[u](t, D[e](t.absolute));
            }
            [R](t, e) {
                this[S](t, D.readdirSync(t.absolute));
            }
            [O](t) {
                const e = t.entry;
                const s = this.zip;
                if (t.readdir) {
                    t.readdir.forEach((e) => {
                        const s = t.path;
                        const i = s === "./" ? "" : s.replace(/\/*$/, "/");
                        this[_](i + e);
                    });
                }
                if (s) {
                    e.on("data", (t) => {
                        s.write(t);
                    });
                } else {
                    e.on("data", (t) => {
                        super[C](t);
                    });
                }
            }
        }
        N.Sync = PackSync;
        t.exports = N;
    },
    733: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(844));
        var n = _interopRequireDefault(s(411));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function v4(t, e, s) {
            t = t || {};
            const r = t.random || (t.rng || i.default)();
            r[6] = (r[6] & 15) | 64;
            r[8] = (r[8] & 63) | 128;
            if (e) {
                s = s || 0;
                for (let t = 0; t < 16; ++t) {
                    e[s + t] = r[t];
                }
                return e;
            }
            return (0, n.default)(r);
        }
        var r = v4;
        e.default = r;
    },
    742: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (t, e, s, i) {
                function adopt(t) {
                    return t instanceof s
                        ? t
                        : new s(function (e) {
                              e(t);
                          });
                }
                return new (s || (s = Promise))(function (s, n) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(i["throw"](t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function step(t) {
                        t.done
                            ? s(t.value)
                            : adopt(t.value).then(fulfilled, rejected);
                    }
                    step((i = i.apply(t, e || [])).next());
                });
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.OidcClient = void 0;
        const n = s(993);
        const r = s(363);
        const o = s(470);
        class OidcClient {
            static createHttpClient(t = true, e = 10) {
                const s = { allowRetries: t, maxRetries: e };
                return new n.HttpClient(
                    "actions/oidc-client",
                    [
                        new r.BearerCredentialHandler(
                            OidcClient.getRequestToken()
                        ),
                    ],
                    s
                );
            }
            static getRequestToken() {
                const t = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
                if (!t) {
                    throw new Error(
                        "Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable"
                    );
                }
                return t;
            }
            static getIDTokenUrl() {
                const t = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
                if (!t) {
                    throw new Error(
                        "Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable"
                    );
                }
                return t;
            }
            static getCall(t) {
                var e;
                return i(this, void 0, void 0, function* () {
                    const s = OidcClient.createHttpClient();
                    const i = yield s.getJson(t).catch((t) => {
                        throw new Error(
                            `Failed to get ID Token. \n \n        Error Code : ${t.statusCode}\n \n        Error Message: ${t.result.message}`
                        );
                    });
                    const n =
                        (e = i.result) === null || e === void 0
                            ? void 0
                            : e.value;
                    if (!n) {
                        throw new Error(
                            "Response json body do not have ID Token field"
                        );
                    }
                    return n;
                });
            }
            static getIDToken(t) {
                return i(this, void 0, void 0, function* () {
                    try {
                        let e = OidcClient.getIDTokenUrl();
                        if (t) {
                            const s = encodeURIComponent(t);
                            e = `${e}&audience=${s}`;
                        }
                        o.debug(`ID token url is ${e}`);
                        const s = yield OidcClient.getCall(e);
                        o.setSecret(s);
                        return s;
                    } catch (t) {
                        throw new Error(`Error message: ${t.message}`);
                    }
                });
            }
        }
        e.OidcClient = OidcClient;
    },
    747: function (t) {
        t.exports = require("fs");
    },
    761: function (t) {
        t.exports = require("zlib");
    },
    794: function (t) {
        t.exports = require("stream");
    },
    795: function (t, e, s) {
        const { promisify: i } = s(669);
        const n = s(747);
        const r = (t) => {
            if (!t) t = { mode: 511, fs: n };
            else if (typeof t === "object") t = { mode: 511, fs: n, ...t };
            else if (typeof t === "number") t = { mode: t, fs: n };
            else if (typeof t === "string") t = { mode: parseInt(t, 8), fs: n };
            else throw new TypeError("invalid options argument");
            t.mkdir = t.mkdir || t.fs.mkdir || n.mkdir;
            t.mkdirAsync = i(t.mkdir);
            t.stat = t.stat || t.fs.stat || n.stat;
            t.statAsync = i(t.stat);
            t.statSync = t.statSync || t.fs.statSync || n.statSync;
            t.mkdirSync = t.mkdirSync || t.fs.mkdirSync || n.mkdirSync;
            return t;
        };
        t.exports = r;
    },
    796: function (t) {
        "use strict";
        t.exports = (t) =>
            class extends t {
                warn(t, e, s = {}) {
                    if (this.file) s.file = this.file;
                    if (this.cwd) s.cwd = this.cwd;
                    s.code = (e instanceof Error && e.code) || t;
                    s.tarCode = t;
                    if (!this.strict && s.recoverable !== false) {
                        if (e instanceof Error) {
                            s = Object.assign(e, s);
                            e = e.message;
                        }
                        this.emit("warn", s.tarCode, e, s);
                    } else if (e instanceof Error)
                        this.emit("error", Object.assign(e, s));
                    else
                        this.emit(
                            "error",
                            Object.assign(new Error(`${t}: ${e}`), s)
                        );
                }
            };
    },
    803: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(417));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        function md5(t) {
            if (Array.isArray(t)) {
                t = Buffer.from(t);
            } else if (typeof t === "string") {
                t = Buffer.from(t, "utf8");
            }
            return i.default.createHash("md5").update(t).digest();
        }
        var n = md5;
        e.default = n;
    },
    806: function (t, e, s) {
        const { dirname: i } = s(622);
        const n = (t, e, s) => {
            e.recursive = false;
            const r = i(t);
            if (r === t) {
                return e.mkdirAsync(t, e).catch((t) => {
                    if (t.code !== "EISDIR") throw t;
                });
            }
            return e.mkdirAsync(t, e).then(
                () => s || t,
                (i) => {
                    if (i.code === "ENOENT")
                        return n(r, e).then((s) => n(t, e, s));
                    if (i.code !== "EEXIST" && i.code !== "EROFS") throw i;
                    return e.statAsync(t).then(
                        (t) => {
                            if (t.isDirectory()) return s;
                            else throw i;
                        },
                        () => {
                            throw i;
                        }
                    );
                }
            );
        };
        const r = (t, e, s) => {
            const n = i(t);
            e.recursive = false;
            if (n === t) {
                try {
                    return e.mkdirSync(t, e);
                } catch (t) {
                    if (t.code !== "EISDIR") throw t;
                    else return;
                }
            }
            try {
                e.mkdirSync(t, e);
                return s || t;
            } catch (i) {
                if (i.code === "ENOENT") return r(t, e, r(n, e, s));
                if (i.code !== "EEXIST" && i.code !== "EROFS") throw i;
                try {
                    if (!e.statSync(t).isDirectory()) throw i;
                } catch (t) {
                    throw i;
                }
            }
        };
        t.exports = { mkdirpManual: n, mkdirpManualSync: r };
    },
    827: function (t, e, s) {
        "use strict";
        const i = s(720);
        const n = s(614).EventEmitter;
        const r = s(747);
        let o = r.writev;
        if (!o) {
            const t = process.binding("fs");
            const e = t.FSReqWrap || t.FSReqCallback;
            o = (s, i, n, r) => {
                const o = (t, e) => r(t, e, i);
                const a = new e();
                a.oncomplete = o;
                t.writeBuffers(s, i, n, a);
            };
        }
        const a = Symbol("_autoClose");
        const l = Symbol("_close");
        const h = Symbol("_ended");
        const c = Symbol("_fd");
        const u = Symbol("_finished");
        const f = Symbol("_flags");
        const d = Symbol("_flush");
        const p = Symbol("_handleChunk");
        const m = Symbol("_makeBuf");
        const y = Symbol("_mode");
        const b = Symbol("_needDrain");
        const g = Symbol("_onerror");
        const w = Symbol("_onopen");
        const _ = Symbol("_onread");
        const E = Symbol("_onwrite");
        const v = Symbol("_open");
        const R = Symbol("_path");
        const S = Symbol("_pos");
        const O = Symbol("_queue");
        const T = Symbol("_read");
        const k = Symbol("_readSize");
        const A = Symbol("_reading");
        const C = Symbol("_remain");
        const x = Symbol("_size");
        const D = Symbol("_write");
        const P = Symbol("_writing");
        const L = Symbol("_defaultFlag");
        const I = Symbol("_errored");
        class ReadStream extends i {
            constructor(t, e) {
                e = e || {};
                super(e);
                this.readable = true;
                this.writable = false;
                if (typeof t !== "string")
                    throw new TypeError("path must be a string");
                this[I] = false;
                this[c] = typeof e.fd === "number" ? e.fd : null;
                this[R] = t;
                this[k] = e.readSize || 16 * 1024 * 1024;
                this[A] = false;
                this[x] = typeof e.size === "number" ? e.size : Infinity;
                this[C] = this[x];
                this[a] = typeof e.autoClose === "boolean" ? e.autoClose : true;
                if (typeof this[c] === "number") this[T]();
                else this[v]();
            }
            get fd() {
                return this[c];
            }
            get path() {
                return this[R];
            }
            write() {
                throw new TypeError("this is a readable stream");
            }
            end() {
                throw new TypeError("this is a readable stream");
            }
            [v]() {
                r.open(this[R], "r", (t, e) => this[w](t, e));
            }
            [w](t, e) {
                if (t) this[g](t);
                else {
                    this[c] = e;
                    this.emit("open", e);
                    this[T]();
                }
            }
            [m]() {
                return Buffer.allocUnsafe(Math.min(this[k], this[C]));
            }
            [T]() {
                if (!this[A]) {
                    this[A] = true;
                    const t = this[m]();
                    if (t.length === 0)
                        return process.nextTick(() => this[_](null, 0, t));
                    r.read(this[c], t, 0, t.length, null, (t, e, s) =>
                        this[_](t, e, s)
                    );
                }
            }
            [_](t, e, s) {
                this[A] = false;
                if (t) this[g](t);
                else if (this[p](e, s)) this[T]();
            }
            [l]() {
                if (this[a] && typeof this[c] === "number") {
                    const t = this[c];
                    this[c] = null;
                    r.close(t, (t) =>
                        t ? this.emit("error", t) : this.emit("close")
                    );
                }
            }
            [g](t) {
                this[A] = true;
                this[l]();
                this.emit("error", t);
            }
            [p](t, e) {
                let s = false;
                this[C] -= t;
                if (t > 0) s = super.write(t < e.length ? e.slice(0, t) : e);
                if (t === 0 || this[C] <= 0) {
                    s = false;
                    this[l]();
                    super.end();
                }
                return s;
            }
            emit(t, e) {
                switch (t) {
                    case "prefinish":
                    case "finish":
                        break;
                    case "drain":
                        if (typeof this[c] === "number") this[T]();
                        break;
                    case "error":
                        if (this[I]) return;
                        this[I] = true;
                        return super.emit(t, e);
                    default:
                        return super.emit(t, e);
                }
            }
        }
        class ReadStreamSync extends ReadStream {
            [v]() {
                let t = true;
                try {
                    this[w](null, r.openSync(this[R], "r"));
                    t = false;
                } finally {
                    if (t) this[l]();
                }
            }
            [T]() {
                let t = true;
                try {
                    if (!this[A]) {
                        this[A] = true;
                        do {
                            const t = this[m]();
                            const e =
                                t.length === 0
                                    ? 0
                                    : r.readSync(this[c], t, 0, t.length, null);
                            if (!this[p](e, t)) break;
                        } while (true);
                        this[A] = false;
                    }
                    t = false;
                } finally {
                    if (t) this[l]();
                }
            }
            [l]() {
                if (this[a] && typeof this[c] === "number") {
                    const t = this[c];
                    this[c] = null;
                    r.closeSync(t);
                    this.emit("close");
                }
            }
        }
        class WriteStream extends n {
            constructor(t, e) {
                e = e || {};
                super(e);
                this.readable = false;
                this.writable = true;
                this[I] = false;
                this[P] = false;
                this[h] = false;
                this[b] = false;
                this[O] = [];
                this[R] = t;
                this[c] = typeof e.fd === "number" ? e.fd : null;
                this[y] = e.mode === undefined ? 438 : e.mode;
                this[S] = typeof e.start === "number" ? e.start : null;
                this[a] = typeof e.autoClose === "boolean" ? e.autoClose : true;
                const s = this[S] !== null ? "r+" : "w";
                this[L] = e.flags === undefined;
                this[f] = this[L] ? s : e.flags;
                if (this[c] === null) this[v]();
            }
            emit(t, e) {
                if (t === "error") {
                    if (this[I]) return;
                    this[I] = true;
                }
                return super.emit(t, e);
            }
            get fd() {
                return this[c];
            }
            get path() {
                return this[R];
            }
            [g](t) {
                this[l]();
                this[P] = true;
                this.emit("error", t);
            }
            [v]() {
                r.open(this[R], this[f], this[y], (t, e) => this[w](t, e));
            }
            [w](t, e) {
                if (this[L] && this[f] === "r+" && t && t.code === "ENOENT") {
                    this[f] = "w";
                    this[v]();
                } else if (t) this[g](t);
                else {
                    this[c] = e;
                    this.emit("open", e);
                    this[d]();
                }
            }
            end(t, e) {
                if (t) this.write(t, e);
                this[h] = true;
                if (!this[P] && !this[O].length && typeof this[c] === "number")
                    this[E](null, 0);
                return this;
            }
            write(t, e) {
                if (typeof t === "string") t = Buffer.from(t, e);
                if (this[h]) {
                    this.emit("error", new Error("write() after end()"));
                    return false;
                }
                if (this[c] === null || this[P] || this[O].length) {
                    this[O].push(t);
                    this[b] = true;
                    return false;
                }
                this[P] = true;
                this[D](t);
                return true;
            }
            [D](t) {
                r.write(this[c], t, 0, t.length, this[S], (t, e) =>
                    this[E](t, e)
                );
            }
            [E](t, e) {
                if (t) this[g](t);
                else {
                    if (this[S] !== null) this[S] += e;
                    if (this[O].length) this[d]();
                    else {
                        this[P] = false;
                        if (this[h] && !this[u]) {
                            this[u] = true;
                            this[l]();
                            this.emit("finish");
                        } else if (this[b]) {
                            this[b] = false;
                            this.emit("drain");
                        }
                    }
                }
            }
            [d]() {
                if (this[O].length === 0) {
                    if (this[h]) this[E](null, 0);
                } else if (this[O].length === 1) this[D](this[O].pop());
                else {
                    const t = this[O];
                    this[O] = [];
                    o(this[c], t, this[S], (t, e) => this[E](t, e));
                }
            }
            [l]() {
                if (this[a] && typeof this[c] === "number") {
                    const t = this[c];
                    this[c] = null;
                    r.close(t, (t) =>
                        t ? this.emit("error", t) : this.emit("close")
                    );
                }
            }
        }
        class WriteStreamSync extends WriteStream {
            [v]() {
                let t;
                if (this[L] && this[f] === "r+") {
                    try {
                        t = r.openSync(this[R], this[f], this[y]);
                    } catch (t) {
                        if (t.code === "ENOENT") {
                            this[f] = "w";
                            return this[v]();
                        } else throw t;
                    }
                } else t = r.openSync(this[R], this[f], this[y]);
                this[w](null, t);
            }
            [l]() {
                if (this[a] && typeof this[c] === "number") {
                    const t = this[c];
                    this[c] = null;
                    r.closeSync(t);
                    this.emit("close");
                }
            }
            [D](t) {
                let e = true;
                try {
                    this[E](
                        null,
                        r.writeSync(this[c], t, 0, t.length, this[S])
                    );
                    e = false;
                } finally {
                    if (e)
                        try {
                            this[l]();
                        } catch (t) {}
                }
            }
        }
        e.ReadStream = ReadStream;
        e.ReadStreamSync = ReadStreamSync;
        e.WriteStream = WriteStream;
        e.WriteStreamSync = WriteStreamSync;
    },
    844: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = rng;
        var i = _interopRequireDefault(s(417));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        const n = new Uint8Array(256);
        let r = n.length;
        function rng() {
            if (r > n.length - 16) {
                i.default.randomFillSync(n);
                r = 0;
            }
            return n.slice(r, (r += 16));
        }
    },
    858: function (t) {
        "use strict";
        const e = (t, e) => {
            if (!Number.isSafeInteger(t))
                throw Error(
                    "cannot encode number outside of javascript safe integer range"
                );
            else if (t < 0) i(t, e);
            else s(t, e);
            return e;
        };
        const s = (t, e) => {
            e[0] = 128;
            for (var s = e.length; s > 1; s--) {
                e[s - 1] = t & 255;
                t = Math.floor(t / 256);
            }
        };
        const i = (t, e) => {
            e[0] = 255;
            var s = false;
            t = t * -1;
            for (var i = e.length; i > 1; i--) {
                var n = t & 255;
                t = Math.floor(t / 256);
                if (s) e[i - 1] = a(n);
                else if (n === 0) e[i - 1] = 0;
                else {
                    s = true;
                    e[i - 1] = l(n);
                }
            }
        };
        const n = (t) => {
            const e = t[0];
            const s =
                e === 128 ? o(t.slice(1, t.length)) : e === 255 ? r(t) : null;
            if (s === null) throw Error("invalid base256 encoding");
            if (!Number.isSafeInteger(s))
                throw Error(
                    "parsed number outside of javascript safe integer range"
                );
            return s;
        };
        const r = (t) => {
            var e = t.length;
            var s = 0;
            var i = false;
            for (var n = e - 1; n > -1; n--) {
                var r = t[n];
                var o;
                if (i) o = a(r);
                else if (r === 0) o = r;
                else {
                    i = true;
                    o = l(r);
                }
                if (o !== 0) s -= o * Math.pow(256, e - n - 1);
            }
            return s;
        };
        const o = (t) => {
            var e = t.length;
            var s = 0;
            for (var i = e - 1; i > -1; i--) {
                var n = t[i];
                if (n !== 0) s += n * Math.pow(256, e - i - 1);
            }
            return s;
        };
        const a = (t) => (255 ^ t) & 255;
        const l = (t) => ((255 ^ t) + 1) & 255;
        t.exports = { encode: e, parse: n };
    },
    870: function (t, e, s) {
        const i = process.env.__TESTING_MKDIRP_PLATFORM__ || process.platform;
        const { resolve: n, parse: r } = s(622);
        const o = (t) => {
            if (/\0/.test(t)) {
                throw Object.assign(
                    new TypeError("path must be a string without null bytes"),
                    { path: t, code: "ERR_INVALID_ARG_VALUE" }
                );
            }
            t = n(t);
            if (i === "win32") {
                const e = /[*|"<>?:]/;
                const { root: s } = r(t);
                if (e.test(t.substr(s.length))) {
                    throw Object.assign(
                        new Error("Illegal characters in path."),
                        { path: t, code: "EINVAL" }
                    );
                }
            }
            return t;
        };
        t.exports = o;
    },
    885: function (t, e, s) {
        "use strict";
        e.c = e.create = s(159);
        e.r = e.replace = s(630);
        e.t = e.list = s(381);
        e.u = e.update = s(966);
        e.x = e.extract = s(656);
        e.Pack = s(726);
        e.Unpack = s(63);
        e.Parse = s(203);
        e.ReadEntry = s(662);
        e.WriteEntry = s(303);
        e.Header = s(232);
        e.Pax = s(582);
        e.types = s(554);
    },
    891: function (t) {
        "use strict";
        const e = new Map([
            ["C", "cwd"],
            ["f", "file"],
            ["z", "gzip"],
            ["P", "preservePaths"],
            ["U", "unlink"],
            ["strip-components", "strip"],
            ["stripComponents", "strip"],
            ["keep-newer", "newer"],
            ["keepNewer", "newer"],
            ["keep-newer-files", "newer"],
            ["keepNewerFiles", "newer"],
            ["k", "keep"],
            ["keep-existing", "keep"],
            ["keepExisting", "keep"],
            ["m", "noMtime"],
            ["no-mtime", "noMtime"],
            ["p", "preserveOwner"],
            ["L", "follow"],
            ["h", "follow"],
        ]);
        t.exports = (t) =>
            t
                ? Object.keys(t)
                      .map((s) => [e.has(s) ? e.get(s) : s, t[s]])
                      .reduce(
                          (t, e) => ((t[e[0]] = e[1]), t),
                          Object.create(null)
                      )
                : {};
    },
    893: function (t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = void 0;
        var i = _interopRequireDefault(s(844));
        var n = _interopRequireDefault(s(411));
        function _interopRequireDefault(t) {
            return t && t.__esModule ? t : { default: t };
        }
        let r;
        let o;
        let a = 0;
        let l = 0;
        function v1(t, e, s) {
            let h = (e && s) || 0;
            const c = e || new Array(16);
            t = t || {};
            let u = t.node || r;
            let f = t.clockseq !== undefined ? t.clockseq : o;
            if (u == null || f == null) {
                const e = t.random || (t.rng || i.default)();
                if (u == null) {
                    u = r = [e[0] | 1, e[1], e[2], e[3], e[4], e[5]];
                }
                if (f == null) {
                    f = o = ((e[6] << 8) | e[7]) & 16383;
                }
            }
            let d = t.msecs !== undefined ? t.msecs : Date.now();
            let p = t.nsecs !== undefined ? t.nsecs : l + 1;
            const m = d - a + (p - l) / 1e4;
            if (m < 0 && t.clockseq === undefined) {
                f = (f + 1) & 16383;
            }
            if ((m < 0 || d > a) && t.nsecs === undefined) {
                p = 0;
            }
            if (p >= 1e4) {
                throw new Error(
                    "uuid.v1(): Can't create more than 10M uuids/sec"
                );
            }
            a = d;
            l = p;
            o = f;
            d += 122192928e5;
            const y = ((d & 268435455) * 1e4 + p) % 4294967296;
            c[h++] = (y >>> 24) & 255;
            c[h++] = (y >>> 16) & 255;
            c[h++] = (y >>> 8) & 255;
            c[h++] = y & 255;
            const b = ((d / 4294967296) * 1e4) & 268435455;
            c[h++] = (b >>> 8) & 255;
            c[h++] = b & 255;
            c[h++] = ((b >>> 24) & 15) | 16;
            c[h++] = (b >>> 16) & 255;
            c[h++] = (f >>> 8) | 128;
            c[h++] = f & 255;
            for (let t = 0; t < 6; ++t) {
                c[h + t] = u[t];
            }
            return e || (0, n.default)(c);
        }
        var h = v1;
        e.default = h;
    },
    904: function (t) {
        "use strict";
        t.exports = (t, e, s) => {
            t &= 4095;
            if (s) t = (t | 384) & ~18;
            if (e) {
                if (t & 256) t |= 64;
                if (t & 32) t |= 8;
                if (t & 4) t |= 1;
            }
            return t;
        };
    },
    941: function (t, e, s) {
        "use strict";
        const i = s(747);
        const n = s(622);
        const r = i.lchown ? "lchown" : "chown";
        const o = i.lchownSync ? "lchownSync" : "chownSync";
        const a =
            i.lchown &&
            !process.version.match(/v1[1-9]+\./) &&
            !process.version.match(/v10\.[6-9]/);
        const l = (t, e, s) => {
            try {
                return i[o](t, e, s);
            } catch (t) {
                if (t.code !== "ENOENT") throw t;
            }
        };
        const h = (t, e, s) => {
            try {
                return i.chownSync(t, e, s);
            } catch (t) {
                if (t.code !== "ENOENT") throw t;
            }
        };
        const c = a
            ? (t, e, s, n) => (r) => {
                  if (!r || r.code !== "EISDIR") n(r);
                  else i.chown(t, e, s, n);
              }
            : (t, e, s, i) => i;
        const u = a
            ? (t, e, s) => {
                  try {
                      return l(t, e, s);
                  } catch (i) {
                      if (i.code !== "EISDIR") throw i;
                      h(t, e, s);
                  }
              }
            : (t, e, s) => l(t, e, s);
        const f = process.version;
        let d = (t, e, s) => i.readdir(t, e, s);
        let p = (t, e) => i.readdirSync(t, e);
        if (/^v4\./.test(f)) d = (t, e, s) => i.readdir(t, s);
        const m = (t, e, s, n) => {
            i[r](
                t,
                e,
                s,
                c(t, e, s, (t) => {
                    n(t && t.code !== "ENOENT" ? t : null);
                })
            );
        };
        const y = (t, e, s, r, o) => {
            if (typeof e === "string")
                return i.lstat(n.resolve(t, e), (i, n) => {
                    if (i) return o(i.code !== "ENOENT" ? i : null);
                    n.name = e;
                    y(t, n, s, r, o);
                });
            if (e.isDirectory()) {
                b(n.resolve(t, e.name), s, r, (i) => {
                    if (i) return o(i);
                    const a = n.resolve(t, e.name);
                    m(a, s, r, o);
                });
            } else {
                const i = n.resolve(t, e.name);
                m(i, s, r, o);
            }
        };
        const b = (t, e, s, i) => {
            d(t, { withFileTypes: true }, (n, r) => {
                if (n) {
                    if (n.code === "ENOENT") return i();
                    else if (n.code !== "ENOTDIR" && n.code !== "ENOTSUP")
                        return i(n);
                }
                if (n || !r.length) return m(t, e, s, i);
                let o = r.length;
                let a = null;
                const l = (n) => {
                    if (a) return;
                    if (n) return i((a = n));
                    if (--o === 0) return m(t, e, s, i);
                };
                r.forEach((i) => y(t, i, e, s, l));
            });
        };
        const g = (t, e, s, r) => {
            if (typeof e === "string") {
                try {
                    const s = i.lstatSync(n.resolve(t, e));
                    s.name = e;
                    e = s;
                } catch (t) {
                    if (t.code === "ENOENT") return;
                    else throw t;
                }
            }
            if (e.isDirectory()) w(n.resolve(t, e.name), s, r);
            u(n.resolve(t, e.name), s, r);
        };
        const w = (t, e, s) => {
            let i;
            try {
                i = p(t, { withFileTypes: true });
            } catch (i) {
                if (i.code === "ENOENT") return;
                else if (i.code === "ENOTDIR" || i.code === "ENOTSUP")
                    return u(t, e, s);
                else throw i;
            }
            if (i && i.length) i.forEach((i) => g(t, i, e, s));
            return u(t, e, s);
        };
        t.exports = b;
        b.sync = w;
    },
    953: function (t, e, s) {
        const i = process.env.__FAKE_PLATFORM__ || process.platform;
        const n = i === "win32";
        const r = global.__FAKE_TESTING_FS__ || s(747);
        const {
            O_CREAT: o,
            O_TRUNC: a,
            O_WRONLY: l,
            UV_FS_O_FILEMAP: h = 0,
        } = r.constants;
        const c = n && !!h;
        const u = 512 * 1024;
        const f = h | a | o | l;
        t.exports = !c ? () => "w" : (t) => (t < u ? f : "w");
    },
    966: function (t, e, s) {
        "use strict";
        const i = s(891);
        const n = s(630);
        t.exports = (t, e, s) => {
            const o = i(t);
            if (!o.file) throw new TypeError("file is required");
            if (o.gzip)
                throw new TypeError("cannot append to compressed archives");
            if (!e || !Array.isArray(e) || !e.length)
                throw new TypeError("no files or directories specified");
            e = Array.from(e);
            r(o);
            return n(o, e, s);
        };
        const r = (t) => {
            const e = t.filter;
            if (!t.mtimeCache) t.mtimeCache = new Map();
            t.filter = e
                ? (s, i) => e(s, i) && !(t.mtimeCache.get(s) > i.mtime)
                : (e, s) => !(t.mtimeCache.get(e) > s.mtime);
        };
    },
    993: function (t, e, s) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
                ? function (t, e, s, i) {
                      if (i === undefined) i = s;
                      Object.defineProperty(t, i, {
                          enumerable: true,
                          get: function () {
                              return e[s];
                          },
                      });
                  }
                : function (t, e, s, i) {
                      if (i === undefined) i = s;
                      t[i] = e[s];
                  });
        var n =
            (this && this.__setModuleDefault) ||
            (Object.create
                ? function (t, e) {
                      Object.defineProperty(t, "default", {
                          enumerable: true,
                          value: e,
                      });
                  }
                : function (t, e) {
                      t["default"] = e;
                  });
        var r =
            (this && this.__importStar) ||
            function (t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (t != null)
                    for (var s in t)
                        if (s !== "default" && Object.hasOwnProperty.call(t, s))
                            i(e, t, s);
                n(e, t);
                return e;
            };
        var o =
            (this && this.__awaiter) ||
            function (t, e, s, i) {
                function adopt(t) {
                    return t instanceof s
                        ? t
                        : new s(function (e) {
                              e(t);
                          });
                }
                return new (s || (s = Promise))(function (s, n) {
                    function fulfilled(t) {
                        try {
                            step(i.next(t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function rejected(t) {
                        try {
                            step(i["throw"](t));
                        } catch (t) {
                            n(t);
                        }
                    }
                    function step(t) {
                        t.done
                            ? s(t.value)
                            : adopt(t.value).then(fulfilled, rejected);
                    }
                    step((i = i.apply(t, e || [])).next());
                });
            };
        Object.defineProperty(e, "__esModule", { value: true });
        e.HttpClient =
            e.isHttps =
            e.HttpClientResponse =
            e.HttpClientError =
            e.getProxyUrl =
            e.MediaTypes =
            e.Headers =
            e.HttpCodes =
                void 0;
        const a = r(s(605));
        const l = r(s(211));
        const h = r(s(95));
        const c = r(s(413));
        var u;
        (function (t) {
            t[(t["OK"] = 200)] = "OK";
            t[(t["MultipleChoices"] = 300)] = "MultipleChoices";
            t[(t["MovedPermanently"] = 301)] = "MovedPermanently";
            t[(t["ResourceMoved"] = 302)] = "ResourceMoved";
            t[(t["SeeOther"] = 303)] = "SeeOther";
            t[(t["NotModified"] = 304)] = "NotModified";
            t[(t["UseProxy"] = 305)] = "UseProxy";
            t[(t["SwitchProxy"] = 306)] = "SwitchProxy";
            t[(t["TemporaryRedirect"] = 307)] = "TemporaryRedirect";
            t[(t["PermanentRedirect"] = 308)] = "PermanentRedirect";
            t[(t["BadRequest"] = 400)] = "BadRequest";
            t[(t["Unauthorized"] = 401)] = "Unauthorized";
            t[(t["PaymentRequired"] = 402)] = "PaymentRequired";
            t[(t["Forbidden"] = 403)] = "Forbidden";
            t[(t["NotFound"] = 404)] = "NotFound";
            t[(t["MethodNotAllowed"] = 405)] = "MethodNotAllowed";
            t[(t["NotAcceptable"] = 406)] = "NotAcceptable";
            t[(t["ProxyAuthenticationRequired"] = 407)] =
                "ProxyAuthenticationRequired";
            t[(t["RequestTimeout"] = 408)] = "RequestTimeout";
            t[(t["Conflict"] = 409)] = "Conflict";
            t[(t["Gone"] = 410)] = "Gone";
            t[(t["TooManyRequests"] = 429)] = "TooManyRequests";
            t[(t["InternalServerError"] = 500)] = "InternalServerError";
            t[(t["NotImplemented"] = 501)] = "NotImplemented";
            t[(t["BadGateway"] = 502)] = "BadGateway";
            t[(t["ServiceUnavailable"] = 503)] = "ServiceUnavailable";
            t[(t["GatewayTimeout"] = 504)] = "GatewayTimeout";
        })((u = e.HttpCodes || (e.HttpCodes = {})));
        var f;
        (function (t) {
            t["Accept"] = "accept";
            t["ContentType"] = "content-type";
        })((f = e.Headers || (e.Headers = {})));
        var d;
        (function (t) {
            t["ApplicationJson"] = "application/json";
        })((d = e.MediaTypes || (e.MediaTypes = {})));
        function getProxyUrl(t) {
            const e = h.getProxyUrl(new URL(t));
            return e ? e.href : "";
        }
        e.getProxyUrl = getProxyUrl;
        const p = [
            u.MovedPermanently,
            u.ResourceMoved,
            u.SeeOther,
            u.TemporaryRedirect,
            u.PermanentRedirect,
        ];
        const m = [u.BadGateway, u.ServiceUnavailable, u.GatewayTimeout];
        const y = ["OPTIONS", "GET", "DELETE", "HEAD"];
        const b = 10;
        const g = 5;
        class HttpClientError extends Error {
            constructor(t, e) {
                super(t);
                this.name = "HttpClientError";
                this.statusCode = e;
                Object.setPrototypeOf(this, HttpClientError.prototype);
            }
        }
        e.HttpClientError = HttpClientError;
        class HttpClientResponse {
            constructor(t) {
                this.message = t;
            }
            readBody() {
                return o(this, void 0, void 0, function* () {
                    return new Promise((t) =>
                        o(this, void 0, void 0, function* () {
                            let e = Buffer.alloc(0);
                            this.message.on("data", (t) => {
                                e = Buffer.concat([e, t]);
                            });
                            this.message.on("end", () => {
                                t(e.toString());
                            });
                        })
                    );
                });
            }
        }
        e.HttpClientResponse = HttpClientResponse;
        function isHttps(t) {
            const e = new URL(t);
            return e.protocol === "https:";
        }
        e.isHttps = isHttps;
        class HttpClient {
            constructor(t, e, s) {
                this._ignoreSslError = false;
                this._allowRedirects = true;
                this._allowRedirectDowngrade = false;
                this._maxRedirects = 50;
                this._allowRetries = false;
                this._maxRetries = 1;
                this._keepAlive = false;
                this._disposed = false;
                this.userAgent = t;
                this.handlers = e || [];
                this.requestOptions = s;
                if (s) {
                    if (s.ignoreSslError != null) {
                        this._ignoreSslError = s.ignoreSslError;
                    }
                    this._socketTimeout = s.socketTimeout;
                    if (s.allowRedirects != null) {
                        this._allowRedirects = s.allowRedirects;
                    }
                    if (s.allowRedirectDowngrade != null) {
                        this._allowRedirectDowngrade = s.allowRedirectDowngrade;
                    }
                    if (s.maxRedirects != null) {
                        this._maxRedirects = Math.max(s.maxRedirects, 0);
                    }
                    if (s.keepAlive != null) {
                        this._keepAlive = s.keepAlive;
                    }
                    if (s.allowRetries != null) {
                        this._allowRetries = s.allowRetries;
                    }
                    if (s.maxRetries != null) {
                        this._maxRetries = s.maxRetries;
                    }
                }
            }
            options(t, e) {
                return o(this, void 0, void 0, function* () {
                    return this.request("OPTIONS", t, null, e || {});
                });
            }
            get(t, e) {
                return o(this, void 0, void 0, function* () {
                    return this.request("GET", t, null, e || {});
                });
            }
            del(t, e) {
                return o(this, void 0, void 0, function* () {
                    return this.request("DELETE", t, null, e || {});
                });
            }
            post(t, e, s) {
                return o(this, void 0, void 0, function* () {
                    return this.request("POST", t, e, s || {});
                });
            }
            patch(t, e, s) {
                return o(this, void 0, void 0, function* () {
                    return this.request("PATCH", t, e, s || {});
                });
            }
            put(t, e, s) {
                return o(this, void 0, void 0, function* () {
                    return this.request("PUT", t, e, s || {});
                });
            }
            head(t, e) {
                return o(this, void 0, void 0, function* () {
                    return this.request("HEAD", t, null, e || {});
                });
            }
            sendStream(t, e, s, i) {
                return o(this, void 0, void 0, function* () {
                    return this.request(t, e, s, i);
                });
            }
            getJson(t, e = {}) {
                return o(this, void 0, void 0, function* () {
                    e[f.Accept] = this._getExistingOrDefaultHeader(
                        e,
                        f.Accept,
                        d.ApplicationJson
                    );
                    const s = yield this.get(t, e);
                    return this._processResponse(s, this.requestOptions);
                });
            }
            postJson(t, e, s = {}) {
                return o(this, void 0, void 0, function* () {
                    const i = JSON.stringify(e, null, 2);
                    s[f.Accept] = this._getExistingOrDefaultHeader(
                        s,
                        f.Accept,
                        d.ApplicationJson
                    );
                    s[f.ContentType] = this._getExistingOrDefaultHeader(
                        s,
                        f.ContentType,
                        d.ApplicationJson
                    );
                    const n = yield this.post(t, i, s);
                    return this._processResponse(n, this.requestOptions);
                });
            }
            putJson(t, e, s = {}) {
                return o(this, void 0, void 0, function* () {
                    const i = JSON.stringify(e, null, 2);
                    s[f.Accept] = this._getExistingOrDefaultHeader(
                        s,
                        f.Accept,
                        d.ApplicationJson
                    );
                    s[f.ContentType] = this._getExistingOrDefaultHeader(
                        s,
                        f.ContentType,
                        d.ApplicationJson
                    );
                    const n = yield this.put(t, i, s);
                    return this._processResponse(n, this.requestOptions);
                });
            }
            patchJson(t, e, s = {}) {
                return o(this, void 0, void 0, function* () {
                    const i = JSON.stringify(e, null, 2);
                    s[f.Accept] = this._getExistingOrDefaultHeader(
                        s,
                        f.Accept,
                        d.ApplicationJson
                    );
                    s[f.ContentType] = this._getExistingOrDefaultHeader(
                        s,
                        f.ContentType,
                        d.ApplicationJson
                    );
                    const n = yield this.patch(t, i, s);
                    return this._processResponse(n, this.requestOptions);
                });
            }
            request(t, e, s, i) {
                return o(this, void 0, void 0, function* () {
                    if (this._disposed) {
                        throw new Error("Client has already been disposed.");
                    }
                    const n = new URL(e);
                    let r = this._prepareRequest(t, n, i);
                    const o =
                        this._allowRetries && y.includes(t)
                            ? this._maxRetries + 1
                            : 1;
                    let a = 0;
                    let l;
                    do {
                        l = yield this.requestRaw(r, s);
                        if (
                            l &&
                            l.message &&
                            l.message.statusCode === u.Unauthorized
                        ) {
                            let t;
                            for (const e of this.handlers) {
                                if (e.canHandleAuthentication(l)) {
                                    t = e;
                                    break;
                                }
                            }
                            if (t) {
                                return t.handleAuthentication(this, r, s);
                            } else {
                                return l;
                            }
                        }
                        let e = this._maxRedirects;
                        while (
                            l.message.statusCode &&
                            p.includes(l.message.statusCode) &&
                            this._allowRedirects &&
                            e > 0
                        ) {
                            const o = l.message.headers["location"];
                            if (!o) {
                                break;
                            }
                            const a = new URL(o);
                            if (
                                n.protocol === "https:" &&
                                n.protocol !== a.protocol &&
                                !this._allowRedirectDowngrade
                            ) {
                                throw new Error(
                                    "Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true."
                                );
                            }
                            yield l.readBody();
                            if (a.hostname !== n.hostname) {
                                for (const t in i) {
                                    if (t.toLowerCase() === "authorization") {
                                        delete i[t];
                                    }
                                }
                            }
                            r = this._prepareRequest(t, a, i);
                            l = yield this.requestRaw(r, s);
                            e--;
                        }
                        if (
                            !l.message.statusCode ||
                            !m.includes(l.message.statusCode)
                        ) {
                            return l;
                        }
                        a += 1;
                        if (a < o) {
                            yield l.readBody();
                            yield this._performExponentialBackoff(a);
                        }
                    } while (a < o);
                    return l;
                });
            }
            dispose() {
                if (this._agent) {
                    this._agent.destroy();
                }
                this._disposed = true;
            }
            requestRaw(t, e) {
                return o(this, void 0, void 0, function* () {
                    return new Promise((s, i) => {
                        function callbackForResult(t, e) {
                            if (t) {
                                i(t);
                            } else if (!e) {
                                i(new Error("Unknown error"));
                            } else {
                                s(e);
                            }
                        }
                        this.requestRawWithCallback(t, e, callbackForResult);
                    });
                });
            }
            requestRawWithCallback(t, e, s) {
                if (typeof e === "string") {
                    if (!t.options.headers) {
                        t.options.headers = {};
                    }
                    t.options.headers["Content-Length"] = Buffer.byteLength(
                        e,
                        "utf8"
                    );
                }
                let i = false;
                function handleResult(t, e) {
                    if (!i) {
                        i = true;
                        s(t, e);
                    }
                }
                const n = t.httpModule.request(t.options, (t) => {
                    const e = new HttpClientResponse(t);
                    handleResult(undefined, e);
                });
                let r;
                n.on("socket", (t) => {
                    r = t;
                });
                n.setTimeout(this._socketTimeout || 3 * 6e4, () => {
                    if (r) {
                        r.end();
                    }
                    handleResult(
                        new Error(`Request timeout: ${t.options.path}`)
                    );
                });
                n.on("error", function (t) {
                    handleResult(t);
                });
                if (e && typeof e === "string") {
                    n.write(e, "utf8");
                }
                if (e && typeof e !== "string") {
                    e.on("close", function () {
                        n.end();
                    });
                    e.pipe(n);
                } else {
                    n.end();
                }
            }
            getAgent(t) {
                const e = new URL(t);
                return this._getAgent(e);
            }
            _prepareRequest(t, e, s) {
                const i = {};
                i.parsedUrl = e;
                const n = i.parsedUrl.protocol === "https:";
                i.httpModule = n ? l : a;
                const r = n ? 443 : 80;
                i.options = {};
                i.options.host = i.parsedUrl.hostname;
                i.options.port = i.parsedUrl.port
                    ? parseInt(i.parsedUrl.port)
                    : r;
                i.options.path =
                    (i.parsedUrl.pathname || "") + (i.parsedUrl.search || "");
                i.options.method = t;
                i.options.headers = this._mergeHeaders(s);
                if (this.userAgent != null) {
                    i.options.headers["user-agent"] = this.userAgent;
                }
                i.options.agent = this._getAgent(i.parsedUrl);
                if (this.handlers) {
                    for (const t of this.handlers) {
                        t.prepareRequest(i.options);
                    }
                }
                return i;
            }
            _mergeHeaders(t) {
                if (this.requestOptions && this.requestOptions.headers) {
                    return Object.assign(
                        {},
                        w(this.requestOptions.headers),
                        w(t || {})
                    );
                }
                return w(t || {});
            }
            _getExistingOrDefaultHeader(t, e, s) {
                let i;
                if (this.requestOptions && this.requestOptions.headers) {
                    i = w(this.requestOptions.headers)[e];
                }
                return t[e] || i || s;
            }
            _getAgent(t) {
                let e;
                const s = h.getProxyUrl(t);
                const i = s && s.hostname;
                if (this._keepAlive && i) {
                    e = this._proxyAgent;
                }
                if (this._keepAlive && !i) {
                    e = this._agent;
                }
                if (e) {
                    return e;
                }
                const n = t.protocol === "https:";
                let r = 100;
                if (this.requestOptions) {
                    r =
                        this.requestOptions.maxSockets ||
                        a.globalAgent.maxSockets;
                }
                if (s && s.hostname) {
                    const t = {
                        maxSockets: r,
                        keepAlive: this._keepAlive,
                        proxy: Object.assign(
                            Object.assign(
                                {},
                                (s.username || s.password) && {
                                    proxyAuth: `${s.username}:${s.password}`,
                                }
                            ),
                            { host: s.hostname, port: s.port }
                        ),
                    };
                    let i;
                    const o = s.protocol === "https:";
                    if (n) {
                        i = o ? c.httpsOverHttps : c.httpsOverHttp;
                    } else {
                        i = o ? c.httpOverHttps : c.httpOverHttp;
                    }
                    e = i(t);
                    this._proxyAgent = e;
                }
                if (this._keepAlive && !e) {
                    const t = { keepAlive: this._keepAlive, maxSockets: r };
                    e = n ? new l.Agent(t) : new a.Agent(t);
                    this._agent = e;
                }
                if (!e) {
                    e = n ? l.globalAgent : a.globalAgent;
                }
                if (n && this._ignoreSslError) {
                    e.options = Object.assign(e.options || {}, {
                        rejectUnauthorized: false,
                    });
                }
                return e;
            }
            _performExponentialBackoff(t) {
                return o(this, void 0, void 0, function* () {
                    t = Math.min(b, t);
                    const e = g * Math.pow(2, t);
                    return new Promise((t) => setTimeout(() => t(), e));
                });
            }
            _processResponse(t, e) {
                return o(this, void 0, void 0, function* () {
                    return new Promise((s, i) =>
                        o(this, void 0, void 0, function* () {
                            const n = t.message.statusCode || 0;
                            const r = {
                                statusCode: n,
                                result: null,
                                headers: {},
                            };
                            if (n === u.NotFound) {
                                s(r);
                            }
                            function dateTimeDeserializer(t, e) {
                                if (typeof e === "string") {
                                    const t = new Date(e);
                                    if (!isNaN(t.valueOf())) {
                                        return t;
                                    }
                                }
                                return e;
                            }
                            let o;
                            let a;
                            try {
                                a = yield t.readBody();
                                if (a && a.length > 0) {
                                    if (e && e.deserializeDates) {
                                        o = JSON.parse(a, dateTimeDeserializer);
                                    } else {
                                        o = JSON.parse(a);
                                    }
                                    r.result = o;
                                }
                                r.headers = t.message.headers;
                            } catch (t) {}
                            if (n > 299) {
                                let t;
                                if (o && o.message) {
                                    t = o.message;
                                } else if (a && a.length > 0) {
                                    t = a;
                                } else {
                                    t = `Failed request: (${n})`;
                                }
                                const e = new HttpClientError(t, n);
                                e.result = r.result;
                                i(e);
                            } else {
                                s(r);
                            }
                        })
                    );
                });
            }
        }
        e.HttpClient = HttpClient;
        const w = (t) =>
            Object.keys(t).reduce(
                (e, s) => ((e[s.toLowerCase()] = t[s]), e),
                {}
            );
    },
});
