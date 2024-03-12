import React from "react";

/**
 * Builds a tree of provider components.
 *
 * @param componentsWithProps An array of component types and their optional props.
 * @returns The root component of the providers tree.
 */
function buildProvidersTree(
  componentsWithProps: [React.ComponentType<any>, Record<string, unknown>?][]
): React.ComponentType<any> {
  const initialComponent: React.ComponentType<any> = ({ children }) => children;

  return componentsWithProps.reduce(
    (
      AccumulatedComponent: React.ComponentType<any>,
      [Provider, props = {}]
    ) => {
      return ({ children }: React.PropsWithChildren<unknown>) => {
        return (
          <AccumulatedComponent>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponent>
        );
      };
    },
    initialComponent
  );
}

export default buildProvidersTree;
