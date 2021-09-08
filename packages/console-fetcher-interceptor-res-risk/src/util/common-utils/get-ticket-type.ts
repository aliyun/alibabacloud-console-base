export default function GetTicketType(): string {
  const forService = /4service/.test(location.hostname);

  return forService ? 'mini' : '';
}