export const filterLayoutProps = (props: any) => {
  const { ...otherProps } = props;
  return { otherProps };
};
