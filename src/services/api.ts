import service from "./request";

export const getAreaData = (): Promise<any> => {
  return service.get('');
};
