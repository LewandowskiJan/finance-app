export interface HttpQuerySearch {
  [key: string]: {
    [key: string]: any;
    $and?: { [key: string]: string | number };
    $or?: { [key: string]: string | number };
    $in?: { [key: string]: string | number | string[] };
  };
}
