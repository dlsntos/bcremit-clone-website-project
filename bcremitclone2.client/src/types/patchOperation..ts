export interface PatchOperation {
  operationType: number;
  path: string;
  op: string;
  from?: string;
  value?: string;
}
