import templates from 'scripts/templates';
import _ from 'lodash';

const TEMPLATE_LINK = 'templates/list.tpl.html';

class List {

  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  render(collection) {
    this._viewModel = collection;
    templates.get(TEMPLATE_LINK).then((template) => {
      this.parentElement.innerHTML = _.template(template)({
        keys: _.keys(this._viewModel)
      });
    });
  }

  setChangeListener(handler) {
    this.handler = handler;
    return this;
  }
}

export default List;