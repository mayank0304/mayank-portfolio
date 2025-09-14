export interface RouteInterface {
  path: string;
  label: string;
  exact?: boolean;
  nestedRoutes?: Array<RouteInterface>;
}
