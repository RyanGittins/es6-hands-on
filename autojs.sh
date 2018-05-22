inotifywait -rqm . -e create -e close_write |
    while read path action file; do
        case "$file" in *.js | *.mjs)
                clear
                echo -e "\e[90m> $file:"
                sleep 0.25
                output="$(nodejs --use_strict --experimental-modules --no-warnings $path$file)"
                echo -e "\e[97m$output"
        esac
    done
