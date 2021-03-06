'use strict';

var React = require('react');
var Utils = require('./utils/utils');

class OverlaySeries extends React.Component {

	getChildContext() {
		var overlay = this.context.overlays.filter((each) => each.id === this.props.id)[0];
		return {
			yAccessor: overlay.yAccessor,
			stroke: overlay.stroke
		};
	}
	render() {
		var children = React.Children.map(this.props.children, (child) => {
			var newChild = Utils.isReactVersion13()
				? React.withContext(this.getChildContext(), () => {
					return React.createElement(child.type, Utils.mergeObject({ key: child.key, ref: child.ref}, child.props));
				})
				: React.cloneElement(child);
			return newChild;
		});
		return (
			<g>{children}</g>
		);
	}
};

OverlaySeries.propTypes = {
	type: React.PropTypes.oneOf(['sma', 'ema']),
	options: React.PropTypes.object.isRequired,
	id: React.PropTypes.number.isRequired,
	stroke: React.PropTypes.string
};
OverlaySeries.defaultProps = {
	namespace: "ReStock.OverlaySeries"
};
OverlaySeries.contextTypes = {
	overlays: React.PropTypes.array.isRequired,
};
OverlaySeries.childContextTypes = {
	yAccessor: React.PropTypes.func.isRequired,
	stroke: React.PropTypes.string.isRequired,
};
module.exports = OverlaySeries;
