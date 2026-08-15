import { getCustomers } from "./actions";
import { CustomersClient } from "./customers-client";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const { data, error } = await getCustomers();

  return <CustomersClient initialCustomers={data ?? []} loadError={error} />;
}
