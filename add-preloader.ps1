$distPath = "C:\Users\KillerGrowth\.openclaw\workspace\sites\dons-heating\dist"

# The preloader HTML to inject right after <body>
$preloaderHtml = @'
<div class="preloader" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:999999;display:flex;align-items:center;justify-content:center;">
  <div style="width:48px;height:48px;border:4px solid #e0e0e0;border-top-color:#1B2A4A;border-radius:50%;animation:spin 0.7s linear infinite;"></div>
</div>
<style>@keyframes spin{to{transform:rotate(360deg)}}</style>
'@

$files = Get-ChildItem $distPath -Recurse -Filter "*.html" | Where-Object { $_.FullName -notmatch "\\blog-posts\\" }

$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Skip if already has preloader
    if ($content -match 'class="preloader"') {
        Write-Host "SKIP (already has preloader): $($file.FullName)"
        continue
    }
    
    # Inject right after <body>
    if ($content -match '<body[^>]*>') {
        $newContent = $content -replace '(<body[^>]*>)', "`$1`n$preloaderHtml"
        [System.IO.File]::WriteAllText($file.FullName, $newContent, [System.Text.Encoding]::UTF8)
        $count++
        Write-Host "UPDATED: $($file.Name)"
    } else {
        Write-Host "NO BODY TAG: $($file.FullName)"
    }
}

Write-Host "`nDone. Updated $count files."
