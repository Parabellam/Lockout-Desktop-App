import PropTypes from "prop-types";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";

export default function AutocompleteOne({
  data,
  placeholder,
  label,
  elegirIdioma,
}) {
  return (
    <Autocomplete
      variant="underlined"
      defaultItems={data}
      label={label}
      placeholder={placeholder}
      labelPlacement="inside"
      className="max-w-48 h-36 text-black"
      onSelectionChange={elegirIdioma}
    >
      {(item) => (
        <AutocompleteItem key={item.id} textValue={item.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={item.name}
              className="flex-shrink-0"
              size="sm"
              src={item.img}
            />
            <div className="flex flex-col">
              <span className="text-small text-black">{item.name}</span>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}

AutocompleteOne.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  elegirIdioma: PropTypes.func,
};
