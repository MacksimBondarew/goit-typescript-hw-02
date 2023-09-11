/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
};

class Component<T extends ComponentProps> {
  title: string;
  constructor (public props: T) {
    this.title = props.title;
  }
}

class Page extends Component<ComponentProps> {
  pageInfo () {
    console.log(this.title);
  }
}

const pageProps: ComponentProps = { title: "Заголовок сторінки" };
const page = new Page(pageProps);
page.pageInfo();

export {};