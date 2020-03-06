#!/bin/bash

# Switch cardinal to pskwebcomponents dev version
if [[ ! -L "./cardinal" && -d "./cardinal" ]]; then
    mv cardinal cardinal-dist
    mv cardinal.js cardinal-dist.js
    mv themes/commons themes/commons-dist
    mv themes/default themes/default-dist

    ln -s ../pskwebcomponents/dist/cardinal cardinal
    ln -s ../pskwebcomponents/dist/cardinal.js cardinal.js
    ln -s ../../pskwebcomponents/themes/commons themes/commons
    ln -s ../../pskwebcomponents/themes/default themes/default
else
    unlink cardinal
    unlink cardinal.js
    unlink themes/commons
    unlink themes/default
    mv cardinal-dist cardinal
    mv cardinal-dist.js cardinal.js
    mv themes/commons-dist themes/commons
    mv themes/default-dist themes/default
fi
