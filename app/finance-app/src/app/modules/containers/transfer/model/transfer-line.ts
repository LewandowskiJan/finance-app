export interface TransferLine {
  _id: string;
  value: string;
  currency: string;
  transferId: string;
  categoryId: string;
  groupId: string;
  productId?: string;
  projectId?: string;
  targetId?: string;
  eventId?: string;
}
