1. `tsc *.ts` to compile all tyescript files
2. `tsconfig.json` will be place where you will define pre-exisiting rules before tsc compiles code
3. Adding `jsx: react` in compiler option is good if you are dealing with react component as it transforms
it into `React.createElement` thing.
4. `webpack` will take all the files and different modules and then will convert them into one single file and that browser can understand and load directly
5. `copy-webpack-plugin` to copy static files in targeted folder




### Additional Note:

`Note`: Even though when you compile typescript to javascript using `.tsc` that will only convert it into javascript file, in order to compile this React imports and everything in plain javascript, you still need webpack compiler. In shorter, you might need `webpack` to bundle them all.