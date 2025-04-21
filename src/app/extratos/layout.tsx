interface ExtractLayoutProps {
  children: React.ReactNode;
}

export default function ExtractLayout({ children }: ExtractLayoutProps) {
  return (
    <>
      ExtractLayout
      {children}
    </>
  );
}
