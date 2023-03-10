import { BasicList, ListAction, ListContext, ListItem, Neovim, window } from 'coc.nvim';

export default class DemoList extends BasicList {
  public readonly name = 'demo_list';
  public readonly description = 'CocList for coc-github-comments';
  public readonly defaultAction = 'open';
  public actions: ListAction[] = [];

  constructor(nvim: Neovim) {
    super(nvim);

    this.addAction('open', (item: ListItem) => {
      window.showMessage(`${item.label}, ${item.data.name}`);
    });
  }

  public async loadItems(context: ListContext): Promise<ListItem[]> {
    return [
      {
        label: 'coc-github-comments list item 1',
        data: { name: 'list item 1' },
      },
      {
        label: 'coc-github-comments list item 2',
        data: { name: 'list item 2' },
      },
    ];
  }
}
