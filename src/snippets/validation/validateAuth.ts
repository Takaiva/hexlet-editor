export function validateRequest(request: any): boolean {
  return !!request.user;
}
