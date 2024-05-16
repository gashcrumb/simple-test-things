import {
  ApiHolder,
  createPlugin,
  createComponentExtension,
} from "@backstage/core-plugin-api";
import { scaffolderPlugin } from "@backstage/plugin-scaffolder";

import { Entity } from "@backstage/catalog-model";

import {
  FieldExtensionComponent,
  createScaffolderFieldExtension,
} from "@backstage/plugin-scaffolder-react";
import {
  SimpleTestField,
  simpleDoNothingValidation,
} from "./components/SimpleTestField";

export const simpleTestThingsPlugin = createPlugin({
  id: "simple-test-things",
});

export const isAvailableYes = (_entity: Entity) => true;

export const isAvailableNo = (_entity: Entity) => false;

export const isAvailableUsingContext = (
  _entity: Entity,
  _context: { apis: ApiHolder }
) => {
  return true;
};

export const TestInfoCard = simpleTestThingsPlugin.provide(
  createComponentExtension({
    name: "TestInfoCard",
    component: {
      lazy: () =>
        import("./components/TestInfoCard").then((m) => m.TestInfoCard),
    },
  })
);

export const SimpleTestFieldExtension: FieldExtensionComponent<string, string> =
  scaffolderPlugin.provide(
    createScaffolderFieldExtension({
      name: "SimpleTestFieldExtension",
      component: SimpleTestField,
      validation: simpleDoNothingValidation,
    })
  );
