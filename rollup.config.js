import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'


export default {
    input: 'src/app.js',
    output: {
        file: 'docs/js/app.js',
        format: 'iife',
        name: 'bundle',
    },
    plugins: [
        scss ( {
                output: 'docs/css/styles.css',
            }
        ),
        serve ( 'docs' )
    ]
}