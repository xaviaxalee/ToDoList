export default interface ITaskFooter {
  id: string;
  status: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => void;
}
