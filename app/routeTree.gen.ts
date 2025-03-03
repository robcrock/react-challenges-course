/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WhackAMoleImport } from './routes/whack-a-mole'
import { Route as TreeImport } from './routes/tree'
import { Route as TrafficLightImport } from './routes/traffic-light'
import { Route as TicTacToeImport } from './routes/tic-tac-toe'
import { Route as StopwatchImport } from './routes/stopwatch'
import { Route as SplitImport } from './routes/split'
import { Route as SpeedImport } from './routes/speed'
import { Route as SimonImport } from './routes/simon'
import { Route as RockPaperScissorsRobImport } from './routes/rock-paper-scissors-rob'
import { Route as RockPaperScissorsImport } from './routes/rock-paper-scissors'
import { Route as QuoteImport } from './routes/quote'
import { Route as QuizImport } from './routes/quiz'
import { Route as PasswordImport } from './routes/password'
import { Route as MemoryImport } from './routes/memory'
import { Route as HistogramImport } from './routes/histogram'
import { Route as HanoiImport } from './routes/hanoi'
import { Route as HangmanImport } from './routes/hangman'
import { Route as GradientImport } from './routes/gradient'
import { Route as ExpenseImport } from './routes/expense'
import { Route as DiceImport } from './routes/dice'
import { Route as ConnectFourImport } from './routes/connect-four'
import { Route as CalculatorImport } from './routes/calculator'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WhackAMoleRoute = WhackAMoleImport.update({
  id: '/whack-a-mole',
  path: '/whack-a-mole',
  getParentRoute: () => rootRoute,
} as any)

const TreeRoute = TreeImport.update({
  id: '/tree',
  path: '/tree',
  getParentRoute: () => rootRoute,
} as any)

const TrafficLightRoute = TrafficLightImport.update({
  id: '/traffic-light',
  path: '/traffic-light',
  getParentRoute: () => rootRoute,
} as any)

const TicTacToeRoute = TicTacToeImport.update({
  id: '/tic-tac-toe',
  path: '/tic-tac-toe',
  getParentRoute: () => rootRoute,
} as any)

const StopwatchRoute = StopwatchImport.update({
  id: '/stopwatch',
  path: '/stopwatch',
  getParentRoute: () => rootRoute,
} as any)

const SplitRoute = SplitImport.update({
  id: '/split',
  path: '/split',
  getParentRoute: () => rootRoute,
} as any)

const SpeedRoute = SpeedImport.update({
  id: '/speed',
  path: '/speed',
  getParentRoute: () => rootRoute,
} as any)

const SimonRoute = SimonImport.update({
  id: '/simon',
  path: '/simon',
  getParentRoute: () => rootRoute,
} as any)

const RockPaperScissorsRobRoute = RockPaperScissorsRobImport.update({
  id: '/rock-paper-scissors-rob',
  path: '/rock-paper-scissors-rob',
  getParentRoute: () => rootRoute,
} as any)

const RockPaperScissorsRoute = RockPaperScissorsImport.update({
  id: '/rock-paper-scissors',
  path: '/rock-paper-scissors',
  getParentRoute: () => rootRoute,
} as any)

const QuoteRoute = QuoteImport.update({
  id: '/quote',
  path: '/quote',
  getParentRoute: () => rootRoute,
} as any)

const QuizRoute = QuizImport.update({
  id: '/quiz',
  path: '/quiz',
  getParentRoute: () => rootRoute,
} as any)

const PasswordRoute = PasswordImport.update({
  id: '/password',
  path: '/password',
  getParentRoute: () => rootRoute,
} as any)

const MemoryRoute = MemoryImport.update({
  id: '/memory',
  path: '/memory',
  getParentRoute: () => rootRoute,
} as any)

const HistogramRoute = HistogramImport.update({
  id: '/histogram',
  path: '/histogram',
  getParentRoute: () => rootRoute,
} as any)

const HanoiRoute = HanoiImport.update({
  id: '/hanoi',
  path: '/hanoi',
  getParentRoute: () => rootRoute,
} as any)

const HangmanRoute = HangmanImport.update({
  id: '/hangman',
  path: '/hangman',
  getParentRoute: () => rootRoute,
} as any)

const GradientRoute = GradientImport.update({
  id: '/gradient',
  path: '/gradient',
  getParentRoute: () => rootRoute,
} as any)

const ExpenseRoute = ExpenseImport.update({
  id: '/expense',
  path: '/expense',
  getParentRoute: () => rootRoute,
} as any)

const DiceRoute = DiceImport.update({
  id: '/dice',
  path: '/dice',
  getParentRoute: () => rootRoute,
} as any)

