fx_version 'cerulean'

game 'gta5'

lua54 'yes'


description 'Redux Scripts Logs system'

author 'Redux Scripts'

client_scripts {
    'build/client/cl_*.js',
}


server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'build/server/sv_*.js',
    'server/*.lua'

}

server_export 'AddLog'
exports {
    'AddLog'
} 