import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

const AdditionalInfo = (props) => {
  const { diet, setDiet } = props;

  const renderGridItem = (child) => (
    <Grid item xl={12} sm={12}>
      {child}
    </Grid>
  );

  const renderFormControl = (label, value, onChange, items) => {
    const [stateValue, set] = useState("");

    useEffect(() => {
      set(value);
    }, []);

    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          value={stateValue}
          onChange={(event) => {
            set(event.target.value);
            onChange(event.target.value);
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const gridContainerProps = {
    container: true,
    justifyContent: "center",
    alignItems: "center",
    sx: { "& .MuiGrid-item": { display: "flex", justifyContent: "center" } },
  };

  return (
    <>
      <Grid {...gridContainerProps}>
        {renderGridItem(
          renderFormControl(
            "Restricciones Dietarias",
            diet,
            (e) => {
              setDiet(e);
            },
            [
              { value: "Vegetarian", label: "Vegetarian" },
              { value: "Vegan", label: "Vegan" },
              { value: "Celiac Disease", label: "Celiac Disease" },
              { value: "Allergies", label: "Allergies" },
              { value: "Kosher", label: "Kosher" },
              { value: "Halal", label: "Halal" },
              { value: "None", label: "None" },
            ]
          )
        )}
      </Grid>

      <Grid {...gridContainerProps}>
        {renderGridItem(
          renderFormControl(
            "Talla de camisa",
            "",
            (e) => {},

            [
              { value: "XS", label: "XS" },
              { value: "S", label: "S" },
              { value: "M", label: "M" },
              { value: "L", label: "L" },
              { value: "XL", label: "XL" },
              { value: "XXL", label: "XXL" },
            ]
          )
        )}

        {renderGridItem(
          renderFormControl(
            "¿Te identificas con algún grupo no representado en la industria?",
            "",
            (e) => {},

            [
              { value: "Sí", label: "Sí" },
              { value: "No", label: "No" },
              { value: "No se", label: "No se" },
              {
                value: "Prefiero no responder",
                label: "Prefiero no responder",
              },
            ]
          )
        )}
      </Grid>

      <Grid {...gridContainerProps}>
        {renderGridItem(
          renderFormControl(
            "¿Cuál de los siguientes Razas/ Etnias te representa mejor?",
            "",
            (e) => {},
            [
              { value: "Asian Indian", label: "Asian Indian" },
              { value: "Black or African", label: "Black or African" },
              { value: "Chinese", label: "Chinese" },
              { value: "Filipino", label: "Filipino" },
              {
                value: "Guamanian or Chamorro",
                label: "Guamanian or Chamorro",
              },
              {
                value: "Hispanic / Latino / Spanish Origin",
                label: "Hispanic / Latino / Spanish Origin",
              },
              { value: "Japanese", label: "Japanese" },
              { value: "Korean", label: "Korean" },
              { value: "Middle Eastern", label: "Middle Eastern" },
              {
                value: "Native American or Alaskan Native",
                label: "Native American or Alaskan Native",
              },
              { value: "Native Hawaiian", label: "Native Hawaiian" },
              { value: "Samoan", label: "Samoan" },
              { value: "Vietnamese", label: "Vietnamese" },
              { value: "White", label: "White" },
              {
                value: "Other Asian (Thai, Cambodian, etc)",
                label: "Other Asian (Thai, Cambodian, etc)",
              },
              {
                value: "Other Pacific Islander",
                label: "Other Pacific Islander",
              },
              {
                value: "Other (Please Specify)",
                label: "Other (Please Specify)",
              },
              { value: "Prefer Not to Answer", label: "Prefer Not to Answer" },
            ]
          )
        )}

        {renderGridItem(
          renderFormControl(
            "¿Cuál es el grado maximo de estudios que has completado?",
            "",
            (e) => {},
            [
              { value: "Preparatoria", label: "Preparatoria" },
              { value: "Universidad", label: "Universidad" },
            ]
          )
        )}

        {renderGridItem(
          renderFormControl(
            "¿Cuál fue tu principal área de estudios?",
            "",
            (e) => {},

            [
              {
                value:
                  "Computer science, computer engineering, or software engineering",
                label:
                  "Computer science, computer engineering, or software engineering",
              },
              {
                value:
                  "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
                label:
                  "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
              },
              {
                value:
                  "Information systems, information technology, or system administration",
                label:
                  "Information systems, information technology, or system administration",
              },
              {
                value:
                  "A natural science (such as biology, chemistry, physics, etc.)",
                label:
                  "A natural science (such as biology, chemistry, physics, etc.)",
              },
              {
                value: "Mathematics or statistics",
                label: "Mathematics or statistics",
              },
              {
                value: "Web development or web design",
                label: "Web development or web design",
              },
              {
                value:
                  "Business discipline (such as accounting, finance, marketing, etc.)",
                label:
                  "Business discipline (such as accounting, finance, marketing, etc.)",
              },
              {
                value:
                  "Humanities discipline (such as literature, history, philosophy, etc.)",
                label:
                  "Humanities discipline (such as literature, history, philosophy, etc.)",
              },
              {
                value:
                  "Social science (such as anthropology, psychology, political science, etc.)",
                label:
                  "Social science (such as anthropology, psychology, political science, etc.)",
              },
              {
                value:
                  "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
                label:
                  "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
              },
              {
                value:
                  "Health science (such as nursing, pharmacy, radiology, etc.)",
                label:
                  "Health science (such as nursing, pharmacy, radiology, etc.)",
              },
              {
                value: "Other (please specify)",
                label: "Other (please specify)",
              },
              {
                value: "Undecided / No Declared Major",
                label: "Undecided / No Declared Major",
              },
              {
                value:
                  "My school does not offer majors / primary areas of study",
                label:
                  "My school does not offer majors / primary areas of study",
              },
              { value: "Prefer not to answer", label: "Prefer not to answer" },
            ]
          )
        )}

        {renderGridItem(
          renderFormControl(
            "¿Te consideras alguno de los siguientes?",
            "",
            (e) => {},

            [
              {
                value: "Heterosexual or straight",
                label: "Heterosexual or straight",
              },
              { value: "Gay or lesbian", label: "Gay or lesbian" },
              { value: "Bisexual", label: "Bisexual" },
              {
                value: "Different identity",
                label: "Different identity ________",
              },
              { value: "Prefer Not to Answer", label: "Prefer Not to Answer" },
            ]
          )
        )}
      </Grid>
    </>
  );
};
export default AdditionalInfo;
