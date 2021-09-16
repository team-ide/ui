import teamide from './base/index.js';
import Color from './components/Color.vue';
import Btn from './components/Btn.vue';
import Link from './components/Link.vue';
import Col from './components/Col.vue';
import Row from './components/Row.vue';
import Layout from './components/Layout.vue';
import LayoutBar from './components/LayoutBar.vue';
import Panel from './components/Panel.vue';
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Nav from './components/nav/Nav.vue';
import NavSub from './components/nav/NavSub.vue';
import NavItem from './components/nav/NavItem.vue';

import Frame from './components/frame/Frame.vue';
import FrameMain from './components/frame/FrameMain.vue';
import FrameHeader from './components/frame/FrameHeader.vue';
import FrameFooter from './components/frame/FrameFooter.vue';
import FramePart from './components/frame/FramePart.vue';

import './style/font.css';
import './style/base.css';
import './style/make.css';
import './style/nav.css';
import './style/frame.css';
import './style/layout.css';

const components = [Color, Btn, Link, Col, Row, Layout, LayoutBar, Panel, Header, Body, Nav, NavItem, NavSub, Frame, FrameMain, FrameHeader, FrameFooter, FramePart];

const install = function (Vue, options) {
  components.forEach(component => {
    if (component.name) {
      Vue.component(component.name, component);
    }
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

teamide.install = install;

if (typeof window !== 'undefined') {
  window.teamide = teamide;
  teamide.style.init();
}

export default teamide;