import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { Option } from './Option';
import { OptionGroup } from './OptionGroup';
import { TextObject } from './TextObject';

export interface IMultiStaticSelectElement extends IActionableElement {
  type: ElementType.MULTI_STATIC_SELECT;
  placeholder: TextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
  initialValue?: Option['value'];
  maxSelectItems?: number;
}
