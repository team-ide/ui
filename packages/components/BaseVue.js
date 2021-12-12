
import co from "../base/index.js";

export default {
    classObject() {
        let option = this;
        let res = {};
        if (co.isNotEmpty(option.color)) {
            let color = co.addColor(option.color);
            res["color-" + color] = true;
        }
        if (co.isNotEmpty(option.bg)) {
            let bg = co.addColor(option.bg);
            res["bg-" + bg] = true;
        }
        if (co.isNotEmpty(option.rd)) {
            res["rd-" + option.rd] = true;
        }
        if (co.isNotEmpty(option.pd)) {
            res["pd-" + option.pd] = true;
        }
        if (co.isNotEmpty(option.mg)) {
            res["mg-" + option.mg] = true;
        }
        if (co.isNotEmpty(option.ft)) {
            res["ft-" + option.ft] = true;
        }
        if (co.isNotEmpty(option.float)) {
            res["float-" + option.float] = true;
        }
        if (co.isNotEmpty(option.display)) {
            res["display-" + option.display] = true;
        }
        if (co.isNotEmpty(option.col)) {
            res["col-" + option.col] = true;
        }
        if (co.isNotEmpty(option.bd)) {
            res["bd-" + option.bd] = true;
        }
        if (co.isNotEmpty(option.bdcolor)) {
            res["bd-" + option.bdcolor] = true;
        }
        if (
            co.isNotEmpty(option.disabled) &&
            (co.isTrue(option.disabled) || option.disabled == "disabled")
        ) {
            res["tm-disabled"] = true;
        }
        if (this.isTeamideBtn) {
            if (co.isNotEmpty(this.size)) {
                res["tm-btn-" + this.size] = true;
            }
            if (co.isTrue(this.circle) || this.circle == "circle") {
                res["tm-btn-circle"] = true;
            }
        }
        if (this.isTeamideNav) {
            if (co.isNotEmpty(this.size)) {
                res["tm-nav-" + this.size] = true;
            }
            if (co.isTrue(this.circle) || this.circle == "circle") {
                res["tm-nav-circle"] = true;
            }
        }
        if (co.isTrue(this.vertical) || this.vertical == "vertical") {
            res["tm-vertical"] = true;
        }
        if (co.isTrue(this.horizontal) || this.horizontal == "horizontal") {
            res["tm-horizontal"] = true;
        }

        return res;
    }
}