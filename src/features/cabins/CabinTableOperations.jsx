import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            label: "all",
          },
          {
            value: "no-discount",
            label: "No discount",
          },
          {
            value: "with-discount",
            label: "With discount",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
