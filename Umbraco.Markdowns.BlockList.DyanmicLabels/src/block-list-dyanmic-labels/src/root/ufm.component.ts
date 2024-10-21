import {
  UmbUfmComponentBase,
  type UfmToken,
} from "@umbraco-cms/backoffice/ufm";

import './ufm.element';

export class MyCustomUfmComponent extends UmbUfmComponentBase {
  render(token: UfmToken) {
		if (!token.text) return;

    const attributes = super.getAttributes(token.text);
    return `<ufm-custom-value  ${attributes}></ufm-custom-value>`;
  }
}

export { MyCustomUfmComponent as api };
