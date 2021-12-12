import co from './tool.js';
var Message = function (message, options) {
	this.initOptions(message, options);
};

Message.prototype.initOptions = function (message, options) {
	this.message = message;
	options = options || {};
	this.options = options;
	this.type = options.type;
	this.html = options.html;
	if (co.isEmpty(options.duration)) {
		this.duration = 3000;
	} else {
		this.duration = parseInt(options.duration);
	}
	this.init();
};

Message.prototype.init = function () {
	this.initView();
};

Message.prototype.initView = function () {
	let message = document.createElement('div');

	let className = 'tm-message ';

	let type = this.type.toLowerCase();
	if (type == 'info') {
		className += 'tm-message-info ';
	} else if (type == 'success') {
		className += 'tm-message-success ';
	} else if (type == 'warn' || type == 'warning') {
		className += 'tm-message-warn ';
	} else if (type == 'error') {
		className += 'tm-message-error ';
	} else {
		className += ' ';
	}
	message.setAttribute("class", className);

	let icon = document.createElement('span');
	icon.setAttribute("class", "tm-message-icon");
	if (co.isTrue(this.options['show-icon'])) {
		message.appendChild(icon);
	}

	let content = document.createElement('span');
	content.setAttribute("class", "tm-message-content");
	message.appendChild(content);

	if (this.message != null) {
		if (co.isObject(this.message)) {
			content.appendChild(this.message);
		} else {
			content.innerHTML = '' + this.message;
		}
	}
	if (this.html != null) {
		if (co.isObject(this.html)) {
			content.appendChild(this.html);
		} else {
			content.innerHTML = '' + this.html;
		}
	}
	let that = this;
	let close = document.createElement('a');
	close.setAttribute("class", "tm-message-close");
	close.addEventListener("click", function (e) {
		that.close();
	});
	if (co.isTrue(this.options['show-close'])) {
		message.appendChild(close);
	}

	this.message = message;
	this.append(this.message);
};

Message.prototype.show = function () {
	setTimeout(() => {
		co.addClass(this.message, 'tm-show');
		if (this.duration > 0) {
			setTimeout(() => {
				this.close();
			}, this.duration)
		}
	}, 10);
};
Message.prototype.close = function () {
	this.destroy();

};
Message.prototype.destroy = function () {
	co.removeClass(this.message, 'tm-show');
	setTimeout(() => {
		if (this.message.parentElement) {
			this.message.parentElement.removeChild(this.message);
		}
		this.options.onDestroy && this.options.onDestroy();
	}, 300)

};

Message.prototype.append = function (message) {

	if (window.COOS_MESSAGE_BOX == null) {
		window.COOS_MESSAGE_BOX = document.createElement('div');
		window.COOS_MESSAGE_BOX.setAttribute("class", "tm-message-box");
		document.body.appendChild(window.COOS_MESSAGE_BOX);
	}
	window.COOS_MESSAGE_BOX.style['z-index'] = co.getNextZIndex();
	window.COOS_MESSAGE_BOX.appendChild(message);
};

export default Message;