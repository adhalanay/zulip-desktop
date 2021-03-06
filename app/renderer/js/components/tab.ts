import WebView from './webview';
import BaseComponent from './base';

// TODO: TypeScript - Type annotate props
interface TabProps {
	[key: string]: any;
}

export default class Tab extends BaseComponent {
	props: TabProps;
	webview: WebView;
	$el: Element;
	constructor(props: TabProps) {
		super();

		this.props = props;
		this.webview = this.props.webview;
	}

	registerListeners(): void {
		this.$el.addEventListener('click', this.props.onClick);
		this.$el.addEventListener('mouseover', this.props.onHover);
		this.$el.addEventListener('mouseout', this.props.onHoverOut);
	}

	showNetworkError(): void {
		this.webview.forceLoad();
	}

	activate(): void {
		this.$el.classList.add('active');
		this.webview.load();
	}

	deactivate(): void {
		this.$el.classList.remove('active');
		this.webview.hide();
	}

	destroy(): void {
		this.$el.parentNode.removeChild(this.$el);
		this.webview.$el.parentNode.removeChild(this.webview.$el);
	}
}
