import style from '@/app/(beforeLogin)/_components/main.module.css';

type Props = { children: React.ReactNode; modal: React.ReactNode };
export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {children}
      {modal}
    </div>
  );
}
