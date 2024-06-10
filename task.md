> [RESULTS](#result) below

Requirement:

1. Utilize GraphQL to fetch a list of places, which has to be displayed in a row.
2. Employ a UI library component to present the places as cards in the row, avoiding the need to create them from scratch.
3. Introduce an additional row dedicated to flights, showcasing origin, destination, and price. This data can be hardcoded, similar to how it's handled for places. You can use prebuilt card component here as well.
4. Implement functionality where clicking on a place or flight opens a new page, displaying detailed information about the selected item. Minimal styling for font sizes and layout suffices for this task.
5. Allocate a maximum of three hours for this task.
6. Document potential enhancements for discussion during the review phase, from your experience in working on the task.

Submission:

1. Please send us a github repo link with the solution.
2. Note how much time you spend on the task.
3. Did you take any short cuts, what would you do differently if you had more time for the assigment?

## Result

### Time

1. 20min
2. 1h 30min
3. 40min
4. 1h

### Enhancements

- Splitting into Components
- For some reasons, I couldn't set up TailwindCSS with [DaisyUI](https://daisyui.com/) 🤔 thus went for [MUI](https://mui.com/material-ui/all-components/) --> I googled "React Component Library"
- Add testing
- Create unified layout to avoid Duplication and apply KISS
- Make more use of Typescript
- For some reason, my compiler is off. It shows error when using MUI
- Replace Prettier with [BiomeJS](https://biomejs.dev/) --> it has also Linting!
- Replace Yarn with [PNPM](https://pnpm.io/) --> Your hard drive will thank it
