import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useTranslationContext } from "contexts";
import { useState, useEffect } from "react";

const AdditionalInfo = (props) => {
  const { language, setLanguage } = useTranslationContext();
  const {
    diet,
    setDiet,
    dietSpecifications,
    setDietSpecification,
    shirtSize,
    setShirtSize,
    identifyAsGroup,
    setIdentifyAsGroup,
    race,
    raceSpecification,
    setRaceSpecification,
    setRace,
    maxStudies,
    setMaxStudies,
    mainStudyAreaSpecification,
    setMainStudyAreaSpecification,
    mainStudyArea,
    setMainStudyArea,
  } = props;

  const renderGridItem = (child) => (
    <Grid item xl={12} sm={12} xs={12}>
      {child}
    </Grid>
  );

  const renderFormControl = (
    label,
    value,
    onChange,
    items,
    showSpecify = false,
    onSpecifyChange = null,
    specifyValue = null
  ) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          label={label}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        {showSpecify && (
          <TextField
            className="other-input"
            value={specifyValue ? specifyValue : ""}
            onChange={(e) => {
              onSpecifyChange(e.target.value);
            }}
            label={language?.getString(
              "register.additionalInformation.specify"
            )}
            variant="outlined"
          />
        )}
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
            language?.getString(
              "register.additionalInformation.dietRestrictions"
            ),
            diet,
            (e) => {
              setDiet(e);
            },
            [
              {
                value: "Vegetarian",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.vegetarian"
                ),
              },
              {
                value: "Vegan",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.vegan"
                ),
              },
              {
                value: "Celiac Disease",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.celiacDisease"
                ),
              },
              {
                value: "Allergies",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.allergies"
                ),
              },
              {
                value: "Kosher",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.kosher"
                ),
              },
              {
                value: "Halal",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.halal"
                ),
              },
              {
                value: "Other",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.other"
                ),
              },
              {
                value: "None",
                label: language?.getString(
                  "register.additionalInformation.dietRestrictionsSelect.none"
                ),
              },
            ],
            diet == "Other" || diet == "Allergies",
            (e) => {
              setDietSpecification(e);
            },
            dietSpecifications
          )
        )}
      </Grid>

      <Grid {...gridContainerProps}>
        {renderGridItem(
          renderFormControl(
            "Talla de camisa",
            shirtSize,
            (e) => {
              setShirtSize(e);
            },

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
            language?.getString(
              "register.additionalInformation.identifyAsGroup"
            ),
            identifyAsGroup,
            (e) => {
              setIdentifyAsGroup(e);
            },

            [
              {
                value: "Sí",
                label: language?.getString(
                  "register.additionalInformation.identifyAsGroupSelect.yes"
                ),
              },
              {
                value: "No",
                label: language?.getString(
                  "register.additionalInformation.identifyAsGroupSelect.no"
                ),
              },
              {
                value: "No se",
                label: language?.getString(
                  "register.additionalInformation.identifyAsGroupSelect.dontKnow"
                ),
              },
              {
                value: "Prefiero no responder",
                label: language?.getString(
                  "register.additionalInformation.identifyAsGroupSelect.notAnswer"
                ),
              },
            ]
          )
        )}
      </Grid>

      <Grid {...gridContainerProps}>
        {renderGridItem(
          renderFormControl(
            language?.getString("register.additionalInformation.race"),
            race,
            (e) => {
              setRace(e);
            },
            [
              {
                value: "Asian Indian",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.asianIndian"
                ),
              },
              {
                value: "Black or African",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.blackAfrican"
                ),
              },
              {
                value: "Chinese",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.chinese"
                ),
              },
              {
                value: "Filipino",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.philipine"
                ),
              },
              {
                value: "Guamanian or Chamorro",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.guamanian"
                ),
              },
              {
                value: "Hispanic / Latino / Spanish Origin",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.hispanic"
                ),
              },
              {
                value: "Japanese",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.japanese"
                ),
              },
              {
                value: "Korean",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.korean"
                ),
              },
              {
                value: "Middle Eastern",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.middleEastern"
                ),
              },
              {
                value: "Native American or Alaskan Native",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.nativeAmerican"
                ),
              },
              {
                value: "Native Hawaiian",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.nativeHawaiian"
                ),
              },
              {
                value: "Samoan",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.samoan"
                ),
              },
              {
                value: "Vietnamese",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.vietnamese"
                ),
              },
              {
                value: "White",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.white"
                ),
              },
              {
                value: "Other Asian (Thai, Cambodian, etc)",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.otherAsian"
                ),
              },
              {
                value: "Other Pacific Islander",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.otherPacificIslander"
                ),
              },
              {
                value: "Other (Please Specify)",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.other"
                ),
              },
              {
                value: "Prefer Not to Answer",
                label: language?.getString(
                  "register.additionalInformation.raceSelect.notAnswer"
                ),
              },
            ],
            race == "Other (Please Specify)",
            (e) => {
              setRaceSpecification(e);
            },
            raceSpecification
          )
        )}

        {renderGridItem(
          renderFormControl(
            language?.getString("register.additionalInformation.maxStudies"),
            maxStudies,
            (e) => {
              setMaxStudies(e);
            },
            [
              {
                value: "Preparatoria",
                label: language?.getString(
                  "register.additionalInformation.maxStudiesSelect.highSchool"
                ),
              },
              {
                value: "Universidad",
                label: language?.getString(
                  "register.additionalInformation.maxStudiesSelect.university"
                ),
              },
            ]
          )
        )}

        {renderGridItem(
          renderFormControl(
            language?.getString("register.additionalInformation.mainStudyArea"),
            mainStudyArea,
            (e) => {
              setMainStudyArea(e);
            },

            [
              {
                value:
                  "Computer science, computer engineering, or software engineering",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.computerScience"
                ),
              },
              {
                value:
                  "Another engineering discipline (such as civil, electrical, mechanical, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.engineering"
                ),
              },
              {
                value:
                  "Information systems, information technology, or system administration",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.informationSystems"
                ),
              },
              {
                value:
                  "A natural science (such as biology, chemistry, physics, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.naturalScience"
                ),
              },
              {
                value: "Mathematics or statistics",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.math"
                ),
              },
              {
                value: "Web development or web design",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.webDev"
                ),
              },
              {
                value:
                  "Business discipline (such as accounting, finance, marketing, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.business"
                ),
              },
              {
                value:
                  "Humanities discipline (such as literature, history, philosophy, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.humanities"
                ),
              },
              {
                value:
                  "Social science (such as anthropology, psychology, political science, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.socialScience"
                ),
              },
              {
                value:
                  "Fine arts or performing arts (such as graphic design, music, studio art, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.fineArts"
                ),
              },
              {
                value:
                  "Health science (such as nursing, pharmacy, radiology, etc.)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.health"
                ),
              },
              {
                value: "Other (please specify)",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.other"
                ),
              },
              {
                value: "Undecided / No Declared Major",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.undecided"
                ),
              },
              {
                value:
                  "My school does not offer majors / primary areas of study",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.doesntOffer"
                ),
              },
              {
                value: "Prefer not to answer",
                label: language?.getString(
                  "register.additionalInformation.mainStudyAreaSelect.notAnswer"
                ),
              },
            ],
            mainStudyArea == "Other (please specify)",
            (e) => {
              setMainStudyAreaSpecification(e);
            },
            mainStudyAreaSpecification
          )
        )}
      </Grid>
    </>
  );
};
export default AdditionalInfo;
