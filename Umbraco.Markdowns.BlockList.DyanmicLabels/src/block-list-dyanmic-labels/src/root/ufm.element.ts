import { customElement, property } from "@umbraco-cms/backoffice/external/lit";
import { UMB_BLOCK_ENTRY_CONTEXT } from "@umbraco-cms/backoffice/block";
import { UmbUfmElementBase } from "@umbraco-cms/backoffice/ufm";

const elementName = "ufm-custom-value";
@customElement(elementName)
export class CustomUmbUfmLabelValueElement extends UmbUfmElementBase {
  @property()
  alias?: string;

  getValueFromExpression(dataSource: any, expression: string) {
    const keys = [];
    const regex = /([a-zA-Z_$][\w$]*)|\[(\d+)\]/g; // Matches keys and array indices

    let match;
    while ((match = regex.exec(expression)) !== null) {
      if (match[1]) {
        // It's a string key before a dot or standalone
        keys.push(match[1]);
      } else if (match[2]) {
        // It's an index inside square brackets
        keys.push(parseInt(match[2], 10));
      }
    }
    let target = dataSource;
    for (const key of keys) target = target[key];

    return target;
  }

	constructor() {
		super();
		this.consumeContext(UMB_BLOCK_ENTRY_CONTEXT, async (context) => {
			const content = await context.contentValues();
			this.observe(
				content,
				(value) => {
          if (value === undefined) return;
					const exprestionValue = this.getValueFromExpression(value, this.alias!);
					if (exprestionValue === undefined) {
						this.observe(context.contentElementTypeName, (value) => {
							this.value = this.localize.term(value!);
						});
					} else {
						this.value = exprestionValue;
					}
				},
				'observeValue',
			);
		});
	}
}
export { CustomUmbUfmLabelValueElement as element };
declare global {
  interface HTMLElementTagNameMap {
    [elementName]: CustomUmbUfmLabelValueElement;
  }
}
