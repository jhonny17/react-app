const useCustomProperty = (customPropertyName: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(customPropertyName);

export default useCustomProperty;