const ConnectFourRoute = ConnectFourImport.update({
  id: '/connect-four',
  path: '/connect-four',
  getParentRoute: () => rootRoute,
} as any)

const CalculatorRoute = CalculatorImport.update({
  id: '/calculator',
  path: '/calculator',
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
    '/calculator': {
      id: '/calculator'
      path: '/calculator'
      fullPath: '/calculator'
      preLoaderRoute: typeof CalculatorImport
      parentRoute: typeof rootRoute
    }
    '/connect-four': {
      id: '/connect-four'
      path: '/connect-four'
      fullPath: '/connect-four'
      preLoaderRoute: typeof ConnectFourImport
      parentRoute: typeof rootRoute
    }
    '/dice': {
      id: '/dice'
      path: '/dice'
      fullPath: '/dice'
      preLoaderRoute: typeof DiceImport
      parentRoute: typeof rootRoute
    }
    '/expense': {
      id: '/expense'
      path: '/expense'
      fullPath: '/expense'
      preLoaderRoute: typeof ExpenseImport
      parentRoute: typeof rootRoute
    }
    '/gradient': {
      id: '/gradient'
      path: '/gradient'
      fullPath: '/gradient'
      preLoaderRoute: typeof GradientImport
      parentRoute: typeof rootRoute
    }
    '/hangman': {
      id: '/hangman'
      path: '/hangman'
      fullPath: '/hangman'
      preLoaderRoute: typeof HangmanImport
      parentRoute: typeof rootRoute
    }
    '/hanoi': {
      id: '/hanoi'
      path: '/hanoi'
      fullPath: '/hanoi'
      preLoaderRoute: typeof HanoiImport
      parentRoute: typeof rootRoute
    }
    '/histogram': {
      id: '/histogram'
      path: '/histogram'
      fullPath: '/histogram'
      preLoaderRoute: typeof HistogramImport
      parentRoute: typeof rootRoute
    }
    '/memory': {
      id: '/memory'
      path: '/memory'
      fullPath: '/memory'
      preLoaderRoute: typeof MemoryImport
      parentRoute: typeof rootRoute
    }
    '/password': {
      id: '/password'
      path: '/password'
      fullPath: '/password'
      preLoaderRoute: typeof PasswordImport
      parentRoute: typeof rootRoute
    }
    '/quiz': {
      id: '/quiz'
      path: '/quiz'
      fullPath: '/quiz'
      preLoaderRoute: typeof QuizImport
      parentRoute: typeof rootRoute
    }
    '/quote': {
      id: '/quote'
      path: '/quote'
      fullPath: '/quote'
      preLoaderRoute: typeof QuoteImport
      parentRoute: typeof rootRoute
    }
    '/rock-paper-scissors': {
      id: '/rock-paper-scissors'
      path: '/rock-paper-scissors'
      fullPath: '/rock-paper-scissors'
      preLoaderRoute: typeof RockPaperScissorsImport
      parentRoute: typeof rootRoute
    }
    '/rock-paper-scissors-rob': {
      id: '/rock-paper-scissors-rob'
      path: '/rock-paper-scissors-rob'
      fullPath: '/rock-paper-scissors-rob'
      preLoaderRoute: typeof RockPaperScissorsRobImport
      parentRoute: typeof rootRoute
    }
    '/simon': {
      id: '/simon'
      path: '/simon'
      fullPath: '/simon'
      preLoaderRoute: typeof SimonImport
      parentRoute: typeof rootRoute
    }
    '/speed': {
      id: '/speed'
      path: '/speed'
      fullPath: '/speed'
      preLoaderRoute: typeof SpeedImport
      parentRoute: typeof rootRoute
    }
    '/split': {
      id: '/split'
      path: '/split'
      fullPath: '/split'
      preLoaderRoute: typeof SplitImport
      parentRoute: typeof rootRoute
    }
    '/stopwatch': {
      id: '/stopwatch'
      path: '/stopwatch'
      fullPath: '/stopwatch'
      preLoaderRoute: typeof StopwatchImport
      parentRoute: typeof rootRoute
    }
    '/tic-tac-toe': {
      id: '/tic-tac-toe'
      path: '/tic-tac-toe'
      fullPath: '/tic-tac-toe'
      preLoaderRoute: typeof TicTacToeImport
      parentRoute: typeof rootRoute
    }
    '/traffic-light': {
      id: '/traffic-light'
      path: '/traffic-light'
      fullPath: '/traffic-light'
      preLoaderRoute: typeof TrafficLightImport
      parentRoute: typeof rootRoute
    }
    '/tree': {
      id: '/tree'
      path: '/tree'
      fullPath: '/tree'
      preLoaderRoute: typeof TreeImport
      parentRoute: typeof rootRoute
    }
    '/whack-a-mole': {
      id: '/whack-a-mole'
      path: '/whack-a-mole'
      fullPath: '/whack-a-mole'
      preLoaderRoute: typeof WhackAMoleImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/calculator': typeof CalculatorRoute
  '/connect-four': typeof ConnectFourRoute
  '/dice': typeof DiceRoute
  '/expense': typeof ExpenseRoute
  '/gradient': typeof GradientRoute
  '/hangman': typeof HangmanRoute
  '/hanoi': typeof HanoiRoute
  '/histogram': typeof HistogramRoute
  '/memory': typeof MemoryRoute
  '/password': typeof PasswordRoute
  '/quiz': typeof QuizRoute
  '/quote': typeof QuoteRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/rock-paper-scissors-rob': typeof RockPaperScissorsRobRoute
  '/simon': typeof SimonRoute
  '/speed': typeof SpeedRoute
  '/split': typeof SplitRoute
  '/stopwatch': typeof StopwatchRoute
  '/tic-tac-toe': typeof TicTacToeRoute
  '/traffic-light': typeof TrafficLightRoute
  '/tree': typeof TreeRoute
  '/whack-a-mole': typeof WhackAMoleRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/calculator': typeof CalculatorRoute
  '/connect-four': typeof ConnectFourRoute
  '/dice': typeof DiceRoute
  '/expense': typeof ExpenseRoute
  '/gradient': typeof GradientRoute
  '/hangman': typeof HangmanRoute
  '/hanoi': typeof HanoiRoute
  '/histogram': typeof HistogramRoute
  '/memory': typeof MemoryRoute
  '/password': typeof PasswordRoute
  '/quiz': typeof QuizRoute
  '/quote': typeof QuoteRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/rock-paper-scissors-rob': typeof RockPaperScissorsRobRoute
  '/simon': typeof SimonRoute
  '/speed': typeof SpeedRoute
  '/split': typeof SplitRoute
  '/stopwatch': typeof StopwatchRoute
  '/tic-tac-toe': typeof TicTacToeRoute
  '/traffic-light': typeof TrafficLightRoute
  '/tree': typeof TreeRoute
  '/whack-a-mole': typeof WhackAMoleRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/calculator': typeof CalculatorRoute
  '/connect-four': typeof ConnectFourRoute
  '/dice': typeof DiceRoute
  '/expense': typeof ExpenseRoute
  '/gradient': typeof GradientRoute
  '/hangman': typeof HangmanRoute
  '/hanoi': typeof HanoiRoute
  '/histogram': typeof HistogramRoute
  '/memory': typeof MemoryRoute
  '/password': typeof PasswordRoute
  '/quiz': typeof QuizRoute
  '/quote': typeof QuoteRoute
  '/rock-paper-scissors': typeof RockPaperScissorsRoute
  '/rock-paper-scissors-rob': typeof RockPaperScissorsRobRoute
  '/simon': typeof SimonRoute
  '/speed': typeof SpeedRoute
  '/split': typeof SplitRoute
  '/stopwatch': typeof StopwatchRoute
  '/tic-tac-toe': typeof TicTacToeRoute
  '/traffic-light': typeof TrafficLightRoute
  '/tree': typeof TreeRoute
  '/whack-a-mole': typeof WhackAMoleRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/calculator'
    | '/connect-four'
    | '/dice'
    | '/expense'
    | '/gradient'
    | '/hangman'
    | '/hanoi'
    | '/histogram'
    | '/memory'
    | '/password'
    | '/quiz'
    | '/quote'
    | '/rock-paper-scissors'
    | '/rock-paper-scissors-rob'
    | '/simon'
    | '/speed'
    | '/split'
    | '/stopwatch'
    | '/tic-tac-toe'
    | '/traffic-light'
    | '/tree'
    | '/whack-a-mole'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/calculator'
    | '/connect-four'
    | '/dice'
    | '/expense'
    | '/gradient'
    | '/hangman'
    | '/hanoi'
    | '/histogram'
    | '/memory'
    | '/password'
    | '/quiz'
    | '/quote'
    | '/rock-paper-scissors'
    | '/rock-paper-scissors-rob'
    | '/simon'
    | '/speed'
    | '/split'
    | '/stopwatch'
    | '/tic-tac-toe'
    | '/traffic-light'
    | '/tree'
    | '/whack-a-mole'
  id:
    | '__root__'
    | '/'
    | '/calculator'
    | '/connect-four'
    | '/dice'
    | '/expense'
    | '/gradient'
    | '/hangman'
    | '/hanoi'
    | '/histogram'
    | '/memory'
    | '/password'
    | '/quiz'
    | '/quote'
    | '/rock-paper-scissors'
    | '/rock-paper-scissors-rob'
    | '/simon'
    | '/speed'
    | '/split'
    | '/stopwatch'
    | '/tic-tac-toe'
    | '/traffic-light'
    | '/tree'
    | '/whack-a-mole'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CalculatorRoute: typeof CalculatorRoute
  ConnectFourRoute: typeof ConnectFourRoute
  DiceRoute: typeof DiceRoute
  ExpenseRoute: typeof ExpenseRoute
  GradientRoute: typeof GradientRoute
  HangmanRoute: typeof HangmanRoute
  HanoiRoute: typeof HanoiRoute
  HistogramRoute: typeof HistogramRoute
  MemoryRoute: typeof MemoryRoute
  PasswordRoute: typeof PasswordRoute
  QuizRoute: typeof QuizRoute
  QuoteRoute: typeof QuoteRoute
  RockPaperScissorsRoute: typeof RockPaperScissorsRoute
  RockPaperScissorsRobRoute: typeof RockPaperScissorsRobRoute
  SimonRoute: typeof SimonRoute
  SpeedRoute: typeof SpeedRoute
  SplitRoute: typeof SplitRoute
  StopwatchRoute: typeof StopwatchRoute
  TicTacToeRoute: typeof TicTacToeRoute
  TrafficLightRoute: typeof TrafficLightRoute
  TreeRoute: typeof TreeRoute
  WhackAMoleRoute: typeof WhackAMoleRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CalculatorRoute: CalculatorRoute,
  ConnectFourRoute: ConnectFourRoute,
  DiceRoute: DiceRoute,
  ExpenseRoute: ExpenseRoute,
  GradientRoute: GradientRoute,
  HangmanRoute: HangmanRoute,
  HanoiRoute: HanoiRoute,
  HistogramRoute: HistogramRoute,
  MemoryRoute: MemoryRoute,
  PasswordRoute: PasswordRoute,
  QuizRoute: QuizRoute,
  QuoteRoute: QuoteRoute,
  RockPaperScissorsRoute: RockPaperScissorsRoute,
  RockPaperScissorsRobRoute: RockPaperScissorsRobRoute,
  SimonRoute: SimonRoute,
  SpeedRoute: SpeedRoute,
  SplitRoute: SplitRoute,
  StopwatchRoute: StopwatchRoute,
  TicTacToeRoute: TicTacToeRoute,
  TrafficLightRoute: TrafficLightRoute,
  TreeRoute: TreeRoute,
  WhackAMoleRoute: WhackAMoleRoute,
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
        "/calculator",
        "/connect-four",
        "/dice",
        "/expense",
        "/gradient",
        "/hangman",
        "/hanoi",
        "/histogram",
        "/memory",
        "/password",
        "/quiz",
        "/quote",
        "/rock-paper-scissors",
        "/rock-paper-scissors-rob",
        "/simon",
        "/speed",
        "/split",
        "/stopwatch",
        "/tic-tac-toe",
        "/traffic-light",
        "/tree",
        "/whack-a-mole"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/calculator": {
      "filePath": "calculator.tsx"
    },
    "/connect-four": {
      "filePath": "connect-four.tsx"
    },
    "/dice": {
      "filePath": "dice.tsx"
    },
    "/expense": {
      "filePath": "expense.tsx"
    },
    "/gradient": {
      "filePath": "gradient.tsx"
    },
    "/hangman": {
      "filePath": "hangman.tsx"
    },
    "/hanoi": {
      "filePath": "hanoi.tsx"
    },
    "/histogram": {
      "filePath": "histogram.tsx"
    },
    "/memory": {
      "filePath": "memory.tsx"
    },
    "/password": {
      "filePath": "password.tsx"
    },
    "/quiz": {
      "filePath": "quiz.tsx"
    },
    "/quote": {
      "filePath": "quote.tsx"
    },
    "/rock-paper-scissors": {
      "filePath": "rock-paper-scissors.tsx"
    },
    "/rock-paper-scissors-rob": {
      "filePath": "rock-paper-scissors-rob.tsx"
    },
    "/simon": {
      "filePath": "simon.tsx"
    },
    "/speed": {
      "filePath": "speed.tsx"
    },
    "/split": {
      "filePath": "split.tsx"
    },
    "/stopwatch": {
      "filePath": "stopwatch.tsx"
    },
    "/tic-tac-toe": {
      "filePath": "tic-tac-toe.tsx"
    },
    "/traffic-light": {
      "filePath": "traffic-light.tsx"
    },
    "/tree": {
      "filePath": "tree.tsx"
    },
    "/whack-a-mole": {
      "filePath": "whack-a-mole.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
