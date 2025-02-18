/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DiceImport } from './routes/dice'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const DiceRoute = DiceImport.update({
  id: '/dice',
  path: '/dice',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dice': {
      id: '/dice'
      path: '/dice'
      fullPath: '/dice'
      preLoaderRoute: typeof DiceImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dice': typeof DiceRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/dice'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/dice'
  id: '__root__' | '/' | '/dice'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DiceRoute: typeof DiceRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DiceRoute: DiceRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dice"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dice": {
      "filePath": "dice.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
