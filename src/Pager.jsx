const React = require('react');

class Pager extends React.Component {
  render() {
    const props = this.props;
    const prefixCls = `${props.rootPrefixCls}-item`;
    let cls = `${prefixCls} ${prefixCls}-${props.page}`;
    let href = '';

    if (this.props.relativePath) {
      href = props.relativePath;
    }

    if (props.active) {
      cls = `${cls} ${prefixCls}-active`;
    }

    if (props.className) {
      cls = `${cls} ${props.className}`;
    }

    return (
      <li title={props.page} className={cls}>
        <a href={`${href}/${props.page}`}>
          <div>{props.page}</div>
        </a>
      </li>
    );
  }
}

Pager.propTypes = {
  page: React.PropTypes.number,
  active: React.PropTypes.bool,
  last: React.PropTypes.bool,
  locale: React.PropTypes.object,
  className: React.PropTypes.string,
  relativePath: React.PropTypes.string,
};

module.exports = Pager;
