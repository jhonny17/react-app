const useCustomProperty = (customPropertyName: string) => {
  const customPropertyValue = getComputedStyle(document.documentElement).getPropertyValue(
    customPropertyName
  );
  return customPropertyValue ?? null;
};

export default useCustomProperty;
