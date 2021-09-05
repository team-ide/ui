import tool from './tool.js';
import style from './style/index.js';
import Message from './Message.js';
import MessageBox from './MessageBox.js';
import Dialog from './Dialog.js';

var co = tool;

co.style = style;

co.addColor = function (color) {
    if (co.isNotEmpty(color)) {
        if (color.startsWith("#")) {
            style.addColor(color);
            color = color.substring(1);
        }
    }
    return color;
}

co.info = function (arg1, options) {
    options = options || {};
    options.type = 'info';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};
co.success = function (arg1, options) {
    options = options || {};
    options.type = 'success';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

co.warn = function (arg1, options) {
    options = options || {};
    options.type = 'warn';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

co.error = function (arg1, options) {
    options = options || {};
    options.type = 'error';
    if (options['show-icon'] == null) {
        options['show-icon'] = true;
    }
    if (options['show-close'] == null) {
        options['show-close'] = true;
    }
    let confirm = null;
    if (options.onDestroy == null) {
        options.onDestroy = function () {
            confirm && confirm();
        }
    }
    var message = new Message(arg1, options);
    message.show();
    return new Promise((resolve, reject) => {
        confirm = resolve;
    });
};

co.alert = function (arg1) {
    let confirm,
        cancel,
        options = {};

    for (var i = 1; i < arguments.length; i++) {
        var argument = arguments[i];
        if (co.isFunction(argument)) {
            if (confirm == null) {
                confirm = argument;
            } else {
                cancel = argument;
            }
        } else if (co.isObject(argument)) {
            options = argument;
        }
    }
    options.type = 'alert';
    options.onConfirm = function () {
        if (co.isFunction(confirm)) {
            return confirm();
        }
    };
    options.onCancel = function () {
        if (co.isFunction(cancel)) {
            return cancel();
        }
    };

    var messageBox = new MessageBox(arg1, options);
    messageBox.show();
    return new Promise((resolve, reject) => {
        if (!co.isFunction(confirm)) {
            confirm = resolve;
        }
        if (!co.isFunction(cancel)) {
            cancel = reject;
        }
    });
};

co.confirm = function (arg1) {
    let confirm,
        cancel,
        options = {};

    for (var i = 1; i < arguments.length; i++) {
        var argument = arguments[i];
        if (co.isFunction(argument)) {
            if (confirm == null) {
                confirm = argument;
            } else {
                cancel = argument;
            }
        } else if (co.isObject(argument)) {
            options = argument;
        }
    }
    options.type = 'confirm';
    options.onConfirm = function () {
        if (co.isFunction(confirm)) {
            return confirm();
        }
    };
    options.onCancel = function () {
        if (co.isFunction(cancel)) {
            return cancel();
        }
    };

    var messageBox = new MessageBox(arg1, options);
    messageBox.show();
    return new Promise((resolve, reject) => {
        if (!co.isFunction(confirm)) {
            confirm = resolve;
        }
        if (!co.isFunction(cancel)) {
            cancel = reject;
        }
    });
};

co.dialog = function (options) {
    return new Dialog(options);
};

export default co;