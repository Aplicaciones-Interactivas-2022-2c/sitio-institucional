import { Flex, FormControl, FormHelperText, FormLabel } from "@chakra-ui/react";
import * as React from "react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

function DropdownFrecuencia() {
  
  const frecuencias = [
    "Unica",
    "Diaria",
    "Semanal",
    "Mensual"
];

  return (
      <FormControl w="60">
        <FormLabel>frecuencias</FormLabel>
        <AutoComplete openOnFocus>
          <AutoCompleteInput variant="filled" />
          <AutoCompleteList>
            {frecuencias.map((frecuencia, cid) => (
              <AutoCompleteItem
                key={`option-${cid}`}
                value={frecuencia}
                textTransform="capitalize"
              >
                {frecuencia}
              </AutoCompleteItem>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
  );
}

export default DropdownFrecuencia;